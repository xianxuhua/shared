package mond

import (
	"context"
	"database/sql"
	"go.uber.org/zap"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"math"
	mondpb "safe/mond/api/gen"
	"safe/mond/dao"
	"safe/shared/decimal"
)

type Service struct {
	mondpb.UnimplementedMondServiceServer
	Logger *zap.Logger
	Dao    *dao.Dao
}

func (s *Service) MaterialCoefficientSaveUnknownMaterial(ctx context.Context, request *mondpb.MaterialCoefficientSaveUnknownMaterialRequest) (*mondpb.MaterialCoefficientSaveUnknownMaterialResponse, error) {
	err := s.Dao.SaveUnKnownMaterial(request.Name, request.Heat, request.Coefficient)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	return &mondpb.MaterialCoefficientSaveUnknownMaterialResponse{}, nil
}

func (s *Service) MaterialCoefficientGetKnownCoefficient(ctx context.Context, request *mondpb.MaterialCoefficientGetKnownCoefficientRequest) (*mondpb.MaterialCoefficientGetKnownCoefficientResponse, error) {
	record, err := s.Dao.GetCoefficientByName(request.Name)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	return &mondpb.MaterialCoefficientGetKnownCoefficientResponse{
		Coefficient: record.Coefficient,
		Heat:        record.Heat,
	}, nil
}

func (s *Service) MaterialCoefficientGetKnownNames(ctx context.Context, request *mondpb.MaterialCoefficientGetKnownNamesRequest) (*mondpb.MaterialCoefficientGetKnownNamesResponse, error) {
	names, err := s.Dao.GetNames()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	res := mondpb.MaterialCoefficientGetKnownNamesResponse{}
	for _, v := range names {
		res.Names = append(res.Names, &mondpb.Name{
			Name: v.Name,
			Code: v.Name,
		})
	}

	return &res, nil
}

func (s *Service) MaterialCoefficient(ctx context.Context, request *mondpb.MaterialCoefficientRequest) (*mondpb.MaterialCoefficientResponse, error) {
	return &mondpb.MaterialCoefficientResponse{
		B: decimal.SaveDecimalBit(float64(request.Hc*1.8*4.186/1000), 4),
	}, nil
}

func (s *Service) SpecialMaterialHazard(ctx context.Context, request *mondpb.SpecialMaterialHazardRequest) (*mondpb.SpecialMaterialHazardResponse, error) {
	if request.A > 20 || request.A < 0 {
		return nil, status.Error(codes.InvalidArgument, "氧化物性质范围不正确")
	}
	if request.B > 30 || request.B < 0 {
		return nil, status.Error(codes.InvalidArgument, "与水反应产生可燃气体范围不正确")
	}
	if request.C > 60 || request.C < -60 {
		return nil, status.Error(codes.InvalidArgument, "混合及扩散特性范围不正确")
	}
	if request.D > 250 || request.D < 30 {
		return nil, status.Error(codes.InvalidArgument, "自热性范围不正确")
	}
	if request.E > 75 || request.E < 25 {
		return nil, status.Error(codes.InvalidArgument, "自聚合性范围不正确")
	}
	if request.F > 150 || request.F < -75 {
		return nil, status.Error(codes.InvalidArgument, "着火敏感性范围不正确")
	}
	if request.G != 125 {
		return nil, status.Error(codes.InvalidArgument, "爆炸分解性范围不正确")
	}
	if request.H != 150 {
		return nil, status.Error(codes.InvalidArgument, "气体的爆炸性范围不正确")
	}
	if request.I > 1500 || request.I < 200 {
		return nil, status.Error(codes.InvalidArgument, "凝聚层爆炸性范围不正确")
	}
	if request.J > 150 || request.J < 0 {
		return nil, status.Error(codes.InvalidArgument, "其他特性范围不正确")
	}
	return &mondpb.SpecialMaterialHazardResponse{
		M: request.A +
			request.B +
			request.C +
			request.D +
			request.E +
			request.F +
			request.G +
			request.H +
			request.I +
			request.J,
	}, nil
}

func (s *Service) GeneralProcessHazard(ctx context.Context, request *mondpb.GeneralProcessHazardRequest) (*mondpb.GeneralProcessHazardResponse, error) {
	if request.A > 50 || request.A < 10 {
		return nil, status.Error(codes.InvalidArgument, "仅物理变化范围不正确")
	}
	if request.B > 50 || request.B < 25 {
		return nil, status.Error(codes.InvalidArgument, "单一连续反应范围不正确")
	}
	if (request.C-request.B) > 60 || (request.C-request.B) < 10 {
		return nil, status.Error(codes.InvalidArgument, "单一不连续反应范围不正确")
	}
	if request.D > 75 || request.D < 0 {
		return nil, status.Error(codes.InvalidArgument, "同一装置内重复反应范围不正确")
	}
	if request.E > 75 || request.E < 0 {
		return nil, status.Error(codes.InvalidArgument, "物质移动范围不正确")
	}
	if request.F > 100 || request.F < 10 {
		return nil, status.Error(codes.InvalidArgument, "可能输送的容器范围不正确")
	}
	return &mondpb.GeneralProcessHazardResponse{
		P: request.A +
			request.B +
			request.C +
			request.D +
			request.E +
			request.F,
	}, nil
}

func (s *Service) SpecialProcessHazard(ctx context.Context, request *mondpb.SpecialProcessHazardRequest) (*mondpb.SpecialProcessHazardResponse, error) {
	if request.A > 100 || request.A < 0 {
		return nil, status.Error(codes.InvalidArgument, "低压范围不正确")
	}
	if request.B > 150 || request.B < 0 {
		return nil, status.Error(codes.InvalidArgument, "高压范围不正确")
	}
	if request.C > 100 || request.C < 0 {
		return nil, status.Error(codes.InvalidArgument, "低温范围不正确")
	}
	if request.D > 40 || request.D < 0 {
		return nil, status.Error(codes.InvalidArgument, "高温范围不正确")
	}
	if request.E > 150 || request.E < 0 {
		return nil, status.Error(codes.InvalidArgument, "腐蚀和侵蚀的危险物范围不正确")
	}
	if request.F > 60 || request.F < 0 {
		return nil, status.Error(codes.InvalidArgument, "接头和填料的危险性")
	}
	if request.G > 50 || request.G < 0 {
		return nil, status.Error(codes.InvalidArgument, "振动及循环负荷疲劳危险性范围不正确")
	}
	if request.H > 300 || request.H < 20 {
		return nil, status.Error(codes.InvalidArgument, "难控制的工艺或反应范围不正确")
	}
	if request.I > 150 || request.I < 0 {
		return nil, status.Error(codes.InvalidArgument, "在燃烧极限附近操作")
	}
	if request.J > 100 || request.J < 40 {
		return nil, status.Error(codes.InvalidArgument, "平均爆炸危险以上的危险性范围不正确")
	}
	if request.K > 70 || request.K < 30 {
		return nil, status.Error(codes.InvalidArgument, "粉尘或雾滴爆炸的危险性范围不正确")
	}
	if request.L > 300 || request.L < 0 {
		return nil, status.Error(codes.InvalidArgument, "使用强氧化剂的工艺单元危险性范围不正确")
	}
	if request.M > 75 || request.M < 0 {
		return nil, status.Error(codes.InvalidArgument, "工艺着火的灵敏度范围不正确")
	}
	if request.N > 200 || request.N < 0 {
		return nil, status.Error(codes.InvalidArgument, "静电危险性范围不正确")
	}
	return &mondpb.SpecialProcessHazardResponse{
		S: request.A +
			request.B +
			request.C +
			request.D +
			request.E +
			request.F +
			request.G +
			request.H +
			request.I +
			request.J +
			request.K +
			request.L +
			request.M +
			request.N,
	}, nil
}

func (s *Service) ArrangementHazardCoefficient(ctx context.Context, request *mondpb.ArrangementHazardCoefficientRequest) (*mondpb.ArrangementHazardCoefficientResponse, error) {
	if request.A > 200 || request.A < 0 {
		return nil, status.Error(codes.InvalidArgument, "结构设计范围不正确")
	}
	if request.B > 250 || request.B < 0 {
		return nil, status.Error(codes.InvalidArgument, "多米诺效应范围不正确")
	}
	if request.C > 150 || request.C < 0 {
		return nil, status.Error(codes.InvalidArgument, "地下设施范围不正确")
	}
	if request.D > 100 || request.D < 0 {
		return nil, status.Error(codes.InvalidArgument, "地表排水沟范围不正确")
	}
	if request.E > 250 || request.E < 0 {
		return nil, status.Error(codes.InvalidArgument, "其他危险系数范围不正确")
	}
	return &mondpb.ArrangementHazardCoefficientResponse{
		L: request.A +
			request.B +
			request.C +
			request.D +
			request.E,
	}, nil
}

func (s *Service) NumHazardCoefficient(ctx context.Context, request *mondpb.NumHazardCoefficientRequest) (*mondpb.NumHazardCoefficientResponse, error) {
	Q := 0.0
	if request.MaterialQuality <= 10 && request.MaterialQuality >= 0 {
		Q = 0.1466 * math.Pow(float64(request.MaterialQuality), 2.53515)
	} else if request.MaterialQuality >= 10 && request.MaterialQuality <= 1000 {
		Q = 0.47957*math.Exp(float64(-request.MaterialQuality/-216.78058)) + 1.48587e6*math.Exp(float64(-request.MaterialQuality/-2.10827e7)) - 1.48583e6
	} else if request.MaterialQuality >= 1000 {
		Q = 0.00447*math.Exp(float64(-request.MaterialQuality/-9508.8966)) + 135.30761*math.Exp(float64(-request.MaterialQuality/-53777.26252)) - 7.36898
	}
	return &mondpb.NumHazardCoefficientResponse{
		Q: decimal.SaveDecimalBit(Q, 4),
	}, nil
}

func (s *Service) PoisonHazardCoefficient(ctx context.Context, request *mondpb.PoisonHazardCoefficientRequest) (*mondpb.PoisonHazardCoefficientResponse, error) {
	if request.E > 50 || request.E < 0 {
		return nil, status.Error(codes.InvalidArgument, "物理因素范围不正确")
	}
	if request.D > 300 || request.D < 0 {
		return nil, status.Error(codes.InvalidArgument, "皮肤吸收范围不正确")
	}
	return &mondpb.PoisonHazardCoefficientResponse{
		T: request.A +
			request.B +
			request.C +
			request.D +
			request.E,
	}, nil
}

func (s *Service) PoisonHazardCoefficientGetTLVTypeExposure(context.Context, *mondpb.PoisonHazardCoefficientGetTLVTypeExposureRequest) (*mondpb.PoisonHazardCoefficientGetTLVTypeExposureResponse, error) {
	tlv, err := s.Dao.GetTLV()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	type_, err := s.Dao.GetMaterialType()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	exposure, err := s.Dao.GetShortTimeExposure()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	return &mondpb.PoisonHazardCoefficientGetTLVTypeExposureResponse{
		Tlv:      s.convertPoisonHazardCoefficientRecordToParam(tlv),
		Type:     s.convertPoisonHazardCoefficientRecordToParam(type_),
		Exposure: s.convertPoisonHazardCoefficientRecordToParam(exposure),
	}, nil
}

func (s *Service) convertPoisonHazardCoefficientRecordToParam(records []dao.PoisonHazardCoefficientParamRecord) []*mondpb.PoisonHazardCoefficientParam {
	res := []*mondpb.PoisonHazardCoefficientParam{}
	for _, v := range records {
		res = append(res, &mondpb.PoisonHazardCoefficientParam{
			Name: v.Label,
			Code: v.Value,
		})
	}

	return res
}

func (s *Service) ContainerSystemCoefficient(ctx context.Context, request *mondpb.ContainerSystemCoefficientRequest) (*mondpb.ContainerSystemCoefficientResponse, error) {
	if request.A > 1 || request.A < 0 {
		return nil, status.Error(codes.InvalidArgument, "压力储罐范围不正确")
	}
	if request.B > 1 || request.B < 0 {
		return nil, status.Error(codes.InvalidArgument, "非压力立式储罐范围不正确")
	}
	if request.C > 1 || request.C < 0 {
		return nil, status.Error(codes.InvalidArgument, "输送配管范围不正确")
	}
	if request.D > 1 || request.D < 0 {
		return nil, status.Error(codes.InvalidArgument, "附加容器、套管和防护堤范围不正确")
	}
	if request.E > 1 || request.E < 0 {
		return nil, status.Error(codes.InvalidArgument, "泄漏检测系统与响应范围不正确")
	}
	if request.F > 1 || request.F < 0 {
		return nil, status.Error(codes.InvalidArgument, "放出、排出或者废料的舍弃范围不正确")
	}

	return &mondpb.ContainerSystemCoefficientResponse{
		K1: request.A +
			request.B +
			request.C +
			request.D +
			request.E +
			request.F,
	}, nil
}

func (s *Service) ProcessManagementCoefficient(ctx context.Context, request *mondpb.ProcessManagementCoefficientRequest) (*mondpb.ProcessManagementCoefficientResponse, error) {
	if request.A > 1 || request.A < 0 {
		return nil, status.Error(codes.InvalidArgument, "警报系统范围不正确")
	}
	if request.B > 1 || request.B < 0 {
		return nil, status.Error(codes.InvalidArgument, "紧急用电的攻供给范围不正确")
	}
	if request.C > 1 || request.C < 0 {
		return nil, status.Error(codes.InvalidArgument, "过程冷却系统范围不正确")
	}
	if request.D > 1 || request.D < 0 {
		return nil, status.Error(codes.InvalidArgument, "惰性气体系统范围不正确")
	}
	if request.E > 1 || request.E < 0 {
		return nil, status.Error(codes.InvalidArgument, "危险性研究活动范围不正确")
	}
	if request.F > 1 || request.F < 0 {
		return nil, status.Error(codes.InvalidArgument, "安全停车系统范围不正确")
	}
	if request.G > 1 || request.G < 0 {
		return nil, status.Error(codes.InvalidArgument, "计算机管理范围不正确")
	}
	if request.H > 1 || request.H < 0 {
		return nil, status.Error(codes.InvalidArgument, "预防爆炸和不正常的反应范围不正确")
	}
	if request.I > 1 || request.I < 0 {
		return nil, status.Error(codes.InvalidArgument, "操作指南范围不正确")
	}
	if request.J > 1 || request.J < 0 {
		return nil, status.Error(codes.InvalidArgument, "装置的监督范围不正确")
	}
	return &mondpb.ProcessManagementCoefficientResponse{
		K2: decimal.SaveDecimalBit(float64(request.A+
			request.B+
			request.C+
			request.D+
			request.E+
			request.F+
			request.G+
			request.H+
			request.I+
			request.J), 4),
	}, nil
}

func (s *Service) MaterialIsolationCoefficient(ctx context.Context, request *mondpb.MaterialIsolationCoefficientRequest) (*mondpb.MaterialIsolationCoefficientResponse, error) {
	if request.A > 1 || request.A < 0 {
		return nil, status.Error(codes.InvalidArgument, "阀门系统范围不正确")
	}
	if request.B > 1 || request.B < 0 {
		return nil, status.Error(codes.InvalidArgument, "通门范围不正确")
	}
	return &mondpb.MaterialIsolationCoefficientResponse{
		K5: request.A +
			request.B,
	}, nil
}

func (s *Service) SafetyAttitudeCoefficient(ctx context.Context, request *mondpb.SafetyAttitudeCoefficientRequest) (*mondpb.SafetyAttitudeCoefficientResponse, error) {
	if request.A > 1 || request.A < 0 {
		return nil, status.Error(codes.InvalidArgument, "管理者参与安全的管理范围不正确")
	}
	if request.B > 1 || request.B < 0 {
		return nil, status.Error(codes.InvalidArgument, "安全训练范围不正确")
	}
	if request.C > 1 || request.C < 0 {
		return nil, status.Error(codes.InvalidArgument, "保养维修和安全秩序范围不正确")
	}
	return &mondpb.SafetyAttitudeCoefficientResponse{
		K3: request.A +
			request.B +
			request.C,
	}, nil
}

func (s *Service) FirePreventionCoefficient(ctx context.Context, request *mondpb.FirePreventionCoefficientRequest) (*mondpb.FirePreventionCoefficientResponse, error) {
	if request.A > 1 || request.A < 0 {
		return nil, status.Error(codes.InvalidArgument, "结构物防火范围不正确")
	}
	if request.B > 1 || request.B < 0 {
		return nil, status.Error(codes.InvalidArgument, "防火墙、防火屏和类似装置")
	}
	if request.C > 1 || request.C < 0 {
		return nil, status.Error(codes.InvalidArgument, "装置防火")
	}
	return &mondpb.FirePreventionCoefficientResponse{
		K4: request.A +
			request.B +
			request.C,
	}, nil
}

func (s *Service) FireFightingActivityCoefficient(ctx context.Context, request *mondpb.FireFightingActivityCoefficientRequest) (*mondpb.FireFightingActivityCoefficientResponse, error) {
	if request.A > 1 || request.A < 0 {
		return nil, status.Error(codes.InvalidArgument, "火灾警报范围不正确")
	}
	if request.B > 1 || request.B < 0 {
		return nil, status.Error(codes.InvalidArgument, "手动灭火器范围不正确")
	}
	if request.C > 1 || request.C < 0 {
		return nil, status.Error(codes.InvalidArgument, "水的供给范围不正确")
	}
	if request.D > 1 || request.D < 0 {
		return nil, status.Error(codes.InvalidArgument, "设置喷水设备、洒水机及水枪范围不正确")
	}
	if request.E > 1 || request.E < 0 {
		return nil, status.Error(codes.InvalidArgument, "发泡及惰性化设备范围不正确")
	}
	if request.F > 1 || request.F < 0 {
		return nil, status.Error(codes.InvalidArgument, "消防队范围不正确")
	}
	if request.G > 1 || request.G < 0 {
		return nil, status.Error(codes.InvalidArgument, "消防活动的地区协作范围不正确")
	}
	if request.H > 1 || request.H < 0 {
		return nil, status.Error(codes.InvalidArgument, "排烟通风范围不正确")
	}
	return &mondpb.FireFightingActivityCoefficientResponse{
		K6: decimal.SaveDecimalBit(float64(request.A+
			request.B+
			request.C+
			request.D+
			request.E+
			request.F+
			request.G+
			request.H), 4),
	}, nil
}

func (s *Service) InitialCommentIndexFinialCompensationCoefficient(ctx context.Context, request *mondpb.InitialCommentIndexFinialCompensationCoefficientRequest) (*mondpb.InitialCommentIndexFinialCompensationCoefficientResponse, error) {
	D := request.MaterialCoefficientB * (1 + request.SpecialMaterialHazardCoefficientM/100) *
		(1 + request.GeneralProcessHazardCoefficientP/100) *
		(1 + (request.SpecialProcessHazardCoefficientS+request.NumHazardCoefficientQ+
			request.ArrangementHazardCoefficientL)/100 + request.PoisonHazardCoefficientT/400)
	F := 2.33e8 * request.MaterialCoefficientB * request.CombustibleTotalNumK / (request.WorkingAreaN + 1e-6)
	E := 1 + (request.SpecialMaterialHazardCoefficientM+request.GeneralProcessHazardCoefficientP+request.SpecialProcessHazardCoefficientS)/100
	A := request.MaterialCoefficientB * (1 + request.MixedDiffusionCoefficientM/100) * request.NumHazardCoefficientQ * request.UnitHeightH * E * (1 + request.GeneralProcessHazardCoefficientP/1000)
	U := request.PoisonHazardCoefficientT * E / 100
	C := U * request.NumHazardCoefficientQ
	R := D * (1 + float32(math.Sqrt(float64(F*E*A*U)))/1000)
	F1 := request.K1 * request.K4 * request.K5
	E1 := E * request.K2 * request.K3
	A1 := A * request.K1 * request.K5 * request.K6
	U1 := request.PoisonHazardCoefficientT * E1 / 100
	R1 := D * (1 + float32(math.Sqrt(float64(F1*E1*A1*U1)))/1000)
	R2 := R1 * request.K1 * request.K2 * request.K3 * request.K4 * request.K5 * request.K6

	initLevel, err := s.Dao.GetHazardLevel(R)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		return nil, status.Error(codes.Internal, "")
	}
	finalLevel, err := s.Dao.GetHazardLevel(R2)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		return nil, status.Error(codes.Internal, "")
	}

	return &mondpb.InitialCommentIndexFinialCompensationCoefficientResponse{
		D:                decimal.SaveDecimalBit(float64(D), 4),
		F:                decimal.SaveDecimalBit(float64(F), 4),
		E:                decimal.SaveDecimalBit(float64(E), 4),
		A:                decimal.SaveDecimalBit(float64(A), 4),
		U:                decimal.SaveDecimalBit(float64(U), 4),
		C:                decimal.SaveDecimalBit(float64(C), 4),
		R:                decimal.SaveDecimalBit(float64(R), 4),
		F1:               decimal.SaveDecimalBit(float64(F1), 4),
		E1:               decimal.SaveDecimalBit(float64(E1), 4),
		A1:               decimal.SaveDecimalBit(float64(A1), 4),
		R1:               decimal.SaveDecimalBit(float64(R1), 4),
		R2:               decimal.SaveDecimalBit(float64(R2), 4),
		InitHazardLevel:  initLevel,
		FinalHazardLevel: finalLevel,
	}, nil
}

func (s *Service) MaterialsGet(ctx context.Context, request *mondpb.MaterialsGetRequest) (*mondpb.MaterialsGetResponse, error) {
	records, err := s.Dao.GetMaterials()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	res := &mondpb.MaterialsGetResponse{}
	for _, v := range records {
		res.Materials = append(res.Materials, &mondpb.Material{
			Id:          v.Id,
			Name:        v.Name,
			Heat:        v.Heat,
			Coefficient: v.Coefficient,
		})
	}
	return res, nil
}

func (s *Service) MaterialEdit(ctx context.Context, request *mondpb.MaterialEditRequest) (*mondpb.MaterialEditResponse, error) {
	err := s.Dao.UpdateMaterial(request.Id, request.Name, request.Heat, request.Coefficient)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	return &mondpb.MaterialEditResponse{}, nil
}

func (s *Service) MaterialDelete(ctx context.Context, request *mondpb.MaterialDeleteRequest) (*mondpb.MaterialDeleteResponse, error) {
	err := s.Dao.DeleteMaterial(request.Id)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	return &mondpb.MaterialDeleteResponse{}, nil
}
