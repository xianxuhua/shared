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

func TestDao_GetFireGrowthCategory(t *testing.T) {
	dao := createDao()
	category, err := dao.GetFireGrowthCategory()
	if err != nil {
		t.Fatal(err)
	}

	t.Logf("%+v\n", category)
}

func TestDao_GetFireGrowthCoefficient(t *testing.T) {
	dao := createDao()
	coefficient, err := dao.GetFireGrowthCoefficient("商店，加油站等", "标准")
	if err != nil {
		t.Fatal(err)
	}

	t.Log(coefficient)
}
