package dao

import (
	"github.com/jmoiron/sqlx"
	"go.uber.org/zap"
)

type Dao struct {
	Db     *sqlx.DB
	Logger *zap.Logger
}

type MaterialCoefficientRecord struct {
	Coefficient float32 `db:"coefficient"`
	Heat        float32 `db:"heat"`
}

func (d *Dao) GetCoefficientByName(name string) (*MaterialCoefficientRecord, error) {
	record := MaterialCoefficientRecord{}
	err := d.Db.Get(&record, `select coefficient, heat from t_material_coefficient_known_material where name = ?`, name)
	if err != nil {
		return nil, err
	}

	return &record, nil
}

func (d *Dao) SaveUnKnownMaterial(name string, heat, coefficient float32) error {
	sql := `
		insert into t_material_coefficient_known_material(name, heat, coefficient) values (?, ?, ?)
	`
	_, err := d.Db.Exec(sql, name, heat, coefficient)
	if err != nil {
		return err
	}

	return nil
}

type NameRecord struct {
	Name string `db:"name"`
}

func (d *Dao) GetNames() ([]NameRecord, error) {
	records := []NameRecord{}
	err := d.Db.Select(&records, `select name from t_material_coefficient_known_material where is_delete = 0 order by id desc`)
	if err != nil {
		return nil, err
	}

	return records, nil
}

type PoisonHazardCoefficientParamRecord struct {
	Label string  `db:"label"`
	Value float32 `db:"value"`
}

func (d *Dao) GetTLV() ([]PoisonHazardCoefficientParamRecord, error) {
	records := []PoisonHazardCoefficientParamRecord{}
	err := d.Db.Select(&records, "select label, value from t_poison_hazard_coefficient_tlv")
	if err != nil {
		return nil, err
	}

	return records, nil
}

func (d *Dao) GetMaterialType() ([]PoisonHazardCoefficientParamRecord, error) {
	records := []PoisonHazardCoefficientParamRecord{}
	err := d.Db.Select(&records, "select label, value from t_poison_hazard_coefficient_material_type")
	if err != nil {
		return nil, err
	}

	return records, nil
}

func (d *Dao) GetShortTimeExposure() ([]PoisonHazardCoefficientParamRecord, error) {
	records := []PoisonHazardCoefficientParamRecord{}
	err := d.Db.Select(&records, "select label, value from t_poison_hazard_coefficient_short_time_exposure")
	if err != nil {
		return nil, err
	}

	return records, nil
}

type HazardLevelRecord struct {
	Level string `db:"level"`
}

func (d *Dao) GetHazardLevel(R float32) (string, error) {
	record := HazardLevelRecord{}
	err := d.Db.Get(&record, "select level from t_mond_overall_hazard_level where R_min <= ? and R_max <= ?", R, R)
	if err != nil {
		return "", err
	}

	return record.Level, nil
}

type MaterialRecord struct {
	Id          string  `db:"id"`
	Name        string  `db:"name"`
	Heat        float32 `db:"heat"`
	Coefficient float32 `db:"coefficient"`
}

func (d *Dao) GetMaterials() ([]MaterialRecord, error) {
	records := []MaterialRecord{}
	err := d.Db.Select(&records, "select id, name, heat, coefficient from t_material_coefficient_known_material where is_delete = 0")
	if err != nil {
		return nil, err
	}

	return records, nil
}

func (d *Dao) UpdateMaterial(id, name string, heat, coefficient float32) error {
	_, err := d.Db.Exec("update t_material_coefficient_known_material set name = ?, heat=?, coefficient=? where id=?",
		name, heat, coefficient, id)
	if err != nil {
		return err
	}

	return nil
}

func (d *Dao) DeleteMaterial(id string) error {
	_, err := d.Db.Exec("update t_material_coefficient_known_material set is_delete = 1 where id = ?", id)
	if err != nil {
		return err
	}

	return nil
}
