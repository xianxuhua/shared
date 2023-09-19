package dao

import (
	"fmt"
	"github.com/jmoiron/sqlx"
	"go.uber.org/zap"
	accsimpb "safe/accsim/api/gen"
	"strings"
	"time"
)

type Dao struct {
	Db     *sqlx.DB
	Logger *zap.Logger
}

type AccScene struct {
	Id                 int32   `db:"id"`
	Name               string  `db:"name"`
	Type               string  `db:"type"`
	AddTime            string  `db:"add_time"`
	DeathRadius        float32 `db:"death_radius"`
	BigInjuryRadius    float32 `db:"big_injury_radius"`
	SmallInjuryRadius  float32 `db:"small_injury_radius"`
	Longitude          float64 `db:"longitude"`
	Latitude           float64 `db:"latitude"`
	WindDirection      string  `db:"wind_direction"`
	WindSpeed          float32 `db:"wind_speed"`
	TargetDis          float32 `db:"target_dis"`
	LiquidTankDiameter float32 `db:"liquid_tank_diameter"`
	Xs                 string  `db:"xs"`
	Ys                 string  `db:"ys"`
	SafeRadius         float32 `db:"safe_radius"`
}

func (d *Dao) GetAccScenes() ([]AccScene, error) {
	records := []AccScene{}
	err := d.Db.Select(&records, "select id, name, type, add_time, death_radius, big_injury_radius, small_injury_radius, longitude, latitude, wind_direction, wind_speed, target_dis, liquid_tank_diameter, xs, ys, safe_radius from acc_scene where is_delete = 0")
	if err != nil {
		return nil, err
	}

	return records, nil
}

func (d *Dao) GetAccScene(id int32) (*AccScene, error) {
	record := AccScene{}
	err := d.Db.Get(&record, "select id, name, type, add_time, death_radius, big_injury_radius, small_injury_radius, longitude, latitude, wind_direction, wind_speed, target_dis, liquid_tank_diameter, xs, ys, safe_radius from acc_scene where is_delete = 0 and id = ?", id)
	if err != nil {
		return nil, err
	}

	return &record, nil
}

func (d *Dao) sliceToString(s []float32) string {
	res := ""
	for _, v := range s {
		res += fmt.Sprintf("%v", v)
		res += ","
	}
	res = strings.TrimSuffix(res, ",")
	return res
}
func (d *Dao) SaveAccScene(request *accsimpb.AccSceneSaveRequest) error {
	_, err := d.Db.Exec(`insert into acc_scene(name, type, death_radius, 
                      big_injury_radius, small_injury_radius, longitude, latitude, 
                      wind_direction, wind_speed, target_dis, liquid_tank_diameter, 
                      xs, ys, safe_radius, add_time) 
			values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, request.Name, request.Type, request.DeathRadius,
		request.BigInjuryRadius, request.SmallInjuryRadius, request.Longitude, request.Latitude,
		request.WindDirection, request.WindSpeed, request.TargetDis, request.LiquidTankDiameter,
		d.sliceToString(request.Xs), d.sliceToString(request.Ys), request.SafeRadius, time.Now().Format("2006-01-02 15:04:05"),
	)
	if err != nil {
		return err
	}

	return nil
}

func (d *Dao) DeleteAccScene(id int32) error {
	_, err := d.Db.Exec("update acc_scene set is_delete=1 where id=?", id)
	if err != nil {
		return err
	}
	return nil
}

type EquipInfo struct {
	ModelVersion string  `json:"modelVersion,omitempty"` // 型号
	OperatorNum  int32   `json:"operatorNum,omitempty"`  // 操作人数
	Flow         float32 `json:"flow,omitempty"`         //
	// 数量由接口返回
}

func (d *Dao) GetEquipInfo(id string) (*EquipInfo, error) {
	record := EquipInfo{}
	err := d.Db.Get(&record, "select modelversion, operatornum, flow from fireequip1 where id = ?", id)
	if err != nil {
		return nil, err
	}

	return &record, nil
}

func (d *Dao) GetTruck(id string) (*EquipInfo, error) {
	record := EquipInfo{}
	err := d.Db.Get(&record, "select modelversion, operatornum, flow from fireequip2 where id = ?", id)
	if err != nil {
		return nil, err
	}

	return &record, nil
}

type EquipmentRequireRecord struct {
	FoamFlow float32 `db:"fire_extinguishing_flow_actual"`
	Flow     float32 `db:"flow_actual"`
	NearFlow float32 `db:"near_flow_actual"`
}

func (d *Dao) GetEquipmentRequire(sceneId int32) (*EquipmentRequireRecord, error) {
	record := EquipmentRequireRecord{}
	s := `
		select flow_actual, near_flow_actual, b.fire_extinguishing_flow_actual from cooling_water_result a
		left join (select scene_id, fire_extinguishing_flow_actual from fire_extinguishing_result where scene_id = ? and is_delete=0 order by add_time desc limit 1) b
			on b.scene_id=? where a.scene_id = ? and a.is_delete=0 order by a.add_time desc limit 1
	`
	err := d.Db.Get(&record, s, sceneId, sceneId, sceneId)
	if err != nil {
		return nil, err
	}

	return &record, nil
}

func (d *Dao) SaveFireExtinguishing(request *accsimpb.FireExtinguishingSaveRequest) error {
	_, err := d.Db.Exec(`insert into fire_extinguishing_result 
    (scene_id, supply_time, supply_strength, mix_ratio, liquid_tank_diameter,
     fire_extinguishing_flow_theory, fire_extinguishing_flow_actual, fire_extinguishing_usage_theory, fire_extinguishing_usage_actual, 
     primary_liquid_flow_theory, primary_liquid_flow_actual, primary_liquid_usage_theory, primary_liquid_usage_actual,
     config_fire_extinguishing_flow_theory, config_fire_extinguishing_flow_actual, config_fire_extinguishing_usage_theory, config_fire_extinguishing_usage_actual, 
     add_time) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
		request.SceneId, request.SupplyTime, request.SupplyStrength, request.MixRatio, request.LiquidTankDiameter,
		request.FireExtinguishingFlowTheory, request.FireExtinguishingFlowActual, request.FireExtinguishingUsageTheory, request.FireExtinguishingUsageActual,
		request.PrimaryLiquidFlowTheory, request.PrimaryLiquidFlowActual, request.PrimaryLiquidUsageTheory, request.PrimaryLiquidUsageActual,
		request.ConfigFireExtinguishingFlowTheory, request.ConfigFireExtinguishingFlowActual, request.ConfigFireExtinguishingUsageTheory, request.ConfigFireExtinguishingUsageActual,
		time.Now().Format(`2006-01-02 15:04:05`),
	)
	if err != nil {
		return err
	}

	return nil
}

type FireExtinguishingRecord struct {
	Id string `db:"id"`
}

func (d *Dao) GetFireExtinguishing(sceneId string) (*FireExtinguishingRecord, error) {
	record := FireExtinguishingRecord{}
	err := d.Db.Get(&record, "select id from tb_mhixqresult where sgnum=? order by dtime desc", sceneId)
	if err != nil {
		return nil, err
	}

	return &record, nil
}

func (d *Dao) SaveCoolingWaterRes(request *accsimpb.CoolingWaterSaveRequest) error {
	_, err := d.Db.Exec(`insert into cooling_water_result 
    (scene_id, num, near_num, diameter, near_diameter, cooling_time, near_cooling_time, 
     supply_strength, near_supply_strength, single_flow, 
     flow_theory, flow_actual, near_flow_theory, near_flow_actual, 
     usage_theory, usage_actual, near_usage_theory, near_usage_actual,
     total_usage_theory, total_usage_actual, add_time)
	values (?, ?, ?, ?, ?, ?, ?,
	        ?, ?, ?, 
	        ?, ?, ?, ?, 
	        ?, ?, ?, ?, 
	        ?, ?, ?)
    `, request.SceneId, request.Num, request.NearNum, request.Diameter, request.NearDiameter, request.CoolingTime, request.NearCoolingTime,
		request.SupplyStrength, request.NearSupplyStrength, request.SingleFlow,
		request.FlowTheory, request.FlowActual, request.NearFlowTheory, request.NearFlowActual,
		request.UsageTheory, request.UsageActual, request.NearUsageTheory, request.NearUsageActual,
		request.TotalUsageTheory, request.TotalUsageActual, time.Now().Format("2006-01-02 15:04:05"),
	)
	if err != nil {
		return err
	}

	return nil
}

type MaterialBurningHeat struct {
	Name        string  `db:"name"`
	BurningHeat float32 `db:"heat"`
}

func (d *Dao) GetMaterialBurningHeat() ([]MaterialBurningHeat, error) {
	records := []MaterialBurningHeat{}
	err := d.Db.Select(&records, "select name, heat from t_material_coefficient_known_material where is_delete = 0")
	if err != nil {
		return nil, err
	}

	return records, nil
}

type Point struct {
	Name string `db:"name"`
	Path string `db:"path"`
}

func (d *Dao) GetAreasByEnterprise(enterpriseId int32) ([]Point, error) {
	records := []Point{}
	err := d.Db.Select(&records, "select name, path from t_enterprise_area where enterprise_id = ?", enterpriseId)
	if err != nil {
		return nil, err
	}

	return records, nil
}

type Enterprise struct {
	Id   int32   `db:"id"`
	Name string  `db:"name"`
	Lng  float64 `db:"lng"`
	Lat  float64 `db:"lat"`
}

func (d *Dao) GetEnterprises() ([]Enterprise, error) {
	records := []Enterprise{}
	err := d.Db.Select(&records, "select id, name, lng, lat from t_enterprise")
	if err != nil {
		return nil, err
	}

	return records, nil
}

func (d *Dao) GetEnterprise(id int32) (*Enterprise, error) {
	record := Enterprise{}
	err := d.Db.Get(&record, "select id, name, lng, lat from t_enterprise where id = ?", id)
	if err != nil {
		return nil, err
	}
	return &record, nil
}
