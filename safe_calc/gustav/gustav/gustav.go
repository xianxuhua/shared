package gustav

import (
	"context"
	"database/sql"
	"go.uber.org/zap"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	gustavpb "safe/gustav/api/gen"
	"safe/gustav/dao"
	"safe/shared/decimal"
)

type Service struct {
	gustavpb.UnimplementedGustavServiceServer
	Logger *zap.Logger
	Dao    *dao.Dao
}

func (s *Service) QiGet(ctx context.Context, request *gustavpb.QiGetRequest) (*gustavpb.QiGetResponse, error) {
	qis, err := s.Dao.GetQi()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	res := &gustavpb.QiGetResponse{}
	for _, v := range qis {
		res.Qis = append(res.Qis, &gustavpb.Qi{
			Name: v.Label,
			Code: v.Value,
		})
	}
	return res, nil
}

func (s *Service) FireBuildingRiskAnalyse(ctx context.Context, request *gustavpb.FireBuildingRiskAnalyseRequest) (*gustavpb.FireBuildingRiskAnalyseResponse, error) {
	c, err := s.Dao.GetC(request.MoveFireType)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	kgM2 := request.MoveFireQuality / request.AccessArea
	qm, err := s.Dao.GetQm(kgM2)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	b, err := s.Dao.GetB(request.AccessArea)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	w, err := s.Dao.GetW(request.FireResistTop)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	ri, err := s.Dao.GetRi(request.FireSourceFeature)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	l, err := s.Dao.GetL(request.FireFightPowerProperty, request.FireControlDis)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	gr := (qm*c + request.Qi) * b * l / w / ri
	return &gustavpb.FireBuildingRiskAnalyseResponse{
		MoveFireLoadFactorQm:      decimal.SaveDecimalBit(float64(qm), 4),
		FireFightDelayFactorL:     decimal.SaveDecimalBit(float64(l), 4),
		BurningPerformFactorC:     decimal.SaveDecimalBit(float64(c), 4),
		BuildingFireResistFactorW: decimal.SaveDecimalBit(float64(w), 4),
		FireAreaPositionFactorB:   decimal.SaveDecimalBit(float64(b), 4),
		RiskReduceFactorRi:        decimal.SaveDecimalBit(float64(ri), 4),
		BuildingRiskGr:            decimal.SaveDecimalBit(float64(gr), 4),
	}, nil
}

func (s *Service) FireBuildingRiskAnalyseGetCombustibleNames(context.Context, *gustavpb.FireBuildingRiskAnalyseGetCombustibleNamesRequest) (*gustavpb.FireBuildingRiskAnalyseGetCombustibleNamesResponse, error) {
	names, err := s.Dao.GetCombustibleNames()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	res := &gustavpb.FireBuildingRiskAnalyseGetCombustibleNamesResponse{}
	for _, v := range names {
		res.CombustibleNames = append(res.CombustibleNames, &gustavpb.Combustible{
			Name: v.Name,
			Code: v.Name,
		})
	}
	return res, nil
}

func (s *Service) FireBuildingRiskAnalyseGetFireResistTops(context.Context, *gustavpb.FireBuildingRiskAnalyseGetFireResistTopsRequest) (*gustavpb.FireBuildingRiskAnalyseGetFireResistTopsResponse, error) {
	tops, err := s.Dao.GetFireResistTops()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	res := &gustavpb.FireBuildingRiskAnalyseGetFireResistTopsResponse{}
	for _, v := range tops {
		res.FireResistTops = append(res.FireResistTops, &gustavpb.FireResist{
			Name: v.Top,
			Code: v.Top,
		})
	}

	return res, nil
}

func (s *Service) FireBuildingRiskAnalyseGetFireSourceFeature(context.Context, *gustavpb.FireBuildingRiskAnalyseGetFireSourceFeatureRequest) (*gustavpb.FireBuildingRiskAnalyseGetFireSourceFeatureResponse, error) {
	features, err := s.Dao.GetFireSourceFeatures()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	res := &gustavpb.FireBuildingRiskAnalyseGetFireSourceFeatureResponse{}
	for _, v := range features {
		res.FireSourceFeatures = append(res.FireSourceFeatures, &gustavpb.FireSource{
			Name: v.Feature,
			Code: v.Feature,
		})
	}

	return res, nil
}

func (s *Service) FireBuildingRiskAnalyseGetFireFightPowerPropertyDis(context.Context, *gustavpb.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisRequest) (*gustavpb.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse, error) {
	propertyRecords, disRecords, err := s.Dao.GetFireFightPowerPropertyDis()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	res := gustavpb.FireBuildingRiskAnalyseGetFireFightPowerPropertyDisResponse{}
	for _, v := range disRecords {
		res.FireFightPowerDis = append(res.FireFightPowerDis, &gustavpb.FireFightPowerDis{
			Name: v.Dis,
			Code: v.Dis,
		})
	}
	for _, v := range propertyRecords {
		res.FireFightPowerProperty = append(res.FireFightPowerProperty, &gustavpb.FireFightPowerProperty{
			Name: v.Property,
			Code: v.Property,
		})
	}

	return &res, nil
}

func (s *Service) BuildingFireRiskAnalyse(ctx context.Context, request *gustavpb.BuildingFireRiskAnalyseRequest) (*gustavpb.BuildingFireRiskAnalyseResponse, error) {
	h, err := s.Dao.GetH(request.PersonFireRiskFeature)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	d, err := s.Dao.GetD(request.AssetsFireRiskFeature)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	f, err := s.Dao.GetF(request.SmokeFireRiskFeature)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	ir := h * d * f
	return &gustavpb.BuildingFireRiskAnalyseResponse{
		PersonRiskFactorH:  decimal.SaveDecimalBit(float64(h), 4),
		AssetsRiskFactorD:  decimal.SaveDecimalBit(float64(d), 4),
		SmokeRiskFactorF:   decimal.SaveDecimalBit(float64(f), 4),
		BuildingFireRiskIr: decimal.SaveDecimalBit(float64(ir), 4),
	}, nil
}

func (s *Service) BuildingFireRiskAnalyseGetPersonRiskFeature(context.Context, *gustavpb.BuildingFireRiskAnalyseGetPersonRiskFeatureRequest) (*gustavpb.BuildingFireRiskAnalyseGetPersonRiskFeatureResponse, error) {
	personRiskFeature, err := s.Dao.GetPersonRiskFeature()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	res := gustavpb.BuildingFireRiskAnalyseGetPersonRiskFeatureResponse{}
	for _, v := range personRiskFeature {
		res.PersonRiskFeature = append(res.PersonRiskFeature, &gustavpb.RiskFeature{
			Name: v.Feature,
			Code: v.Feature,
		})
	}
	return &res, nil
}

func (s *Service) BuildingFireRiskAnalyseGetAssetsRiskFeature(context.Context, *gustavpb.BuildingFireRiskAnalyseGetAssetsRiskFeatureRequest) (*gustavpb.BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse, error) {
	assetsRiskFeature, err := s.Dao.GetAssetsRiskFeature()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	res := gustavpb.BuildingFireRiskAnalyseGetAssetsRiskFeatureResponse{}
	for _, v := range assetsRiskFeature {
		res.AssetsRiskFeature = append(res.AssetsRiskFeature, &gustavpb.RiskFeature{
			Name: v.Feature,
			Code: v.Feature,
		})
	}
	return &res, nil
}

func (s *Service) BuildingFireRiskAnalyseGetSmokeRiskFeature(context.Context, *gustavpb.BuildingFireRiskAnalyseGetSmokeRiskFeatureRequest) (*gustavpb.BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse, error) {
	smokeRiskFeature, err := s.Dao.GetSmokeRiskFeature()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	res := gustavpb.BuildingFireRiskAnalyseGetSmokeRiskFeatureResponse{}
	for _, v := range smokeRiskFeature {
		res.SmokeRiskFeature = append(res.SmokeRiskFeature, &gustavpb.RiskFeature{
			Name: v.Feature,
			Code: v.Feature,
		})
	}
	return &res, nil
}

func (s *Service) BuildingFireRiskTotalAnalyse(ctx context.Context, request *gustavpb.BuildingFireRiskTotalAnalyseRequest) (*gustavpb.BuildingFireRiskTotalAnalyseResponse, error) {
	//TODO implement me
	panic("implement me")
}

func (s *Service) BuildingFireRiskTotalAnalyseSavePoint(ctx context.Context, request *gustavpb.BuildingFireRiskTotalAnalyseSavePointRequest) (*gustavpb.BuildingFireRiskTotalAnalyseSavePointResponse, error) {
	err := s.Dao.SavePoints(request.X, request.Y)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	return &gustavpb.BuildingFireRiskTotalAnalyseSavePointResponse{}, err
}

func (s *Service) BuildingFireRiskTotalAnalyseGetPoint(ctx context.Context, request *gustavpb.BuildingFireRiskTotalAnalyseGetPointRequest) (*gustavpb.BuildingFireRiskTotalAnalyseGetPointResponse, error) {
	points, err := s.Dao.GetPoints()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	res := gustavpb.BuildingFireRiskTotalAnalyseGetPointResponse{}
	for _, v := range points {
		res.Points = append(res.Points, &gustavpb.Point{
			X: v.X,
			Y: v.Y,
		})
	}

	return &res, nil
}
