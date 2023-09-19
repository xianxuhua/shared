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
func TestDao_GetQm(t *testing.T) {
	dao := createDao()
	qm, err := dao.GetQm(2341)
	if err != nil {
		t.Fatal(err)
	}
	t.Log(qm)
}

func TestDao_GetCombustibleNames(t *testing.T) {
	dao := createDao()
	names, err := dao.GetCombustibleNames()
	if err != nil {
		t.Fatal(err)
	}
	t.Log(names)
}

func TestDao_GetFireResistTops(t *testing.T) {
	dao := createDao()
	tops, err := dao.GetFireResistTops()
	if err != nil {
		t.Fatal(err)
	}
	t.Log(tops)
}

func TestDao_GetFireSourceFeatures(t *testing.T) {
	dao := createDao()
	features, err := dao.GetFireSourceFeatures()
	if err != nil {
		t.Fatal(err)
	}
	t.Log(features)
}

func TestDao_GetFireFightPowerPropertyDis(t *testing.T) {
	dao := createDao()
	propertyRecords, disRecords, err := dao.GetFireFightPowerPropertyDis()
	if err != nil {
		t.Fatal(err)
	}
	t.Log(propertyRecords)
	t.Log(disRecords)
}

func TestDao_GetQi(t *testing.T) {
	dao := createDao()
	c, err := dao.GetC("润滑油")
	if err != nil {
		t.Fatal(err)
	}
	t.Log(c)

	qi, err := dao.GetQi()
	if err != nil {
		t.Fatal(err)
	}
	t.Log(qi)

	qm, err := dao.GetQm(17)
	if err != nil {
		t.Fatal(err)
	}
	t.Log(qm)

	b, err := dao.GetB(1600)
	if err != nil {
		t.Fatal(err)
	}
	t.Log(b)

	w, err := dao.GetW("<30")
	if err != nil {
		t.Fatal(err)
	}
	t.Log(w)

	ri, err := dao.GetRi("点火源多，易于着火，堆放松散：火现发展速度快")
	if err != nil {
		t.Fatal(err)
	}
	t.Log(ri)

	l, err := dao.GetL("职业消队、企业消防队", ">11")
	if err != nil {
		t.Fatal(err)
	}
	t.Log(l)
}

func TestDao_GetAssetsRiskFeature(t *testing.T) {
	dao := createDao()
	feature, err := dao.GetPersonRiskFeature()
	if err != nil {
		t.Fatal(err)
	}
	t.Log(feature)
	riskFeature, err := dao.GetSmokeRiskFeature()
	if err != nil {
		t.Fatal(err)
	}
	t.Log(riskFeature)
	assetsRiskFeature, err := dao.GetAssetsRiskFeature()
	if err != nil {
		t.Fatal(err)
	}
	t.Log(assetsRiskFeature)
}

func TestDao_GetAreaPoints(t *testing.T) {
	dao := createDao()
	err := dao.SavePoints(1.1, 3.14)
	if err != nil {
		t.Fatal(err)
	}
	t.Log(err)

	points, err := dao.GetPoints()
	if err != nil {
		t.Fatal(err)
	}
	t.Log(points)
}

func TestDao_GetQi2(t *testing.T) {
	dao := createDao()
	qi, err := dao.GetQi()
	if err != nil {
		t.Fatal(err)
	}
	t.Log(qi)
}
