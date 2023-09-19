package dao

import (
	"github.com/jmoiron/sqlx"
	"go.uber.org/zap"
)

type Dao struct {
	Db     *sqlx.DB
	Logger *zap.Logger
}

type FireGrowthCategoryRecord struct {
	Places string `db:"places"`
	Levels string `db:"levels"`
}

func (d *Dao) GetFireGrowthCategory() ([]FireGrowthCategoryRecord, error) {
	records := []FireGrowthCategoryRecord{}
	err := d.Db.Select(&records, `
		select p.places, GROUP_CONCAT(distinct level separator '|') levels 
			from t_fire_growth_coefficient c 
		left join t_fire_growth_coefficient_places p 
			on c.category_id=p.id 
		group by c.category_id
	`)
	if err != nil {
		return nil, err
	}

	return records, nil
}

type FireGrowthCoefficientRecord struct {
	A float32 `db:"value"`
}

func (d *Dao) GetFireGrowthCoefficient(places, level string) (float32, error) {
	record := FireGrowthCoefficientRecord{}
	err := d.Db.Get(&record, `
		select c.value
			from
				t_fire_growth_coefficient c
			left join t_fire_growth_coefficient_places p on c.category_id = p.id 
		where
			p.places = ? and c.level = ?
	`, places, level)
	if err != nil {
		return 0, err
	}

	return record.A, nil
}
