package main

import (
	"github.com/go-sql-driver/mysql"
	"github.com/golang-jwt/jwt/v4"
	"github.com/jmoiron/sqlx"
	"github.com/mojocn/base64Captcha"
	"github.com/namsral/flag"
	"github.com/rs/zerolog"
	sqldblogger "github.com/simukti/sqldb-logger"
	"github.com/simukti/sqldb-logger/logadapter/zerologadapter"
	"go.uber.org/zap"
	"google.golang.org/grpc"
	"google.golang.org/grpc/health"
	"google.golang.org/grpc/health/grpc_health_v1"
	"io"
	"log"
	"net"
	"os"
	authpb "safe/auth/api/gen"
	"safe/auth/auth"
	"safe/auth/dao"
	"safe/auth/pwd"
	"safe/auth/token"
	"time"
)

var dsn = flag.String("dsn", "root:123456@tcp(127.0.0.1:3306)/safe_calc?charset=utf8", "")
var port = flag.String("port", ":8888", "")
var privateKey = flag.String("private_key", "auth/private.key", "")

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

	server := grpc.NewServer()
	loggerAdapter := zerologadapter.New(zerolog.New(os.Stdout))
	db := sqldblogger.OpenDriver(*dsn, &mysql.MySQLDriver{}, loggerAdapter,
		sqldblogger.WithWrapResult(false),
		sqldblogger.WithIncludeStartTime(false),
	)
	log.Println("mysql connected")

	pkFile, err := os.Open(*privateKey)
	if err != nil {
		logger.Fatal("can not open private.key", zap.Error(err))
	}
	pkBytes, err := io.ReadAll(pkFile)
	if err != nil {
		logger.Fatal("can not read private.key", zap.Error(err))
	}
	privateKey, err := jwt.ParseRSAPrivateKeyFromPEM(pkBytes)
	if err != nil {
		logger.Fatal("can not parse private.key", zap.Error(err))
	}
	log.Println("read private success")

	grpc_health_v1.RegisterHealthServer(server, health.NewServer())

	authpb.RegisterAuthServiceServer(server, &auth.Service{
		TokenGenerator: &token.JWTTokenGen{
			Issuer:     "",
			NowFunc:    time.Now,
			PrivateKey: privateKey,
		},
		PasswordManager: &pwd.MD5PasswordManager{
			SaltLen:    16,
			Iterations: 100,
			KeyLen:     32,
		},
		TokenExpire: time.Hour * 24 * 30,
		Logger:      logger,
		Dao: &dao.Dao{
			Logger: logger,
			Db:     sqlx.NewDb(db, "mysql"),
		},
		Captcha: base64Captcha.NewCaptcha(base64Captcha.DefaultDriverDigit, base64Captcha.DefaultMemStore),
	})

	log.Println("server started")
	err = server.Serve(lis)
	if err != nil {
		logger.Fatal("", zap.Error(err))
	}
}
