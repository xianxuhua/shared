package dao

import (
	"github.com/jmoiron/sqlx"
	"go.uber.org/zap"
)

type Dao struct {
	Logger *zap.Logger
	Db     *sqlx.DB
}
