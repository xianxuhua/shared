package main

import (
	"context"
	"github.com/gin-gonic/gin"
	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"github.com/namsral/flag"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/protobuf/encoding/protojson"
	"log"
	accsimpb "safe/accsim/api/gen"
	authpb "safe/auth/api/gen"
	dowpb "safe/dow/api/gen"
	engineeringpb "safe/engineering/api/gen"
	firelosspb "safe/fireloss/api/gen"
	gustavpb "safe/gustav/api/gen"
	"safe/middleware"
	mondpb "safe/mond/api/gen"
)

var authAddr = flag.String("auth_addr", "localhost:8888", "")
var gustavAddr = flag.String("gustav_addr", "localhost:8081", "")
var dowAddr = flag.String("dow_addr", "localhost:8082", "")
var mondAddr = flag.String("mond_addr", "localhost:8083", "")
var engineeringAddr = flag.String("engineering_addr", "localhost:8084", "")
var firelossAddr = flag.String("fireloss_addr", "localhost:8085", "")
var accsimAddr = flag.String("accsim_addr", "localhost:8086", "")
var addr = flag.String("port", "0.0.0.0:8080", "")

func main() {
	flag.Parse()
	mux := runtime.NewServeMux(runtime.WithMarshalerOption(
		runtime.MIMEWildcard, &runtime.JSONPb{
			MarshalOptions: protojson.MarshalOptions{
				UseEnumNumbers: true,
			},
		},
	))

	ctx, cancelFunc := context.WithCancel(context.Background())
	defer cancelFunc()

	services := []struct {
		registerFunc func(ctx context.Context, mux *runtime.ServeMux, endpoint string, opts []grpc.DialOption) (err error)
		addr         string
	}{
		{
			registerFunc: authpb.RegisterAuthServiceHandlerFromEndpoint,
			addr:         *authAddr,
		},
		{
			registerFunc: gustavpb.RegisterGustavServiceHandlerFromEndpoint,
			addr:         *gustavAddr,
		},
		{
			registerFunc: dowpb.RegisterDowServiceHandlerFromEndpoint,
			addr:         *dowAddr,
		},
		{
			registerFunc: mondpb.RegisterMondServiceHandlerFromEndpoint,
			addr:         *mondAddr,
		},
		{
			registerFunc: engineeringpb.RegisterEngineeringServiceHandlerFromEndpoint,
			addr:         *engineeringAddr,
		},
		{
			registerFunc: firelosspb.RegisterFireLossServiceHandlerFromEndpoint,
			addr:         *firelossAddr,
		},
		{
			registerFunc: accsimpb.RegisterAccSimServiceHandlerFromEndpoint,
			addr:         *accsimAddr,
		},
	}
	for _, service := range services {
		err := service.registerFunc(ctx, mux, service.addr, []grpc.DialOption{
			grpc.WithTransportCredentials(insecure.NewCredentials()),
		})
		if err != nil {
			log.Fatal(err)
		}
	}

	engine := gin.Default()
	//engine.Use(middleware.Auth())
	engine.Use(middleware.Cors())
	engine.POST("/*method", gin.WrapH(mux))
	engine.GET("/healthz", func(c *gin.Context) {
		c.String(200, "ok")
	})
	err := engine.Run(*addr)
	if err != nil {
		log.Fatal(err)
	}
}
