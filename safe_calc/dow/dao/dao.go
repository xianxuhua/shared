package dao

import (
	"github.com/jmoiron/sqlx"
	"go.uber.org/zap"
)

type Dao struct {
	Db     *sqlx.DB
	Logger *zap.Logger
}

type ChemicalActivityGradeRecord struct {
	ChemicalActivityGrade int32 `db:"chemical_activity_grade"`
}

func (d *Dao) GetChemicalActivityGrade(reactionCharacter string) (int32, error) {
	record := ChemicalActivityGradeRecord{}
	err := d.Db.Get(&record, "select chemical_activity_grade from t_material_coefficient_chemical_activity_grade where reaction_character = ?", reactionCharacter)
	if err != nil {
		return 0, err
	}

	return record.ChemicalActivityGrade, nil
}

type MaterialCoefficientRecord struct {
	Coefficient float32 `db:"coefficient"`
}

func (d *Dao) GetCoefficientByTypeGrade(type_ string, typeDetail string, chemicalActivityGrade int32) (float32, error) {
	record := MaterialCoefficientRecord{}
	err := d.Db.Get(&record, `
	select coefficient from t_material_coefficient 
	where type = ? and type_detail = ? and chemical_activity_grade = ?`, type_, typeDetail, chemicalActivityGrade)
	if err != nil {
		return 0, err
	}
	return record.Coefficient, nil
}

func (d *Dao) GetCoefficientByName(name string) (float32, error) {
	record := MaterialCoefficientRecord{}
	err := d.Db.Get(&record, `select coefficient from t_material_coefficient_known_material where name = ?`, name)
	if err != nil {
		return 0, err
	}

	return record.Coefficient, nil
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

type ReactionCharacterRecord struct {
	ReactionCharacter string `db:"reaction_character"`
}

func (d *Dao) GetReactionCharacter() ([]ReactionCharacterRecord, error) {
	records := []ReactionCharacterRecord{}

	err := d.Db.Select(&records, `select reaction_character from t_material_coefficient_chemical_activity_grade`)
	if err != nil {
		return nil, err
	}

	return records, nil
}

type TypeRecord struct {
	Type       string `db:"type"`
	TypeDetail string `db:"type_detail"`
}

func (d *Dao) GetType() ([]TypeRecord, error) {
	records := []TypeRecord{}
	err := d.Db.Select(&records, `select type, group_concat(distinct type_detail separator '|') as type_detail from t_material_coefficient group by type`)
	if err != nil {
		return nil, err
	}

	return records, nil
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

type CoefficientRecord struct {
	Label string  `db:"label"`
	Value float32 `db:"value"`
}

func (d *Dao) GetA1() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_process_hazard_coefficient_A1")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) GetB1() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_process_hazard_coefficient_B1")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) GetC1() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_process_hazard_coefficient_C1")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) GetD1() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_process_hazard_coefficient_D1")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) GetE1() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_process_hazard_coefficient_E1")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) GetF1() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_process_hazard_coefficient_F1")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) GetA2() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_process_hazard_coefficient_A2")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) GetB2() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_process_hazard_coefficient_B2")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) GetC2() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_process_hazard_coefficient_C2")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) GetD2() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_process_hazard_coefficient_D2")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) GetE2() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_process_hazard_coefficient_E2")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) GetF2() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_process_hazard_coefficient_F2")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) GetG2() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_process_hazard_coefficient_G2")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) GetH2() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_process_hazard_coefficient_H2")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) GetI2() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_process_hazard_coefficient_I2")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) GetJ2() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_process_hazard_coefficient_J2")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) GetK2() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_process_hazard_coefficient_K2")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) GetL2() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_process_hazard_coefficient_L2")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) Geta1() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_compensation_coefficient_a1")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) Getb1() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_compensation_coefficient_b1")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) Getc1() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_compensation_coefficient_c1")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) Getd1() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_compensation_coefficient_d1")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) Gete1() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_compensation_coefficient_e1")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) Getf1() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_compensation_coefficient_f1")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) Getg1() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_compensation_coefficient_g1")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) Geth1() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_compensation_coefficient_h1")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) Geti1() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_compensation_coefficient_i1")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) Geta2() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_compensation_coefficient_a2")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) Getb2() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_compensation_coefficient_b2")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) Getc2() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_compensation_coefficient_c2")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) Getd2() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_compensation_coefficient_d2")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) Geta3() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_compensation_coefficient_a3")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) Getb3() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_compensation_coefficient_b3")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) Getc3() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_compensation_coefficient_c3")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) Getd3() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_compensation_coefficient_d3")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) Gete3() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_compensation_coefficient_e3")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) Getf3() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_compensation_coefficient_f3")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) Getg3() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_compensation_coefficient_g3")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) Geth3() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_compensation_coefficient_h3")
	if err != nil {
		return nil, err
	}

	return records, nil
}
func (d *Dao) Geti3() ([]CoefficientRecord, error) {
	records := []CoefficientRecord{}
	err := d.Db.Select(&records, "select label, value from t_compensation_coefficient_i3")
	if err != nil {
		return nil, err
	}

	return records, nil
}

type UnitHazardLevelRecord struct {
	Level string `db:"level"`
}

func (d *Dao) GetUnitHazardLevel(FEI float32) (string, error) {
	record := UnitHazardLevelRecord{}
	err := d.Db.Get(&record, "select level from t_unit_hazard_level where FEI_min <= ? and FEI_max >= ?", FEI, FEI)
	if err != nil {
		return "", err
	}

	return record.Level, err
}
