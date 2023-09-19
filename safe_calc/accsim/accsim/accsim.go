package accsim

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"go.uber.org/zap"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"io"
	"math"
	"net/http"
	"safe/accsim/api/gen"
	"safe/accsim/dao"
	"safe/accsim/httprequest"
	"safe/accsim/xmlparse"
	"safe/shared/decimal"
	"strconv"
	"strings"
)

type Service struct {
	Logger *zap.Logger
	Dao    *dao.Dao
	accsimpb.UnimplementedAccSimServiceServer
}

func (s *Service) AccSceneGet(ctx context.Context, request *accsimpb.AccSceneGetRequest) (*accsimpb.AccSceneGetResponse, error) {
	scenes, err := s.Dao.GetAccScenes()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	res := &accsimpb.AccSceneGetResponse{}
	for _, v := range scenes {
		res.AccScenes = append(res.AccScenes, &accsimpb.AccScene{
			Id:                 v.Id,
			Name:               v.Name,
			DeathRadius:        v.DeathRadius,
			BigInjuryRadius:    v.BigInjuryRadius,
			SmallInjuryRadius:  v.SmallInjuryRadius,
			Longitude:          v.Longitude,
			Latitude:           v.Latitude,
			WindDirection:      v.WindDirection,
			WindSpeed:          v.WindSpeed,
			TargetDis:          v.TargetDis,
			LiquidTankDiameter: v.LiquidTankDiameter,
			Xs:                 s.StringToSlice(v.Xs),
			Ys:                 s.StringToSlice(v.Ys),
			SafeRadius:         v.SafeRadius,
			Type:               v.Type,
			AddTime:            v.AddTime,
		})
	}
	return res, nil
}

func (s *Service) AccSceneSave(ctx context.Context, request *accsimpb.AccSceneSaveRequest) (*accsimpb.AccSceneSaveResponse, error) {
	err := s.Dao.SaveAccScene(request)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	return &accsimpb.AccSceneSaveResponse{}, nil
}

func (s *Service) AccSceneDelete(ctx context.Context, request *accsimpb.AccSceneDeleteRequest) (*accsimpb.AccSceneDeleteResponse, error) {
	err := s.Dao.DeleteAccScene(request.Id)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	return &accsimpb.AccSceneDeleteResponse{}, nil
}

func (s *Service) AccSceneInfo(ctx context.Context, request *accsimpb.AccSceneInfoRequest) (*accsimpb.AccSceneInfoResponse, error) {
	scene, err := s.Dao.GetAccScene(request.Id)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.NotFound, "")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	return &accsimpb.AccSceneInfoResponse{
		Name:               scene.Name,
		Type:               scene.Type,
		DeathRadius:        scene.DeathRadius,
		BigInjuryRadius:    scene.BigInjuryRadius,
		SmallInjuryRadius:  scene.SmallInjuryRadius,
		Longitude:          scene.Longitude,
		Latitude:           scene.Latitude,
		WindDirection:      scene.WindDirection,
		WindSpeed:          scene.WindSpeed,
		TargetDis:          scene.TargetDis,
		LiquidTankDiameter: scene.LiquidTankDiameter,
		Xs:                 s.StringToSlice(scene.Xs),
		Ys:                 s.StringToSlice(scene.Ys),
		SafeRadius:         scene.SafeRadius,
	}, nil
}

func (s *Service) StringToSlice(str string) []float32 {
	res := []float32{}
	if len(str) == 0 {
		return res
	}
	for _, v := range strings.Split(str, ",") {
		f, err := strconv.ParseFloat(v, 32)
		if err != nil {
			s.Logger.Error("", zap.Error(err))
			break
		}
		res = append(res, float32(f))
	}
	return res
}

type PoolFireCalcResponse struct {
	ExtendedFlameDiameter1 float32 `json:"yczj1,omitempty"`
	ExtendedFlameDiameter2 float32 `json:"yczj2,omitempty"`
	TiltAngle              float32 `json:"qxj,omitempty"`
	RadiatedPower          float32 `json:"fsgl,omitempty"`
	Fstl                   float32 `json:"fstl,omitempty"`
	SafeRadius             float32 `json:"aqbj,omitempty"`
	BigInjuryRadius        float32 `json:"zsbj,omitempty"`
	DeathRadius            float32 `json:"swbj,omitempty"`
	Tjfzbj                 float32 `json:"tjfzbj,omitempty"`
	FireHeight             float32 `json:"hygd,omitempty"`
	SmallInjuryRadius      float32 `json:"qsbj,omitempty"`
	Msg                    string  `json:"msg,omitempty"`
}

func (s *Service) PoolFireCalc(ctx context.Context, request *accsimpb.PoolFireCalcRequest) (*accsimpb.PoolFireCalcResponse, error) {
	// 请求接口获取
	resp, err := http.Get(fmt.Sprintf(
		request.LiquidTankDiameter, request.Density, request.BurningRate, request.BurningHeat, request.WindSpeed, request.TargetDis))
	defer resp.Body.Close()

	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	var rep PoolFireCalcResponse
	all, err := io.ReadAll(resp.Body)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	err = json.Unmarshal(all, &rep)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	averD := request.TargetDis / 10
	var i float32
	xs := []float32{}
	ys := []float32{}
	for i = 0; i < 8; i++ {
		everD := i*averD + averD
		xs = append(xs, decimal.SaveDecimalBit(float64(everD+40.0), 4))
		fp := 1 / (4 * math.Pi * math.Pow(float64(everD+request.LiquidTankDiameter/2), 2))
		ta := 2.02 * 1193.5 * math.Pow(float64(everD+request.LiquidTankDiameter/2), -0.09)
		qq := ta * 0.35 * float64(request.WindSpeed*request.BurningHeat) * 0.001 * fp * math.Pi * math.Pow(float64(request.LiquidTankDiameter/2), 2) / 1000 / 2.2
		ys = append(ys, decimal.SaveDecimalBit(qq, 4))
	}

	return &accsimpb.PoolFireCalcResponse{
		FireHeight:            rep.FireHeight,
		TiltAngle:             rep.TiltAngle,
		ExtendedFlameDiameter: fmt.Sprintf("%v", rep.ExtendedFlameDiameter1) + "/" + fmt.Sprintf("%v", rep.ExtendedFlameDiameter2),
		ThermalRadiationPower: rep.RadiatedPower,
		DeathRadius:           rep.DeathRadius,
		BigInjuryRadius:       rep.BigInjuryRadius,
		SmallInjuryRadius:     rep.SmallInjuryRadius,
		Xs:                    xs,
		Ys:                    ys,
		SafeRadius:            rep.SafeRadius,
	}, nil
}

func (s *Service) FlowingFireCalc(ctx context.Context, request *accsimpb.FlowingFireCalcRequest) (*accsimpb.FlowingFireCalcResponse, error) {
	// 请求接口获取
	resp, err := http.Get(fmt.Sprintf(
		request.LiquidTankDiameter, request.Density, request.BurningRate, request.BurningHeat, request.WindSpeed, request.TargetDis))
	defer resp.Body.Close()

	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	var rep PoolFireCalcResponse
	all, err := io.ReadAll(resp.Body)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	err = json.Unmarshal(all, &rep)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	if rep.Msg == "error" {
		s.Logger.Error("", zap.Error(fmt.Errorf("can not calc")))
		return nil, status.Error(codes.Internal, "")
	}

	averD := request.TargetDis / 10
	var i float32
	xs := []float32{}
	ys := []float32{}
	for i = 0; i < 8; i++ {
		everD := i*averD + averD
		xs = append(xs, decimal.SaveDecimalBit(float64(everD+62.0), 4))
		fp := 1 / (4 * math.Pi * math.Pow(float64(everD+request.LiquidTankDiameter/2), 2))
		ta := 2.02 * 1193.5 * math.Pow(float64(everD+request.LiquidTankDiameter/2), -0.09)
		qq := ta * 0.35 * float64(request.WindSpeed*request.BurningHeat) * 0.001 * fp * math.Pi * math.Pow(float64(request.LiquidTankDiameter/2), 2) / 1000 / 2.2
		ys = append(ys, decimal.SaveDecimalBit(qq, 4))
	}

	return &accsimpb.FlowingFireCalcResponse{
		FireHeight:            rep.FireHeight,
		TiltAngle:             rep.TiltAngle,
		ExtendedFlameDiameter: fmt.Sprintf("%v", rep.ExtendedFlameDiameter1) + "/" + fmt.Sprintf("%v", rep.ExtendedFlameDiameter2),
		ThermalRadiationPower: rep.RadiatedPower,
		DeathRadius:           rep.DeathRadius,
		BigInjuryRadius:       rep.BigInjuryRadius,
		SmallInjuryRadius:     rep.SmallInjuryRadius,
		Xs:                    xs,
		Ys:                    ys,
		SafeRadius:            rep.SafeRadius,
	}, nil
}

func (s *Service) SealRingCalc(ctx context.Context, request *accsimpb.SealRingCalcRequest) (*accsimpb.SealRingCalcResponse, error) {
	// 请求接口获取
	//double area=Math.PI*40*40-Math.PI*39.5*39.5;
	//		double d=Math.sqrt(area/Math.PI)*2;
	area := math.Pi*40*40 - math.Pi*39.5*39.5
	d := math.Sqrt(area/math.Pi) * 2
	resp, err := http.Get(fmt.Sprintf(
		d, request.Density, request.BurningRate, request.BurningHeat, request.WindSpeed, request.TargetDis))
	defer resp.Body.Close()

	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	var rep PoolFireCalcResponse
	all, err := io.ReadAll(resp.Body)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	err = json.Unmarshal(all, &rep)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	if rep.Msg == "error" {
		s.Logger.Error("", zap.Error(fmt.Errorf("can not calc")))
		return nil, status.Error(codes.Internal, "")
	}

	return &accsimpb.SealRingCalcResponse{
		ThermalRadiationPower: rep.RadiatedPower,
		DeathRadius:           rep.DeathRadius,
		BigInjuryRadius:       rep.BigInjuryRadius,
		SmallInjuryRadius:     rep.SmallInjuryRadius,
		SafeRadius:            rep.SafeRadius,
	}, nil
}

func (s *Service) JetFireCalc(ctx context.Context, request *accsimpb.JetFireCalcRequest) (*accsimpb.JetFireCalcResponse, error) {
	var Temperature = 25                                                     // 环境温度
	var RelativeHumidity float32 = 0.5                                       // 相对湿度
	LeakageArea := float32(math.Pi * math.Pow(float64(request.Aperture), 2)) // 泄漏面积
	var LeakagePortHeight float32 = 4.3                                      // 泄漏高度
	var ConveyingMediumDensity float32 = 700.0                               // 输送介质密度
	request.SpecificHeatCapacity = 1.495
	request.MolecularWeight = 28.06

	bytes, err := httprequest.Get(fmt.Sprintf(
		request.SpecificHeatCapacity, request.Pressure, request.Aperture, request.MolecularWeight, Temperature, int(request.BurningHeat), RelativeHumidity))
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, err
	}

	smallInjuryRadius, err := xmlparse.ConvertToFloat(string(bytes))
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	bytes, err = httprequest.Get(fmt.Sprintf(
		request.SpecificHeatCapacity, request.Pressure, request.Aperture, request.MolecularWeight, Temperature, int(request.BurningHeat), RelativeHumidity))
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, err
	}

	bigInjuryRadius, err := xmlparse.ConvertToFloat(string(bytes))
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	bytes, err = httprequest.Get(fmt.Sprintf(
		request.SpecificHeatCapacity, request.Pressure, request.Aperture, request.MolecularWeight, Temperature, int(request.BurningHeat), RelativeHumidity))
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, err
	}

	deathRadius, err := xmlparse.ConvertToFloat(string(bytes))
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	bytes, err = httprequest.Get(fmt.Sprintf(
		request.SpecificHeatCapacity, request.Pressure, request.Aperture, request.MolecularWeight, Temperature, int(request.BurningHeat), RelativeHumidity, request.TargetDis))
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, err
	}

	heatRadiationFlux, err := xmlparse.ConvertToFloat(string(bytes))
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	// 计算火焰高度
	Q0 := (2 * (request.PipelinePressure - 0.101325) / ConveyingMediumDensity) + 2*9.8*LeakagePortHeight
	Q := float64(0.62*LeakageArea*ConveyingMediumDensity) * math.Sqrt(float64(Q0))
	fireHeight := float32(0.003271918 * math.Pow(Q*float64(request.BurningHeat), 0.478))

	averD := request.TargetDis / 10
	var i float32
	xs := []float32{}
	ys := []float32{}
	for i = 0; i < 8; i++ {
		everD := i*averD + averD
		xs = append(xs, decimal.SaveDecimalBit(float64(everD+62.0), 4))
		fp := 1 / (4 * math.Pi * math.Pow(float64(everD+request.Aperture/2), 2))
		ta := 2.02 * 1193.5 * math.Pow(float64(everD+request.Aperture/2), -0.09)
		qq := ta * 0.35 * float64(request.WindSpeed*request.BurningHeat) * 0.001 * fp * math.Pi * math.Pow(float64(request.Aperture/2), 2) / 1000 / 2.2
		ys = append(ys, decimal.SaveDecimalBit(qq, 4))
	}

	// 计算火焰直径
	LeakageMaterialDensity := 1.26035     // 密度
	LeakageMaterialGaseousDensity := 1.32 // 气态密度
	fireDiameter := LeakagePortHeight * float32(math.Sqrt(LeakageMaterialDensity/LeakageMaterialGaseousDensity))
	return &accsimpb.JetFireCalcResponse{
		SmallInjuryRadius: smallInjuryRadius,
		BigInjuryRadius:   bigInjuryRadius,
		DeathRadius:       deathRadius,
		HeatRadiationFlux: heatRadiationFlux,
		FireHeight:        fireHeight,
		FireDiameter:      fireDiameter,
		Xs:                xs,
		Ys:                ys,
	}, nil
}

func (s *Service) BallFireCalc(ctx context.Context, request *accsimpb.BallFireCalcRequest) (*accsimpb.BallFireCalcResponse, error) {
	var RelativeHumidity float32 = 0.5
	// BurningHeat带e，传过去认为是string，转为int
	bytes, err := httprequest.Get(fmt.Sprintf(
		request.Leakage, int64(request.BurningHeat), RelativeHumidity))
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	smallInjuryRadius, err := xmlparse.ConvertToFloat(string(bytes))
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	bytes, err = httprequest.Get(fmt.Sprintf(
		request.Leakage, int(request.BurningHeat), RelativeHumidity))
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	bigInjuryRadius, err := xmlparse.ConvertToFloat(string(bytes))
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	bytes, err = httprequest.Get(fmt.Sprintf(
		request.Leakage, int(request.BurningHeat), RelativeHumidity))
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	deathRadius, err := xmlparse.ConvertToFloat(string(bytes))
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	bytes, err = httprequest.Get(fmt.Sprintf(
		request.Leakage, int(request.BurningHeat), request.TargetDis, RelativeHumidity))
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	heatRadiationFlux, err := xmlparse.ConvertToFloat(string(bytes))
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	maxRadius := 2.665 * math.Pow(float64(request.Leakage), 0.322)
	duration := 1.089 * math.Pow(float64(request.Leakage), 0.322)

	averD := request.TargetDis / 10
	var i float32
	xs := []float32{}
	ys := []float32{}
	for i = 0; i < 8; i++ {
		everD := i*averD + averD
		xs = append(xs, decimal.SaveDecimalBit(float64(everD+40.0), 4))
		fp := float64(0.0267*heatRadiationFlux) / (4 * math.Pi * math.Pow(float64(everD), 2))
		ys = append(ys, decimal.SaveDecimalBit(fp, 4))
	}

	return &accsimpb.BallFireCalcResponse{
		SmallInjuryRadius: smallInjuryRadius,
		DeathRadius:       deathRadius,
		BigInjuryRadius:   bigInjuryRadius,
		Xs:                xs,
		Ys:                ys,
		MaxRadius:         float32(maxRadius),
		Duration:          float32(duration),
		HeatRadiationFlux: heatRadiationFlux,
	}, nil
}

type FireExtinguishingDemandResp struct {
	FireExtinguishingFlowTheory        string `json:"pmll,omitempty"`
	FireExtinguishingFlowActual        string `json:"pmsjll,omitempty"`
	FireExtinguishingUsageActual       string `json:"pmsjyl,omitempty"`
	FireExtinguishingUsageTheory       string `json:"pmyl,omitempty"`
	PrimaryLiquidUsageTheory           string `json:"pmyyl,omitempty"`
	PrimaryLiquidFlowTheory            string `json:"pmyyll,omitempty"`
	PrimaryLiquidUsageActual           string `json:"pmyysjl,omitempty"`
	PrimaryLiquidFlowActual            string `json:"pmyysjll,omitempty"`
	ConfigFireExtinguishingUsageTheory string `json:"ysl,omitempty"`
	ConfigFireExtinguishingFlowTheory  string `json:"ysll,omitempty"`
	ConfigFireExtinguishingUsageActual string `json:"yssjl,omitempty"`
	ConfigFireExtinguishingFlowActual  string `json:"yssjll,omitempty"`
	Msg                                string `json:"msg,omitempty"`
}

func (s *Service) FireExtinguishingDemand(ctx context.Context, request *accsimpb.FireExtinguishingDemandRequest) (*accsimpb.FireExtinguishingDemandResponse, error) {
	resp, err := http.Get(fmt.Sprintf( request.LiquidTankDiameter, request.SupplyStrength, request.SupplyTime, request.MixRatio))
	defer resp.Body.Close()

	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	all, err := io.ReadAll(resp.Body)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	var rep FireExtinguishingDemandResp
	err = json.Unmarshal(all, &rep)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	if rep.Msg == "error" {
		s.Logger.Error("", zap.Error(fmt.Errorf("can not calc")))
		return nil, status.Error(codes.Internal, "")
	}

	return &accsimpb.FireExtinguishingDemandResponse{
		FireExtinguishingFlowTheory:        s.toFloat32(rep.FireExtinguishingFlowTheory),
		FireExtinguishingFlowActual:        s.toFloat32(rep.FireExtinguishingFlowActual),
		PrimaryLiquidFlowTheory:            s.toFloat32(rep.PrimaryLiquidFlowTheory),
		PrimaryLiquidFlowActual:            s.toFloat32(rep.PrimaryLiquidFlowActual),
		PrimaryLiquidUsageTheory:           s.toFloat32(rep.PrimaryLiquidUsageTheory),
		PrimaryLiquidUsageActual:           s.toFloat32(rep.PrimaryLiquidUsageActual),
		FireExtinguishingUsageTheory:       s.toFloat32(rep.FireExtinguishingUsageTheory),
		FireExtinguishingUsageActual:       s.toFloat32(rep.FireExtinguishingUsageActual),
		ConfigFireExtinguishingFlowTheory:  s.toFloat32(rep.ConfigFireExtinguishingFlowTheory),
		ConfigFireExtinguishingFlowActual:  s.toFloat32(rep.ConfigFireExtinguishingFlowActual),
		ConfigFireExtinguishingUsageTheory: s.toFloat32(rep.ConfigFireExtinguishingUsageTheory),
		ConfigFireExtinguishingUsageActual: s.toFloat32(rep.ConfigFireExtinguishingUsageActual),
	}, nil
}

func (s *Service) toFloat32(a string) float32 {
	f, err := strconv.ParseFloat(a, 32)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
	}
	return float32(f)
}

func (s *Service) FireExtinguishingSave(ctx context.Context, request *accsimpb.FireExtinguishingSaveRequest) (*accsimpb.FireExtinguishingSaveResponse, error) {
	err := s.Dao.SaveFireExtinguishing(request)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	return &accsimpb.FireExtinguishingSaveResponse{}, nil
}

type CoolingWaterDemandResp struct {
	TankFlowTheory      string `json:"zhgysll,omitempty"`
	TankFlowActual      string `json:"zhgyssjll,omitempty"`
	NearTankFlowTheory  string `json:"ljgysll,omitempty"`
	NearTankFlowActual  string `json:"ljgyssjll,omitempty"`
	TankUsageTheory     string `json:"zhgysl,omitempty"`
	TankUsageActual     string `json:"zhgsjysl,omitempty"`
	NearTankUsageTheory string `json:"ljgysl,omitempty"`
	NearTankUsageActual string `json:"ljgsjysl,omitempty"`
	TotalUsageTheory    string `json:"zysl,omitempty"`
	TotalUsageActual    string `json:"sjzysl,omitempty"`
	Msg                 string `json:"msg,omitempty"`
}

func (s *Service) CoolingWaterDemand(ctx context.Context, request *accsimpb.CoolingWaterDemandRequest) (*accsimpb.CoolingWaterDemandResponse, error) {
	resp, err := http.Get(fmt.Sprintf(
		request.Num, request.NearNum, request.Diameter, request.NearDiameter,
		request.CoolingTime, request.NearCoolingTime, request.SupplyStrength, request.NearSupplyStrength, request.SingleFlow))
	defer resp.Body.Close()

	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	all, err := io.ReadAll(resp.Body)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	var rep CoolingWaterDemandResp
	err = json.Unmarshal(all, &rep)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	if rep.Msg == "error" {
		s.Logger.Error("", zap.Error(fmt.Errorf("can not calc")))
		return nil, status.Error(codes.Internal, "")
	}
	return &accsimpb.CoolingWaterDemandResponse{
		FlowTheory:       s.toFloat32(rep.TankFlowTheory),
		FlowActual:       s.toFloat32(rep.TankFlowActual),
		NearFlowTheory:   s.toFloat32(rep.NearTankFlowTheory),
		NearFlowActual:   s.toFloat32(rep.NearTankFlowActual),
		UsageTheory:      s.toFloat32(rep.TankUsageTheory),
		UsageActual:      s.toFloat32(rep.TankUsageActual),
		NearUsageTheory:  s.toFloat32(rep.NearTankUsageTheory),
		NearUsageActual:  s.toFloat32(rep.NearTankUsageActual),
		TotalUsageTheory: s.toFloat32(rep.TotalUsageTheory),
		TotalUsageActual: s.toFloat32(rep.TotalUsageActual),
	}, nil
}

func (s *Service) CoolingWaterSave(ctx context.Context, request *accsimpb.CoolingWaterSaveRequest) (*accsimpb.CoolingWaterSaveResponse, error) {
	err := s.Dao.SaveCoolingWaterRes(request)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	return &accsimpb.CoolingWaterSaveResponse{}, nil
}

type EquipmentPersonDemandResp struct {
	FireGuns struct {
		R1 int32 `json:"r1,omitempty"`
		R2 int32 `json:"r2,omitempty"`
		R3 int32 `json:"r3,omitempty"`
		R4 int32 `json:"r4,omitempty"`
	} `json:"xfqpsl"`
	CoolingTankGuns struct {
		R1 int32 `json:"r1,omitempty"`
		R2 int32 `json:"r2,omitempty"`
		R3 int32 `json:"r3,omitempty"`
		R4 int32 `json:"r4,omitempty"`
	} `json:"zhgqpsl"`
	CoolingNearTankGuns struct {
		R1 int32 `json:"r1,omitempty"`
		R2 int32 `json:"r2,omitempty"`
		R3 int32 `json:"r3,omitempty"`
		R4 int32 `json:"r4,omitempty"`
	} `json:"ljgqpsl"`
	FireTruckNum   int32 `json:"pmcsl,omitempty"`
	WaterTankerNum int32 `json:"sgcsl,omitempty"`
}

func (s *Service) EquipmentPersonDemand(ctx context.Context, request *accsimpb.EquipmentPersonDemandRequest) (*accsimpb.EquipmentPersonDemandResponse, error) {
	resp, err := http.Get(fmt.Sprintf(,
		request.FoamFlow, request.Foams[0].Type, request.Foams[1].Type, request.Foams[2].Type, request.Foams[3].Type, request.Foams[0].Num, request.Foams[1].Num, request.Foams[2].Num, request.Foams[3].Num,
		request.CoolingFlow, request.CoolingTanks[0].Type, request.CoolingTanks[1].Type, request.CoolingTanks[2].Type, request.CoolingTanks[3].Type, request.CoolingTanks[0].Num, request.CoolingTanks[1].Num, request.CoolingTanks[2].Num, request.CoolingTanks[3].Num,
		request.CoolingNearFlow, request.CoolingNearTanks[0].Type, request.CoolingNearTanks[1].Type, request.CoolingNearTanks[2].Type, request.CoolingNearTanks[3].Type, request.CoolingNearTanks[0].Num, request.CoolingNearTanks[1].Num, request.CoolingNearTanks[2].Num, request.CoolingNearTanks[3].Num,
		request.FoamTruckFlow, request.WaterTruckFlow,
	))
	defer resp.Body.Close()

	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	all, err := io.ReadAll(resp.Body)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	var rep EquipmentPersonDemandResp
	err = json.Unmarshal(all, &rep)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	res := accsimpb.EquipmentPersonDemandResponse{}

	foamNums := []int32{
		rep.FireGuns.R1,
		rep.FireGuns.R2,
		rep.FireGuns.R3,
		rep.FireGuns.R4,
	}
	coolingTankNums := []int32{
		rep.CoolingTankGuns.R1,
		rep.CoolingTankGuns.R2,
		rep.CoolingTankGuns.R3,
		rep.CoolingTankGuns.R4,
	}
	coolingNearTankNums := []int32{
		rep.CoolingNearTankGuns.R1,
		rep.CoolingNearTankGuns.R2,
		rep.CoolingNearTankGuns.R3,
		rep.CoolingNearTankGuns.R4,
	}

	var formsTotalNum int32
	for index, v := range request.Foams {
		record, err := s.Dao.GetEquipInfo(strconv.Itoa(int(v.Type)))
		if err != nil {
			s.Logger.Error("", zap.Error(err))
			return nil, status.Error(codes.Internal, "")
		}
		res.Eqs = append(res.Eqs, &accsimpb.Equipment{
			Type:         "泡沫枪、炮",
			ModelVersion: record.ModelVersion,
			OperatorNum:  record.OperatorNum,
			Num:          foamNums[index],
		})
		formsTotalNum += foamNums[index] * record.OperatorNum
	}
	res.Eqs = append(res.Eqs, &accsimpb.Equipment{
		Type:        "泡沫枪、炮操作总人数",
		OperatorNum: formsTotalNum,
	})

	var coolingTanksTotalNum int32
	for index, v := range request.CoolingTanks {
		record, err := s.Dao.GetEquipInfo(strconv.Itoa(int(v.Type)))
		if err != nil {
			s.Logger.Error("", zap.Error(err))
			return nil, status.Error(codes.Internal, "")
		}
		res.Eqs = append(res.Eqs, &accsimpb.Equipment{
			Type:         "冷却着火罐水枪、炮",
			ModelVersion: record.ModelVersion,
			OperatorNum:  record.OperatorNum,
			Num:          coolingTankNums[index],
		})
		coolingTanksTotalNum += coolingTankNums[index] * record.OperatorNum
	}

	res.Eqs = append(res.Eqs, &accsimpb.Equipment{
		Type:        "冷却着火罐水枪、炮操作总人数",
		OperatorNum: coolingTanksTotalNum,
	})

	var coolingNearTanksTotalNum int32
	for index, v := range request.CoolingNearTanks {
		record, err := s.Dao.GetEquipInfo(strconv.Itoa(int(v.Type)))
		if err != nil {
			s.Logger.Error("", zap.Error(err))
			return nil, status.Error(codes.Internal, "")
		}
		res.Eqs = append(res.Eqs, &accsimpb.Equipment{
			Type:         "冷却邻近罐水枪、炮",
			ModelVersion: record.ModelVersion,
			OperatorNum:  record.OperatorNum,
			Num:          coolingNearTankNums[index],
		})
		coolingNearTanksTotalNum += coolingNearTankNums[index] * record.OperatorNum
	}
	res.Eqs = append(res.Eqs, &accsimpb.Equipment{
		Type:        "冷却邻近罐水枪、炮操作总人数",
		OperatorNum: coolingNearTanksTotalNum,
	})

	foamTruck, err := s.Dao.GetTruck(strconv.Itoa(int(request.FoamTruckFlow)))
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	res.Eqs = append(res.Eqs, &accsimpb.Equipment{
		Type:         "泡沫消防车",
		ModelVersion: foamTruck.ModelVersion,
		OperatorNum:  foamTruck.OperatorNum,
		Num:          rep.FireTruckNum,
	})

	waterTruck, err := s.Dao.GetTruck(strconv.Itoa(int(request.WaterTruckFlow)))
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}
	res.Eqs = append(res.Eqs, &accsimpb.Equipment{
		Type:         "水罐消防车",
		ModelVersion: waterTruck.ModelVersion,
		OperatorNum:  waterTruck.OperatorNum,
		Num:          rep.WaterTankerNum,
	})

	totalNum := formsTotalNum + coolingNearTanksTotalNum + coolingTanksTotalNum +
		foamTruck.OperatorNum*rep.FireTruckNum + waterTruck.OperatorNum*rep.WaterTankerNum
	res.Eqs = append(res.Eqs, &accsimpb.Equipment{
		Type:        "所有操作总人数",
		OperatorNum: totalNum,
	})

	return &res, nil
}

func (s *Service) EquipmentRequire(ctx context.Context, request *accsimpb.EquipmentRequireRequest) (*accsimpb.EquipmentRequireResponse, error) {
	record, err := s.Dao.GetEquipmentRequire(request.SceneId)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.InvalidArgument, "请先对该场景计算灭火剂和消防冷却水预测")
		}
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	return &accsimpb.EquipmentRequireResponse{
		FoamFlow: record.FoamFlow,
		Flow:     record.Flow,
		NearFlow: record.NearFlow,
	}, nil
}

func (s *Service) MaterialBurningHeatGet(ctx context.Context, request *accsimpb.MaterialBurningHeatGetRequest) (*accsimpb.MaterialBurningHeatGetResponse, error) {
	records, err := s.Dao.GetMaterialBurningHeat()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	res := &accsimpb.MaterialBurningHeatGetResponse{}
	for _, v := range records {
		res.Materials = append(res.Materials, &accsimpb.Material{
			Name:        v.Name,
			BurningHeat: v.BurningHeat,
		})
	}
	return res, nil
}

func (s *Service) EnterpriseAreaGet(ctx context.Context, request *accsimpb.EnterpriseAreaGetRequest) (*accsimpb.EnterpriseAreaGetResponse, error) {
	records, err := s.Dao.GetAreasByEnterprise(request.EnterpriseId)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	res := &accsimpb.EnterpriseAreaGetResponse{}
	for _, v := range records {
		path := []*accsimpb.LngLat{}
		err := json.Unmarshal([]byte(v.Path), &path)
		if err != nil {
			s.Logger.Error("", zap.Error(err))
			return nil, status.Error(codes.Internal, "")
		}
		res.Points = append(res.Points, &accsimpb.Point{
			Name: v.Name,
			Path: path,
		})
	}

	return res, nil
}

func (s *Service) EnterprisesGet(ctx context.Context, request *accsimpb.EnterprisesGetRequest) (*accsimpb.EnterprisesGetResponse, error) {
	records, err := s.Dao.GetEnterprises()
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	res := &accsimpb.EnterprisesGetResponse{}
	for _, v := range records {
		res.Enterprises = append(res.Enterprises, &accsimpb.Enterprise{
			Id:   v.Id,
			Name: v.Name,
			Lng:  v.Lng,
			Lat:  v.Lat,
		})
	}

	return res, nil
}

func (s *Service) EnterpriseGet(ctx context.Context, request *accsimpb.EnterpriseGetRequest) (*accsimpb.EnterpriseGetResponse, error) {
	record, err := s.Dao.GetEnterprise(request.Id)
	if err != nil {
		s.Logger.Error("", zap.Error(err))
		return nil, status.Error(codes.Internal, "")
	}

	return &accsimpb.EnterpriseGetResponse{Enterprise: &accsimpb.Enterprise{
		Id:   record.Id,
		Name: record.Name,
		Lng:  record.Lng,
		Lat:  record.Lat,
	}}, nil
}
