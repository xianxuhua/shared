package main

import (
	"encoding/json"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
	"os"
)

type Point struct {
	Name    string `json:"name,omitempty"`
	Lnglats string `json:"lnglats,omitempty"`
}

func main() {
	file, err := os.ReadFile("/Users/xxh/Downloads/lnglats.json")
	if err != nil {
		panic(err)
	}

	points := []Point{}
	err = json.Unmarshal(file, &points)
	if err != nil {
		panic(err)
	}
	db, err := sqlx.Connect("mysql", "root:123456@tcp(127.0.0.1:3306)/safe_calc?charset=utf8")
	if err != nil {
		panic(err)
	}
	if err != nil {
		panic(err)
	}

	for _, v := range points {
		fmt.Println(v.Lnglats)
		_, err := db.Exec("insert into t_enterprise_area (name, path, enterprise_id) values (?, ?, 1)", v.Name, v.Lnglats)
		if err != nil {
			panic(err)
		}
	}
}
