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

func TestDao_GetTLV(t *testing.T) {
	dao := createDao()
	tlv, err := dao.GetTLV()
	if err != nil {
		t.Fatal(err)
	}
	t.Log(tlv)
	exposure, err := dao.GetShortTimeExposure()
	if err != nil {
		t.Fatal(err)
	}
	t.Log(exposure)
	materialType, err := dao.GetMaterialType()
	if err != nil {
		t.Fatal(err)
	}
	t.Log(materialType)
}

func TestDao_GetMaterials(t *testing.T) {
	dao := createDao()
	materials, err := dao.GetMaterials()
	if err != nil {
		t.Fatal(err)
	}
	t.Log(materials)
	err = dao.UpdateMaterial("26", "ccc", 12, 0.0904)
	if err != nil {
		t.Fatal(err)
	}
	err = dao.DeleteMaterial("26")
	if err != nil {
		t.Fatal(err)
	}
}
