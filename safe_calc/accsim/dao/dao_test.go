package dao

import (
	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
	"go.uber.org/zap"
	accsimpb "safe/accsim/api/gen"
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

func TestDao_GetAccScene(t *testing.T) {
	dao := createDao()
	scene, err := dao.GetAccScene(1)
	if err != nil {
		t.Fatal(err)
	}

	t.Log(scene)
}

func TestDao_GetEquipInfo(t *testing.T) {
	dao := createDao()
	info, err := dao.GetEquipInfo("(1,2,3)")
	if err != nil {
		t.Fatal(err)
	}
	t.Log(info)
}

func TestDao_GetTruck(t *testing.T) {
	dao := createDao()
	truck, err := dao.GetTruck("1")
	if err != nil {
		t.Fatal(err)
	}

	t.Log(truck)
}

func TestDao_GetEquipmentRequire(t *testing.T) {
	dao := createDao()
	require, err := dao.GetEquipmentRequire(3)
	if err != nil {
		t.Fatal(err)
	}

	t.Log(require)
}

func TestDao_SaveFireExtinguishing(t *testing.T) {
	dao := createDao()
	err := dao.SaveFireExtinguishing(&accsimpb.FireExtinguishingSaveRequest{
		FireExtinguishingFlowTheory:        0,
		FireExtinguishingFlowActual:        0,
		PrimaryLiquidFlowTheory:            0,
		PrimaryLiquidFlowActual:            0,
		PrimaryLiquidUsageTheory:           0,
		PrimaryLiquidUsageActual:           0,
		FireExtinguishingUsageTheory:       0,
		FireExtinguishingUsageActual:       0,
		ConfigFireExtinguishingFlowTheory:  0,
		ConfigFireExtinguishingFlowActual:  0,
		ConfigFireExtinguishingUsageTheory: 0,
		ConfigFireExtinguishingUsageActual: 0,
		SceneId:                            0,
		SupplyStrength:                     0,
		SupplyTime:                         0,
		MixRatio:                           0,
		LiquidTankDiameter:                 0,
	})
	if err != nil {
		t.Fatal(err)
	}
}

func TestDao_GetFireExtinguishing(t *testing.T) {
	dao := createDao()
	extinguishing, err := dao.GetFireExtinguishing("17")
	if err != nil {
		t.Fatal(err)
	}

	t.Log(extinguishing)
}

func TestDao_SaveCoolingWaterRes(t *testing.T) {
	dao := createDao()
	err := dao.SaveCoolingWaterRes(&accsimpb.CoolingWaterSaveRequest{
		FlowTheory:         0,
		FlowActual:         0,
		NearFlowTheory:     0,
		NearFlowActual:     0,
		UsageTheory:        0,
		UsageActual:        0,
		NearUsageTheory:    0,
		NearUsageActual:    0,
		TotalUsageTheory:   0,
		TotalUsageActual:   0,
		SceneId:            0,
		Num:                0,
		NearNum:            0,
		Diameter:           0,
		NearDiameter:       0,
		CoolingTime:        0,
		NearCoolingTime:    0,
		SupplyStrength:     0,
		NearSupplyStrength: 0,
		SingleFlow:         0,
	})
	if err != nil {
		t.Fatal(err)
	}

}

func TestDao_SaveAccScene(t *testing.T) {
	dao := createDao()
	err := dao.SaveAccScene(&accsimpb.AccSceneSaveRequest{
		Name:               "常州大学",
		Type:               "池火灾",
		DeathRadius:        10,
		BigInjuryRadius:    10,
		SmallInjuryRadius:  10,
		Longitude:          123,
		Latitude:           30,
		WindDirection:      "西风",
		WindSpeed:          100,
		TargetDis:          100,
		LiquidTankDiameter: 100,
		SafeRadius:         100,
	})
	if err != nil {
		t.Fatal(err)
	}

}

func TestDao_DeleteAccScene(t *testing.T) {
	dao := createDao()
	err := dao.DeleteAccScene(3)
	if err != nil {
		t.Fatal(err)
	}
}

func TestDao_GetAccScenes(t *testing.T) {
	dao := createDao()
	scenes, err := dao.GetAccScenes()
	if err != nil {
		t.Fatal(err)
	}
	t.Log(scenes)
}

func TestDao_GetMaterialBurningHeat(t *testing.T) {
	dao := createDao()
	heat, err := dao.GetMaterialBurningHeat()
	if err != nil {
		t.Fatal(err)
	}
	t.Log(heat)
}

func TestDao_GetAreasByEnterprise(t *testing.T) {
	dao := createDao()
	enterprises, err := dao.GetAreasByEnterprise(1)
	if err != nil {
		t.Fatal(err)
	}
	t.Log(enterprises)
}

func TestDao_GetEnterprises(t *testing.T) {
	dao := createDao()
	enterprise, err := dao.GetEnterprises()
	if err != nil {
		t.Fatal(err)
	}

	t.Log(enterprise)
}
