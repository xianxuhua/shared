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

func TestDao_GetChemicalActivityGrade(t *testing.T) {
	dao := createDao()
	grade, err := dao.GetChemicalActivityGrade("自身稳定，在加温加压条件下变得不稳定的物质")
	if err != nil {
		t.Fatal(err)
	}

	t.Log(grade)
}

func TestDao_GetCoefficientByTypeGrade(t *testing.T) {
	dao := createDao()
	grade, err := dao.GetCoefficientByTypeGrade("液体、气体(包括挥发性固体)的易燃或可燃性", "不燃物", 0)
	if err != nil {
		t.Fatal(err)
	}
	t.Log(grade)
}

func TestDao_GetReactionCharacter(t *testing.T) {
	dao := createDao()
	character, err := dao.GetReactionCharacter()
	if err != nil {
		t.Fatal(err)
	}

	t.Log(character)
}

func TestDao_GetType(t *testing.T) {
	dao := createDao()
	getType, err := dao.GetType()
	if err != nil {
		t.Fatal(err)
	}

	for _, v := range getType {
		t.Log(v)
	}
}

func TestDao_GetCoefficientByName(t *testing.T) {
	dao := createDao()
	name, err := dao.GetCoefficientByName("酸醋")
	if err != nil {
		t.Fatal(err)
	}

	t.Log(name)
}

func TestDao_GetNames(t *testing.T) {
	dao := createDao()
	names, err := dao.GetNames()
	if err != nil {
		t.Fatal(err)
	}

	t.Log(names)
}
