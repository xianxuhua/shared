package fileloss

import (
	"context"
	"database/sql"
	"go.uber.org/zap"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"math"
	firelosspb "safe/fireloss/api/gen"
	"safe/shared/decimal"
	"strings"

	"safe/fireloss/dao"
)

type Service struct {
	firelosspb.UnimplementedFireLossServiceServer
	Dao    *dao.Dao
	Logger *zap.Logger
}

func (s *Service) FireGrowthCategory(ctx context.Context, request *firelosspb.FireGrowthCategoryRequest) (*firelosspb.FireGrowthCategoryResponse, error) {
	records, err := s.Dao.GetFireGrowthCategory()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	res := firelosspb.FireGrowthCategoryResponse{}
	for _, v := range records {
		split := strings.Split(v.Levels, "|")
		levels := []*firelosspb.Level{}
		for _, l := range split {
			levels = append(levels, &firelosspb.Level{Name: l, Code: l})
		}
		res.Categories = append(res.Categories, &firelosspb.Category{
			Name:     v.Places,
			Code:     v.Places,
			Children: levels,
		})
	}

	return &res, nil
}

func (s *Service) FireGrowthCoefficient(ctx context.Context, request *firelosspb.FireGrowthCoefficientRequest) (*firelosspb.FireGrowthCoefficientResponse, error) {
	a, err := s.Dao.GetFireGrowthCoefficient(request.Places, request.Level)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "对应的火灾成长系数不存在")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	return &firelosspb.FireGrowthCoefficientResponse{
		FireDensityQ:     decimal.SaveDecimalBit(float64(request.Mv*request.Hc/request.At), 4),
		A:                decimal.SaveDecimalBit(float64(a), 4),
		FireReleaseRateQ: decimal.SaveDecimalBit(float64(a*(request.T-request.T0)), 4),
	}, nil
}

func (s *Service) StageOne(ctx context.Context, request *firelosspb.StageOneRequest) (*firelosspb.StageOneResponse, error) {
	if request.PA1 > 1 || request.PA1 < 0 {
		return nil, status.Error(codes.InvalidArgument, "火灾探测报警成功的概率范围不正确")
	}
	if request.PA2 > 1 || request.PA2 < 0 {
		return nil, status.Error(codes.InvalidArgument, "自动水喷淋灭火成功的概率范围不正确")
	}
	if request.PA3 > 1 || request.PA3 < 0 {
		return nil, status.Error(codes.InvalidArgument, "灭火器灭火成功的概率范围不正确")
	}
	pfph1 := (1-request.PA1)*(1-request.PA3) + (1-request.PA2)*(1-request.PA3)
	var tfa float64 = 60
	tfpdh1 := math.Sqrt(float64(950/(request.A+1e-6))) + tfa
	a1 := math.Pi * math.Pow(float64(request.V)*(tfpdh1-tfa), 2)
	return &firelosspb.StageOneResponse{
		PFph1:  decimal.SaveDecimalBit(float64(pfph1), 4),
		TFpdh1: decimal.SaveDecimalBit(tfpdh1, 4),
		A1:     decimal.SaveDecimalBit(a1, 4),
	}, nil
}

func (s *Service) StageTwo(ctx context.Context, request *firelosspb.StageTwoRequest) (*firelosspb.StageTwoResponse, error) {
	if request.PB1 > 1 || request.PB1 < 0 {
		return nil, status.Error(codes.InvalidArgument, "排烟设备启动成功的概率范围不正确")
	}
	if request.PB2 > 1 || request.PB2 < 0 {
		return nil, status.Error(codes.InvalidArgument, "室内消火栓灭火成功的概率范围不正确")
	}
	pfph2 := request.PFph1 * (1 - request.PB1*request.PB2)
	tfpdh2 := 14.6898 + (850362.63182-14.6898)/(1+math.Pow(float64(request.H/0.10812), 2.91233))

	var tfa float64 = 60
	a2 := math.Pi * math.Pow(float64(request.V)*(tfpdh2-tfa), 2)

	return &firelosspb.StageTwoResponse{
		PFph2:  decimal.SaveDecimalBit(float64(pfph2), 4),
		TFpdh2: decimal.SaveDecimalBit(float64(tfpdh2), 4),
		A2:     decimal.SaveDecimalBit(a2, 4),
	}, nil
}

func (s *Service) StageThree(ctx context.Context, request *firelosspb.StageThreeRequest) (*firelosspb.StageThreeResponse, error) {
	if request.PF > 1 || request.PF < 0 {
		return nil, status.Error(codes.InvalidArgument, "得到消防队及时有效补救的概率范围不正确")
	}
	pfph3 := request.PFph2 * (1 - request.PF)
	hk := math.Sqrt(float64(request.K * request.Rho * request.C / request.T))

	tfph3 := 0.02360 * math.Pow(float64(request.Q), 2.0/3.0) *
		math.Pow(hk*float64(request.AT*request.A)*math.Sqrt(float64(request.H))*float64(request.TInf)+float64(request.T0), -1.0/3.0)
	a3 := math.Pi * math.Pow(float64(tfph3-60), 2)
	return &firelosspb.StageThreeResponse{
		PFph3: decimal.SaveDecimalBit(float64(pfph3), 4),
		TFph3: decimal.SaveDecimalBit(tfph3, 4),
		A3:    decimal.SaveDecimalBit(a3, 4),
	}, nil
}

func (s *Service) StageFour(ctx context.Context, request *firelosspb.StageFourRequest) (*firelosspb.StageFourResponse, error) {
	if request.PC1 > 1 || request.PC1 < 0 {
		return nil, status.Error(codes.InvalidArgument, "防火卷帘关闭成功的概率范围不正确")
	}
	if request.PF > 1 || request.PF < 0 {
		return nil, status.Error(codes.InvalidArgument, "得到消防队及时有效补救的概率范围不正确")
	}
	pfph4 := request.PFph3 * (1 - request.PC1) * (1 - request.PF)
	a4 := math.Pi * math.Pow(float64(request.V*(pfph4-60)), 2)
	return &firelosspb.StageFourResponse{
		PFph4: decimal.SaveDecimalBit(float64(pfph4), 4),
		A4:    decimal.SaveDecimalBit(a4, 4),
	}, nil
}

func (s *Service) BurntArea(ctx context.Context, request *firelosspb.BurntAreaRequest) (*firelosspb.BurntAreaResponse, error) {
	aFz := request.A1*request.A2*request.A3*request.A4*
		request.PFph1*request.PFph2*request.PFph3*request.PFph4 + request.A4*request.PFph4
	aF := request.S * request.YL * request.PFire * aFz
	eFire := request.WE * aF
	return &firelosspb.BurntAreaResponse{
		AFz:   decimal.SaveDecimalBit(float64(aFz), 4),
		AF:    decimal.SaveDecimalBit(float64(aF), 4),
		EFire: decimal.SaveDecimalBit(float64(eFire), 4),
	}, nil
}
