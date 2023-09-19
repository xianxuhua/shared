package auth

import (
	"context"
	"database/sql"
	"github.com/mojocn/base64Captcha"
	"go.uber.org/zap"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"safe/auth/api/gen"
	"safe/auth/dao"
	"time"
)

type Service struct {
	authpb.UnimplementedAuthServiceServer
	TokenGenerator  TokenGenerator
	PasswordManager PasswordManager
	TokenExpire     time.Duration
	Logger          *zap.Logger
	Dao             *dao.Dao
	Captcha         *base64Captcha.Captcha
}

type TokenGenerator interface {
	GenerateToken(accountID string, expire time.Duration) (string, error)
}

type PasswordManager interface {
	Encode(rawPassword string) string
	Verify(rawPassword, encodedPassword string) bool
}

func (s *Service) Login(ctx context.Context, request *authpb.LoginRequest) (*authpb.LoginResponse, error) {
	//if !s.Captcha.Store.Verify(request.Id, request.Code, true) {
	//	return nil, status.Error(codes.Unauthenticated, "验证码校验失败")
	//}

	record, err := s.Dao.GetPassword(request.Username)

	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.Unauthenticated, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	verify := s.PasswordManager.Verify(request.Password, record.Password)
	if !verify {
		return nil, status.Error(codes.Unauthenticated, "")
	}

	tkn, err := s.TokenGenerator.GenerateToken(record.Id, s.TokenExpire)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	return &authpb.LoginResponse{
		Token:       tkn,
		TokenExpire: int32(s.TokenExpire.Seconds()),
	}, nil
}

func (s *Service) CaptchaGet(ctx context.Context, request *authpb.CaptchaGetRequest) (*authpb.CaptchaGetResponse, error) {
	id, b64s, err := s.Captcha.Generate()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	return &authpb.CaptchaGetResponse{
		Id:  id,
		B64: b64s,
	}, nil
}
