package engineering

import (
	"context"
	"go.uber.org/zap"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"math"
	engineeringpb "safe/engineering/api/gen"
	"safe/engineering/dao"
	"safe/shared/decimal"
)

type Service struct {
	engineeringpb.UnimplementedEngineeringServiceServer
	Logger *zap.Logger
	Dao    *dao.Dao
}

func (s *Service) FireLoadFactor(ctx context.Context, request *engineeringpb.FireLoadFactorRequest) (*engineeringpb.FireLoadFactorResponse, error) {
	if request.Qm == 0 || request.Qi == 0 {
		return nil, status.Error(codes.InvalidArgument, "Qi、Qm不能为0")
	}
	q := 2.0/3.0*math.Log10(float64(request.Qi*request.Qm)) - 0.55
	return &engineeringpb.FireLoadFactorResponse{
		Q: decimal.SaveDecimalBit(q, 4),
	}, nil
}

func (s *Service) AreaFactor(ctx context.Context, request *engineeringpb.AreaFactorRequest) (*engineeringpb.AreaFactorResponse, error) {
	g := float64(request.B) + 2*math.Pow(float64(request.L)*math.Pow(float64(request.B), 2), 1.0/3.0)
	return &engineeringpb.AreaFactorResponse{
		G: decimal.SaveDecimalBit(g, 4),
	}, nil
}

func (s *Service) FireSpreadFactor(ctx context.Context, request *engineeringpb.FireSpreadFactorRequest) (*engineeringpb.FireSpreadFactorResponse, error) {
	if request.FlamePropagationLevelM != 1 && request.FlamePropagationLevelM != 2 && request.FlamePropagationLevelM != 3 && request.FlamePropagationLevelM != 4 {
		return nil, status.Error(codes.InvalidArgument, "火焰传播等级输入不正确")
	}

	i := 1 - float64(request.T/1000.0) - 0.1*math.Log10(float64(request.IndoorItemsAverageSizeM)) + float64(request.FlamePropagationLevelM)/10.0
	return &engineeringpb.FireSpreadFactorResponse{
		I: decimal.SaveDecimalBit(i, 4),
	}, nil
}

func (s *Service) VentilationFactor(ctx context.Context, request *engineeringpb.VentilationFactorRequest) (*engineeringpb.VentilationFactorResponse, error) {
	if request.K < 0 {
		return nil, status.Error(codes.InvalidArgument, "排烟因子范围不正确")
	}
	v := 0.84 + 0.1*math.Log10(float64(request.Qm)) - math.Sqrt(float64(request.K)*math.Sqrt(float64(request.H)))
	return &engineeringpb.VentilationFactorResponse{
		V: decimal.SaveDecimalBit(v, 4),
	}, nil
}

func max(vs ...float32) float64 {
	m := vs[0]
	for i := 0; i < len(vs)-1; i++ {
		if vs[i+1] > vs[i] {
			m = vs[i+1]
		}
	}
	return float64(m)
}

func (s *Service) ChannelFactor(ctx context.Context, request *engineeringpb.ChannelFactorRequest) (*engineeringpb.ChannelFactorResponse, error) {
	z := max(request.B, request.HPlus, request.HSub)
	return &engineeringpb.ChannelFactorResponse{
		Z: decimal.SaveDecimalBit(z, 4),
	}, nil
}

func (s *Service) FloorFactor(ctx context.Context, request *engineeringpb.FloorFactorRequest) (*engineeringpb.FloorFactorResponse, error) {
	return &engineeringpb.FloorFactorResponse{
		E: decimal.SaveDecimalBit(math.Abs(float64(request.E)), 4),
	}, nil
}

func (s *Service) PotentialRisk(ctx context.Context, request *engineeringpb.PotentialRiskRequest) (*engineeringpb.PotentialRiskResponse, error) {
	P := request.V * request.E * request.Z * request.Q * request.G * request.I
	return &engineeringpb.PotentialRiskResponse{
		P: decimal.SaveDecimalBit(float64(P), 4),
	}, nil
}

func (s *Service) ActivityFactor(ctx context.Context, request *engineeringpb.ActivityFactorRequest) (*engineeringpb.ActivityFactorResponse, error) {
	if request.MainActivity > 0.2 || request.MainActivity < 0 {
		return nil, status.Error(codes.InvalidArgument, "主要活动范围不正确")
	}
	if request.SecondaryActivity > 0.2 || request.SecondaryActivity < 0 {
		return nil, status.Error(codes.InvalidArgument, "次要活动范围不正确")
	}
	if request.IndoorHeatingSystem > 0.2 || request.IndoorHeatingSystem < 0 {
		return nil, status.Error(codes.InvalidArgument, "室内供暖系统范围不正确")
	}
	if request.ElectricalEquipment > 0.2 || request.ElectricalEquipment < 0 {
		return nil, status.Error(codes.InvalidArgument, "电气设备范围不正确")
	}
	if request.Combustible > 0.2 || request.Combustible < 0 {
		return nil, status.Error(codes.InvalidArgument, "可燃性气体、液体及粉尘范围不正确")
	}

	a := request.MainActivity + request.SecondaryActivity + request.IndoorHeatingSystem +
		request.ElectricalEquipment + request.Combustible
	return &engineeringpb.ActivityFactorResponse{
		A: decimal.SaveDecimalBit(float64(a), 4),
	}, nil
}

func (s *Service) EvacuationTimeFactor(ctx context.Context, request *engineeringpb.EvacuationTimeFactorRequest) (*engineeringpb.EvacuationTimeFactorResponse, error) {
	if request.P > 1.5 || request.P < 0.5 {
		return nil, status.Error(codes.InvalidArgument, "变动性因素范围不正确")
	}
	if request.B < 0 {
		return nil, status.Error(codes.InvalidArgument, "出口宽度范围不正确")
	}
	if request.K < 0 {
		return nil, status.Error(codes.InvalidArgument, "通道方向数量范围不正确")
	}
	if request.L < 0 {
		return nil, status.Error(codes.InvalidArgument, "房间理论长度范围不正确")
	}
	if request.E < 0 {
		return nil, status.Error(codes.InvalidArgument, "室内人员数量范围不正确")
	}
	if request.HPlus < 0 {
		return nil, status.Error(codes.InvalidArgument, "地上建筑物高度范围不正确")
	}
	if request.HSub < 0 {
		return nil, status.Error(codes.InvalidArgument, "地下建筑物高度范围不正确")
	}
	if request.XBig > 0.005 || request.XBig < 0 {
		return nil, status.Error(codes.InvalidArgument, "人群分布范围不正确")
	}

	t := request.P * request.XSmall * (request.B + request.L + request.XBig/request.XSmall + 1.25*request.HPlus +
		2*request.HSub) * (request.B + request.L) /
		(800*(request.K)*(1.4*request.XSmall*(request.B+request.L)-0.44*request.E) + 1e-6)
	return &engineeringpb.EvacuationTimeFactorResponse{
		T: decimal.SaveDecimalBit(float64(t), 4),
	}, nil
}

func (s *Service) ProtectionLevel(ctx context.Context, request *engineeringpb.ProtectionLevelRequest) (*engineeringpb.ProtectionLevelResponse, error) {
	if request.W > 4 || request.W < 0 {
		return nil, status.Error(codes.InvalidArgument, "供水因子范围不正确")
	}
	if request.N > 8 || request.N < 0 {
		return nil, status.Error(codes.InvalidArgument, "正常保护因子范围不正确")
	}
	if request.S > 11 || request.S < 2 {
		return nil, status.Error(codes.InvalidArgument, "特殊保护因子范围不正确")
	}
	if request.F < 0 {
		return nil, status.Error(codes.InvalidArgument, "耐火因子范围不正确")
	}
	W := math.Pow(0.95, float64(request.W))
	N := math.Pow(0.95, float64(request.N))
	S := math.Pow(1.05, float64(request.S))
	F := (1 + float64(request.F)/100.0 + math.Pow(float64(request.F), 2)/math.Pow(10.0, 5.0)) * (1 - S/60.0)
	D := W * N * S * F
	return &engineeringpb.ProtectionLevelResponse{
		D: decimal.SaveDecimalBit(D, 4),
	}, nil
}

func (s *Service) AcceptanceCriteria(ctx context.Context, request *engineeringpb.AcceptanceCriteriaRequest) (*engineeringpb.AcceptanceCriteriaResponse, error) {
	A := 1.6 - request.A - request.T - request.C
	return &engineeringpb.AcceptanceCriteriaResponse{
		A: decimal.SaveDecimalBit(float64(A), 4),
	}, nil
}

func (s *Service) FireRisk(ctx context.Context, request *engineeringpb.FireRiskRequest) (*engineeringpb.FireRiskResponse, error) {
	R := request.P / (request.A*request.D + 1e-6)
	D1 := request.U * float32(math.Pow(0.95, float64(request.N)))
	P1 := request.P
	A1 := 1.6 - request.ASmall - request.T - request.R
	R1 := P1 / (A1*D1 + 1e-6)

	A2 := 1.6 - request.ASmall - request.T - request.DSmall
	P2 := request.I * request.G * request.E * request.V * request.Z
	D2 := request.D
	R2 := P2 / (A2 * D2)

	return &engineeringpb.FireRiskResponse{
		R:  decimal.SaveDecimalBit(float64(R), 4),
		D1: decimal.SaveDecimalBit(float64(D1), 4),
		R1: decimal.SaveDecimalBit(float64(R1), 4),
		A1: decimal.SaveDecimalBit(float64(A1), 4),
		P1: decimal.SaveDecimalBit(float64(P1), 4),
		A2: decimal.SaveDecimalBit(float64(A2), 4),
		P2: decimal.SaveDecimalBit(float64(P2), 4),
		R2: decimal.SaveDecimalBit(float64(R2), 4),
		D2: decimal.SaveDecimalBit(float64(D2), 4),
	}, nil
}
