package dao

import (
	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
	"go.uber.org/zap"
	"testing"
)

func createDao() Dao {
	db, err := sqlx.Connect("mysql", "root:123456@tcp(127.0.0.1:3306)/safe_calc?charset=utf8")
	logger, err := zap.NewDevelopment()
	if err != nil {
		panic(err)
	}
	dao := Dao{
		Db:     db,
		Logger: logger,
	}
	return dao
}
