package dow

import (
	"context"
	"database/sql"
	"fmt"
	"go.uber.org/zap"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"math"
	dowpb "safe/dow/api/gen"
	"safe/dow/dao"
	"safe/shared/decimal"
	"strings"
)

type Service struct {
	dowpb.UnimplementedDowServiceServer
	Logger *zap.Logger
	Dao    *dao.Dao
}

func (s *Service) MaterialCoefficientGetChemicalActivityGrade(ctx context.Context, request *dowpb.MaterialCoefficientGetChemicalActivityGradeRequest) (*dowpb.MaterialCoefficientGetChemicalActivityGradeResponse, error) {
	chemicalActivityGrade, err := s.Dao.GetChemicalActivityGrade(request.ReactionCharacter)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	return &dowpb.MaterialCoefficientGetChemicalActivityGradeResponse{
		ChemicalActivityGrade: chemicalActivityGrade,
	}, nil
}

func (s *Service) MaterialCoefficient(ctx context.Context, request *dowpb.MaterialCoefficientRequest) (*dowpb.MaterialCoefficientResponse, error) {
	coefficient, err := s.Dao.GetCoefficientByTypeGrade(request.Type, request.TypeDetail, request.ChemicalActivityGrade)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	return &dowpb.MaterialCoefficientResponse{
		Coefficient: coefficient,
	}, nil
}

func (s *Service) MaterialCoefficientSaveUnknownMaterial(ctx context.Context, request *dowpb.MaterialCoefficientSaveUnknownMaterialRequest) (*dowpb.MaterialCoefficientSaveUnknownMaterialResponse, error) {
	heat := 132.71 * request.Coefficient
	err := s.Dao.SaveUnKnownMaterial(request.Name, heat, request.Coefficient)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	return &dowpb.MaterialCoefficientSaveUnknownMaterialResponse{}, nil
}

func (s *Service) MaterialCoefficientGetKnownCoefficient(ctx context.Context, request *dowpb.MaterialCoefficientGetKnownCoefficientRequest) (*dowpb.MaterialCoefficientGetKnownCoefficientResponse, error) {
	coefficient, err := s.Dao.GetCoefficientByName(request.Name)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	return &dowpb.MaterialCoefficientGetKnownCoefficientResponse{
		Coefficient: coefficient,
	}, nil
}

func (s *Service) MaterialCoefficientGetKnownNames(ctx context.Context, request *dowpb.MaterialCoefficientGetKnownNamesRequest) (*dowpb.MaterialCoefficientGetKnownNamesResponse, error) {
	names, err := s.Dao.GetNames()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	res := dowpb.MaterialCoefficientGetKnownNamesResponse{}
	for _, v := range names {
		res.Names = append(res.Names, &dowpb.Name{
			Name: v.Name,
			Code: v.Name,
		})
	}

	return &res, nil
}

func (s *Service) MaterialCoefficientGetReactionCharacters(ctx context.Context, request *dowpb.MaterialCoefficientGetReactionCharactersRequest) (*dowpb.MaterialCoefficientGetReactionCharactersResponse, error) {
	reactionCharacter, err := s.Dao.GetReactionCharacter()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	res := dowpb.MaterialCoefficientGetReactionCharactersResponse{}
	for _, v := range reactionCharacter {
		res.ReactionCharacters = append(res.ReactionCharacters, &dowpb.ReactionCharacter{
			Name: v.ReactionCharacter,
			Code: v.ReactionCharacter,
		})
	}

	return &res, nil
}

func (s *Service) MaterialCoefficientGetTypes(ctx context.Context, request *dowpb.MaterialCoefficientGetTypesRequest) (*dowpb.MaterialCoefficientGetTypesResponse, error) {
	types, err := s.Dao.GetType()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	res := dowpb.MaterialCoefficientGetTypesResponse{}
	for _, v := range types {
		details := []*dowpb.Type{}
		// split group_concat
		split := strings.Split(v.TypeDetail, "|")
		for _, v := range split {
			details = append(details, &dowpb.Type{
				Name: v,
				Code: v,
			})
		}
		res.Types = append(res.Types, &dowpb.Type{
			Name:     v.Type,
			Code:     v.Type,
			Children: details,
		})
	}

	return &res, nil
}

func (s *Service) ProcessHazardCoefficientGet(ctx context.Context, request *dowpb.ProcessHazardCoefficientGetRequest) (*dowpb.ProcessHazardCoefficientGetResponse, error) {
	A1, err := s.Dao.GetA1()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	B1, err := s.Dao.GetB1()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	C1, err := s.Dao.GetC1()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	D1, err := s.Dao.GetD1()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	E1, err := s.Dao.GetE1()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	F1, err := s.Dao.GetF1()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	A2, err := s.Dao.GetA2()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	B2, err := s.Dao.GetB2()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	C2, err := s.Dao.GetC2()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	D2, err := s.Dao.GetD2()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	E2, err := s.Dao.GetE2()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	F2, err := s.Dao.GetF2()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	G2, err := s.Dao.GetG2()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	H2, err := s.Dao.GetH2()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	I2, err := s.Dao.GetI2()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	J2, err := s.Dao.GetJ2()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	K2, err := s.Dao.GetK2()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	L2, err := s.Dao.GetL2()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	return &dowpb.ProcessHazardCoefficientGetResponse{
		A1: convertRecordToCoefficientList(A1),
		B1: convertRecordToCoefficientList(B1),
		C1: convertRecordToCoefficientList(C1),
		D1: convertRecordToCoefficientList(D1),
		E1: convertRecordToCoefficientList(E1),
		F1: convertRecordToCoefficientList(F1),
		A2: convertRecordToCoefficientList(A2),
		B2: convertRecordToCoefficientList(B2),
		C2: convertRecordToCoefficientList(C2),
		D2: convertRecordToCoefficientList(D2),
		E2: convertRecordToCoefficientList(E2),
		F2: convertRecordToCoefficientList(F2),
		G2: convertRecordToCoefficientList(G2),
		H2: convertRecordToCoefficientList(H2),
		I2: convertRecordToCoefficientList(I2),
		J2: convertRecordToCoefficientList(J2),
		K2: convertRecordToCoefficientList(K2),
		L2: convertRecordToCoefficientList(L2),
	}, nil
}

func (s *Service) CompensationCoefficientGet(ctx context.Context, request *dowpb.CompensationCoefficientGetRequest) (*dowpb.CompensationCoefficientGetResponse, error) {
	a1, err := s.Dao.Geta1()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	b1, err := s.Dao.Getb1()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	c1, err := s.Dao.Getc1()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	d1, err := s.Dao.Getd1()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	e1, err := s.Dao.Gete1()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	f1, err := s.Dao.Getf1()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	h1, err := s.Dao.Geth1()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	a2, err := s.Dao.Geta2()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	b2, err := s.Dao.Getb2()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	d2, err := s.Dao.Getd2()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	a3, err := s.Dao.Geta3()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	b3, err := s.Dao.Getb3()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	c3, err := s.Dao.Getc3()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	d3, err := s.Dao.Getd3()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	i3, err := s.Dao.Geti3()
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	return &dowpb.CompensationCoefficientGetResponse{
		A1: convertRecordToCoefficientList(a1),
		B1: convertRecordToCoefficientList(b1),
		C1: convertRecordToCoefficientList(c1),
		D1: convertRecordToCoefficientList(d1),
		E1: convertRecordToCoefficientList(e1),
		F1: convertRecordToCoefficientList(f1),
		H1: convertRecordToCoefficientList(h1),
		A2: convertRecordToCoefficientList(a2),
		B2: convertRecordToCoefficientList(b2),
		D2: convertRecordToCoefficientList(d2),
		A3: convertRecordToCoefficientList(a3),
		B3: convertRecordToCoefficientList(b3),
		C3: convertRecordToCoefficientList(c3),
		D3: convertRecordToCoefficientList(d3),
		I3: convertRecordToCoefficientList(i3),
	}, nil
}

func convertRecordToCoefficientList(records []dao.CoefficientRecord) []*dowpb.Coefficient {
	res := []*dowpb.Coefficient{}
	for _, v := range records {
		res = append(res, &dowpb.Coefficient{
			Name: v.Label,
			Code: decimal.SaveDecimalBit(float64(v.Value), 4),
		})
	}
	return res
}

func (s *Service) GeneralProcessHazardCoefficientCalc(ctx context.Context, request *dowpb.GeneralProcessHazardCoefficientCalcRequest) (*dowpb.GeneralProcessHazardCoefficientCalcResponse, error) {
	F1 := 1 + request.A1 + request.B1 + request.C1 + request.D1 + request.E1 + request.F1
	return &dowpb.GeneralProcessHazardCoefficientCalcResponse{
		F1: decimal.SaveDecimalBit(float64(F1), 4),
	}, nil
}

func (s *Service) SpecialProcessHazardCoefficientCalc(ctx context.Context, request *dowpb.SpecialProcessHazardCoefficientCalcRequest) (*dowpb.SpecialProcessHazardCoefficientCalcResponse, error) {
	if request.K2 > 1.15 || request.K2 < 0.15 {
		return nil, status.Error(codes.InvalidArgument, "热油热交换系统范围不正确")
	}
	if request.D2 > 2 || request.D2 < 0.25 {
		return nil, status.Error(codes.InvalidArgument, "粉尘爆炸范围不正确")
	}
	if request.E2 > 2 || request.E2 < 0.1 {
		return nil, status.Error(codes.InvalidArgument, "压力范围不正确")
	}
	if request.J2 > 1 || request.J2 < 0.1 {
		return nil, status.Error(codes.InvalidArgument, "使用明火设备范围不正确")
	}
	F2 := 1 + request.A2 + request.B2 + request.C2 + request.D2 + request.E2 + request.F2 + request.G2 + request.H2 + request.I2 + request.J2 + request.K2 + request.L2
	F3 := request.GeneralProcessHazardCoefficientF1 * F2
	if request.GeneralProcessHazardCoefficientF1*F2 > 8 {
		F3 = 8
	}
	return &dowpb.SpecialProcessHazardCoefficientCalcResponse{
		F2: decimal.SaveDecimalBit(float64(F2), 4),
		F3: decimal.SaveDecimalBit(float64(F3), 4),
	}, nil
}

func (s *Service) ProcessControlCompensationCoefficientCalc(ctx context.Context, request *dowpb.ProcessControlCompensationCoefficientCalcRequest) (*dowpb.ProcessControlCompensationCoefficientCalcResponse, error) {
	//0.91~0.98
	if (request.I1 > 0.98 && request.I1 != 1) || request.I1 < 0.91 {
		return nil, status.Error(codes.InvalidArgument, "其他工艺危险分析范围不正确")
	}
	if (request.G1 > 0.99 && request.G1 != 1) || request.G1 < 0.91 {
		return nil, status.Error(codes.InvalidArgument, "操作指南或操作规程范围不正确")
	}
	C1 := request.A1 * request.B1 * request.C1 * request.D1 * request.E1 * request.F1 * request.G1 * request.H1 * request.I1

	return &dowpb.ProcessControlCompensationCoefficientCalcResponse{
		C1: decimal.SaveDecimalBit(float64(C1), 4),
	}, nil
}

func (s *Service) MaterialIsolationCompensationCoefficientCalc(ctx context.Context, request *dowpb.MaterialIsolationCompensationCoefficientCalcRequest) (*dowpb.MaterialIsolationCompensationCoefficientCalcResponse, error) {
	if (request.C2 > 0.97 && request.C2 != 1) || request.C2 < 0.91 {
		return nil, status.Error(codes.InvalidArgument, "排放系统范围不正确")
	}
	C2 := request.A2 * request.B2 * request.C2 * request.D2

	return &dowpb.MaterialIsolationCompensationCoefficientCalcResponse{
		C2: decimal.SaveDecimalBit(float64(C2), 4),
	}, nil
}

func (s *Service) FirePreventionMeasureCompensationCoefficientCalc(ctx context.Context, request *dowpb.FirePreventionMeasureCompensationCoefficientCalcRequest) (*dowpb.FirePreventionMeasureCompensationCoefficientCalcResponse, error) {
	if (request.F3 > 0.98 && request.F3 != 1) || request.F3 < 0.97 {
		return nil, status.Error(codes.InvalidArgument, "水幕范围不正确")
	}
	if (request.G3 > 0.97 && request.G3 != 1) || request.G3 < 0.92 {
		return nil, status.Error(codes.InvalidArgument, "泡沫灭火装置范围不正确")
	}
	if (request.E3 > 0.97 && request.E3 != 1) || request.E3 < 0.74 {
		return nil, status.Error(codes.InvalidArgument, "洒水灭火系统范围不正确")
	}
	if (request.H3 > 0.98 && request.H3 != 1) || request.H3 < 0.93 {
		return nil, status.Error(codes.InvalidArgument, "手提式灭火器范围不正确")
	}

	C3 := request.A3 * request.B3 * request.C3 * request.D3 * request.E3 * request.F3 * request.G3 * request.H3 * request.I3
	return &dowpb.FirePreventionMeasureCompensationCoefficientCalcResponse{
		C3: decimal.SaveDecimalBit(float64(C3), 4),
	}, nil
}

func (s *Service) EvaluationResultsCalc(ctx context.Context, request *dowpb.EvaluationResultsCalcRequest) (*dowpb.EvaluationResultsCalcResponse, error) {
	C := request.C1 * request.C2 * request.C3
	initialFEi := request.MaterialCoefficientMf * request.ProcessHazardCoefficientF3
	initialLevel, err := s.Dao.GetUnitHazardLevel(initialFEi)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	initialR := 0.256 * initialFEi
	initialS := math.Pi * math.Pow(float64(initialR), 2)
	initialUnitHazardCoefficient := calcUnitHazardCoefficient(request.ProcessHazardCoefficientF3, request.MaterialCoefficientMf)

	compensationUnitHazardCoefficient := calcUnitHazardCoefficient(request.ProcessHazardCoefficientF3, request.MaterialCoefficientMf)
	compensationFEi := request.MaterialCoefficientMf * request.ProcessHazardCoefficientF3 * C
	compensationLevel, err := s.Dao.GetUnitHazardLevel(compensationFEi)
	compensationR := 0.256 * compensationFEi
	compensationS := math.Pi * math.Pow(float64(compensationR), 2)

	conclusion := ""
	if initialLevel == "非常大" {
		conclusion = "通过上述分析可知，在未采取相关安全措施的情况下，该化工企业各单元的危险等级均比较高，火灾爆炸指数达到" + fmt.Sprintf("%v", initialUnitHazardCoefficient) + "，危险等级为" + initialLevel + "，发生事故，后果不堪设想。"
	}
	if compensationLevel == "较轻" || compensationLevel == "最轻" {
		conclusion += "在采取相关安全措施的情况下，各单元危险等级明显降低，危险等级达到" + compensationLevel + "。可见对危险性较大的单元采取可靠的安全措施可很大程度降低其危险性，该企业应确保这些单元的安全措施完整和可靠，保证安全生产。"
	}
	return &dowpb.EvaluationResultsCalcResponse{
		C:                                 decimal.SaveDecimalBit(float64(C), 4),
		InitialFEi:                        decimal.SaveDecimalBit(float64(initialFEi), 4),
		InitialUnitHazardLevel:            initialLevel,
		InitialR:                          decimal.SaveDecimalBit(float64(initialR), 4),
		InitialS:                          decimal.SaveDecimalBit(initialS, 4),
		InitialUnitHazardCoefficient:      decimal.SaveDecimalBit(initialUnitHazardCoefficient, 4),
		CompensationFEi:                   decimal.SaveDecimalBit(float64(compensationFEi), 4),
		CompensationUnitHazardLevel:       compensationLevel,
		CompensationR:                     decimal.SaveDecimalBit(float64(compensationR), 4),
		CompensationS:                     decimal.SaveDecimalBit(compensationS, 4),
		CompensationUnitHazardCoefficient: decimal.SaveDecimalBit(compensationUnitHazardCoefficient, 4),
		Conclusion:                        conclusion,
	}, nil
}

func calcUnitHazardCoefficient(f3 float32, MF float32) float64 {
	f3 = float32(math.Round(float64(f3)))

	unitHazardCoefficient := 0.0
	if f3 == 1 {
		unitHazardCoefficient = -2.60135e-5*math.Pow(float64(MF), 3) + 0.00139*math.Pow(float64(MF), 2) + 0.00162*float64(MF) + 0.00847
	} else if f3 == 2 {
		unitHazardCoefficient = -3.24412e-5*math.Pow(float64(MF), 3) + 0.00174*math.Pow(float64(MF), 2) + -7.30406e-4*float64(MF) + 0.03042
	} else if f3 == 3 {
		unitHazardCoefficient = -2.63883e-5*math.Pow(float64(MF), 3) + (0.00144)*math.Pow(float64(MF), 2) + 7.05327e-4*float64(MF) + 0.01018
	} else if f3 == 4 {
		unitHazardCoefficient = -4.07527e-5*math.Pow(float64(MF), 3) + (0.00212)*math.Pow(float64(MF), 2) + -6.73166e-6*float64(MF) + 0.06525
	} else if f3 == 5 {
		unitHazardCoefficient = -3.93108e-5*math.Pow(float64(MF), 3) + 0.00197*math.Pow(float64(MF), 2) + 0.00532*float64(MF) + 0.06608
	} else if f3 == 6 {
		unitHazardCoefficient = -3.64808e-5*math.Pow(float64(MF), 3) + 0.00171*math.Pow(float64(MF), 2) + 0.01141*float64(MF) + 0.07647
	} else if f3 == 7 {
		unitHazardCoefficient = -4.09153e-5*math.Pow(float64(MF), 3) + 0.00196*math.Pow(float64(MF), 2) + 0.00877*float64(MF) + 0.10597
	} else if f3 == 8 {
		unitHazardCoefficient = -3.23475e-5*math.Pow(float64(MF), 3) + 0.00142*math.Pow(float64(MF), 2) + 0.01725*float64(MF) + 0.10826
	}
	return unitHazardCoefficient
}
