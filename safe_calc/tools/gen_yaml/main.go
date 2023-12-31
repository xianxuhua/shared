package main

import (
	"bytes"
	"flag"
	"fmt"
	"io/fs"
	"os"
	"path/filepath"
	"regexp"
	"strings"

	"github.com/spf13/viper"
	"gopkg.in/yaml.v2"
)

type RulesConfig struct {
	Selector string `mapstructure:"selector"`
	Post     string `mapstructure:"post"`
	Body     string `mapstructure:"body"`
}
type HttpConfig struct {
	Rules []RulesConfig `mapstructure:"rules"`
}
type GatewayConfig struct {
	Http HttpConfig `mapstructure:"http"`
}

func writeConfigFile(config GatewayConfig, path string) {
	v := viper.New()
	v.SetDefault("type", 3)
	v.SetDefault("config_version", "google.api.Service")

	b, err := yaml.Marshal(&config)
	if err != nil {
		panic(err)
	}
	defaultConfig := bytes.NewReader(b)
	v.SetConfigType("yaml")

	if err := v.MergeConfig(defaultConfig); err != nil {
		panic(err)
	}
	err = v.WriteConfigAs(path)
	if err != nil {
		panic(err)
	}
}

func writeTsUrl(targetPath, packageName string, methods []string) {
	os.Mkdir(targetPath, 0755)
	file, _ := os.Create(targetPath + "/" + packageName + "_url.ts")
	defer file.Close()
	s := `export namespace ` + packageName + "Url {\n"
	for _, m := range methods {
		s += `    export const ` + m + ` = "/` + packageName + `/` + m + `"` + "\n"
	}
	s += "\n}"
	file.WriteString(s)
}

func main() {
	packageName := flag.String("packageName", "", "")
	root := flag.String("root", "", "")
	tsPath := flag.String("tsPath", "", "")
	flag.Parse()
	err := filepath.Walk(*root, func(path string, info fs.FileInfo, err error) error {

		if strings.HasSuffix(path, *packageName+"_grpc.pb.go") {
			file, err := os.ReadFile(path)
			if err != nil {
				panic(err)
			}
			serviceNameReg := regexp.MustCompile(`ServiceName: "(.+?)",`)
			methodsReg := regexp.MustCompile(`MethodName: "(.+?)",`)
			if err != nil {
				panic(err)
			}
			stringSubmatch := serviceNameReg.FindAllStringSubmatch(string(file), -1)
			// auth.AuthService
			serviceName := stringSubmatch[0][1]
			config := GatewayConfig{}

			submatch := methodsReg.FindAllStringSubmatch(string(file), -1)
			// auth
			//packageName := strings.Split(serviceName, ".")[0]
			fmt.Println("generating", *packageName)
			// v: Login
			methods := []string{}
			for _, v := range submatch {
				rules := RulesConfig{
					Selector: serviceName + "." + v[1],
					Post:     "/" + *packageName + "/" + v[1],
					Body:     "*",
				}
				methods = append(methods, v[1])
				config.Http.Rules = append(config.Http.Rules, rules)
			}
			writeConfigFile(config, filepath.Dir(filepath.Dir(path))+"/"+*packageName+".yaml")
			writeTsUrl(*tsPath, *packageName, methods)
		}
		return nil
	})
	if err != nil {
		panic(err)
	}
}
