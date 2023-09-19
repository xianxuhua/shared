package main

import (
	"github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
	"github.com/namsral/flag"
	"github.com/rs/zerolog"
	sqldblogger "github.com/simukti/sqldb-logger"
	"github.com/simukti/sqldb-logger/logadapter/zerologadapter"
	"go.uber.org/zap"
	"google.golang.org/grpc"
	"google.golang.org/grpc/health"
	"google.golang.org/grpc/health/grpc_health_v1"
	"log"
	"net"
	"os"
	dowpb "safe/dow/api/gen"
	"safe/dow/dao"
	"safe/dow/dow"
	"safe/shared/auth"
)

var dsn = flag.String("dsn", "root:123456@tcp(127.0.0.1:3306)/safe_calc?charset=utf8", "")
var port = flag.String("port", ":8082", "")
var publicKey = flag.String("public_key", "shared/public.key", "")

func main() {
	flag.Parse()

	logger, err := zap.NewDevelopment()
	if err != nil {
		log.Fatal(err)
	}

	lis, err := net.Listen("tcp", *port)
	if err != nil {
		logger.Fatal("", zap.Error(err))
	}

	interceptor, err := auth.Interceptor(*publicKey)
	if err != nil {
		logger.Fatal("", zap.Error(err))
	}
	server := grpc.NewServer([]grpc.ServerOption{
		grpc.UnaryInterceptor(interceptor),
	}...)

	loggerAdapter := zerologadapter.New(zerolog.New(os.Stdout))
	db := sqldblogger.OpenDriver(*dsn, &mysql.MySQLDriver{}, loggerAdapter,
		sqldblogger.WithWrapResult(false),
		sqldblogger.WithIncludeStartTime(false),
	)

	grpc_health_v1.RegisterHealthServer(server, health.NewServer())

	dowpb.RegisterDowServiceServer(server, &dow.Service{
		Dao: &dao.Dao{
			Db:     sqlx.NewDb(db, "mysql"),
			Logger: logger,
		},
		Logger: logger,
	})
	err = server.Serve(lis)
	if err != nil {
		logger.Fatal("", zap.Error(err))
	}
}
