package dao

import (
	"github.com/jmoiron/sqlx"
	"go.uber.org/zap"
)

type Dao struct {
	Db     *sqlx.DB
	Logger *zap.Logger
}

type CombustibleRecord struct {
	Name string `db:"name"`
}

func (d *Dao) GetCombustibleNames() ([]CombustibleRecord, error) {
	combustibleNames := []CombustibleRecord{}
	err := d.Db.Select(&combustibleNames, "select name from t_fire_building_risk_C")
	if err != nil {
		return nil, err
	}

	return combustibleNames, nil
}

type FireResistRecord struct {
	Top string `db:"top"`
}

func (d *Dao) GetFireResistTops() ([]FireResistRecord, error) {
	fireResistTops := []FireResistRecord{}
	err := d.Db.Select(&fireResistTops, "select top from t_fire_building_risk_W")
	if err != nil {
		return nil, err
	}

	return fireResistTops, nil
}

type FireSourceRecord struct {
	Feature string `db:"feature"`
}

func (d *Dao) GetFireSourceFeatures() ([]FireSourceRecord, error) {
	fireSourceFeatures := []FireSourceRecord{}
	err := d.Db.Select(&fireSourceFeatures, "select feature from t_fire_building_risk_Ri")
	if err != nil {
		return nil, err
	}

	return fireSourceFeatures, nil
}

type FireFightPowerPropertyRecord struct {
	Property string `db:"property"`
}
type FireFightPowerDisRecord struct {
	Dis string `db:"dis"`
}

func (d *Dao) GetFireFightPowerPropertyDis() ([]FireFightPowerPropertyRecord, []FireFightPowerDisRecord, error) {
	fireFightPowerPropertyRecord := []FireFightPowerPropertyRecord{}
	fireFightPowerDisRecord := []FireFightPowerDisRecord{}
	err := d.Db.Select(&fireFightPowerPropertyRecord, "select property from t_fire_building_risk_L group by property")
	if err != nil {
		return nil, nil, err
	}
	err = d.Db.Select(&fireFightPowerDisRecord, "select dis from t_fire_building_risk_L group by dis")
	if err != nil {
		return nil, nil, err
	}

	return fireFightPowerPropertyRecord, fireFightPowerDisRecord, nil
}

type QmRecord struct {
	Qm float32 `db:"qm"`
}

func (d *Dao) GetQm(kgM2 float32) (float32, error) {
	qmRecord := &QmRecord{}
	err := d.Db.Get(qmRecord, "select qm from t_fire_building_risk_Qm where kg_m2_min <= ? and kg_m2_max >= ?", kgM2, kgM2)
	if err != nil {
		d.Logger.Error("", zap.Error(err))
		return 0, err
	}

	return qmRecord.Qm, nil
}

type CRecord struct {
	C float32 `db:"C"`
}

func (d *Dao) GetC(moveFireType string) (float32, error) {
	record := CRecord{}
	err := d.Db.Get(&record, "select C from t_fire_building_risk_C where name = ?", moveFireType)
	if err != nil {
		return 0, err
	}

	return record.C, nil
}

type QiRecord struct {
	Label string  `db:"label"`
	Value float32 `db:"value"`
}

func (d *Dao) GetQi() ([]QiRecord, error) {
	records := []QiRecord{}
	err := d.Db.Select(&records, "select label, value from t_fire_building_risk_Qi")
	if err != nil {
		return nil, err
	}
	return records, nil
}

type BRecord struct {
	B float32 `db:"B"`
}

func (d *Dao) GetB(accessArea float32) (float32, error) {
	record := BRecord{}
	err := d.Db.Get(&record, "select B from t_fire_building_risk_B where area_min <= ? and area_max >= ?", accessArea, accessArea)
	if err != nil {
		return 0, err
	}

	return record.B, nil
}

type LRecord struct {
	L float32 `db:"L"`
}

func (d *Dao) GetL(fireFightPowerProperty string, fireControlDis string) (float32, error) {
	record := LRecord{}
	err := d.Db.Get(&record, "select L from t_fire_building_risk_L where property = ? and dis = ?", fireFightPowerProperty, fireControlDis)
	if err != nil {
		return 0, err
	}
	return record.L, nil
}

type WRecord struct {
	W float32 `db:"W"`
}

func (d *Dao) GetW(fireResistTop string) (float32, error) {
	record := WRecord{}
	err := d.Db.Get(&record, "select W from t_fire_building_risk_W where top = ?", fireResistTop)
	if err != nil {
		return 0, err
	}
	return record.W, nil
}

type RiRecord struct {
	Ri float32 `db:"Ri"`
}

func (d *Dao) GetRi(fireSourceFeature string) (float32, error) {
	record := RiRecord{}
	err := d.Db.Get(&record, "select Ri from t_fire_building_risk_Ri where feature = ?", fireSourceFeature)
	if err != nil {
		return 0, err
	}
	return record.Ri, nil
}

type HRecord struct {
	H float32 `db:"H"`
}

func (d *Dao) GetH(personFireRiskFeature string) (float32, error) {
	record := HRecord{}
	err := d.Db.Get(&record, "select H from t_building_fire_risk_H where feature = ?", personFireRiskFeature)
	if err != nil {
		return 0, err
	}

	return record.H, nil
}

type DRecord struct {
	D float32 `db:"D"`
}

func (d *Dao) GetD(assetsFireRiskFeature string) (float32, error) {
	record := DRecord{}
	err := d.Db.Get(&record, "select D from t_building_fire_risk_D where feature = ?", assetsFireRiskFeature)
	if err != nil {
		return 0, err
	}

	return record.D, nil
}

type FRecord struct {
	F float32 `db:"F"`
}

func (d *Dao) GetF(smokeFireRiskFeature string) (float32, error) {
	record := FRecord{}
	err := d.Db.Get(&record, "select F from t_building_fire_risk_F where feature = ?", smokeFireRiskFeature)
	if err != nil {
		return 0, err
	}

	return record.F, nil
}

type RiskFeatureRecord struct {
	Feature string `db:"feature"`
}

func (d *Dao) GetPersonRiskFeature() ([]RiskFeatureRecord, error) {
	records := []RiskFeatureRecord{}
	err := d.Db.Select(&records, "select feature from t_building_fire_risk_H")
	if err != nil {
		return nil, err
	}

	return records, nil
}

func (d *Dao) GetAssetsRiskFeature() ([]RiskFeatureRecord, error) {
	records := []RiskFeatureRecord{}
	err := d.Db.Select(&records, "select feature from t_building_fire_risk_D")
	if err != nil {
		return nil, err
	}

	return records, nil
}

func (d *Dao) GetSmokeRiskFeature() ([]RiskFeatureRecord, error) {
	records := []RiskFeatureRecord{}
	err := d.Db.Select(&records, "select feature from t_building_fire_risk_F")
	if err != nil {
		return nil, err
	}

	return records, nil
}

func (d *Dao) SavePoints(x, y float64) error {
	sql := `
		insert into t_building_fire_risk_total_plane_result (x, y, conclusion) 
					values (?, ?, '')
	`
	_, err := d.Db.Exec(sql,
		x, y)
	if err != nil {
		return err
	}

	return nil
}

type PointRecord struct {
	X float64 `db:"x"`
	Y float64 `db:"y"`
}

func (d *Dao) GetPoints() ([]PointRecord, error) {
	records := []PointRecord{}
	sql := `
		select x, y from t_building_fire_risk_total_plane_result
   	`
	err := d.Db.Select(&records, sql)
	if err != nil {
		return nil, err
	}

	return records, nil
}
