// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v3.21.12
// source: dow.proto

package dowpb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	DowService_MaterialCoefficientGetChemicalActivityGrade_FullMethodName      = "/dow.DowService/MaterialCoefficientGetChemicalActivityGrade"
	DowService_MaterialCoefficient_FullMethodName                              = "/dow.DowService/MaterialCoefficient"
	DowService_MaterialCoefficientSaveUnknownMaterial_FullMethodName           = "/dow.DowService/MaterialCoefficientSaveUnknownMaterial"
	DowService_MaterialCoefficientGetKnownCoefficient_FullMethodName           = "/dow.DowService/MaterialCoefficientGetKnownCoefficient"
	DowService_MaterialCoefficientGetKnownNames_FullMethodName                 = "/dow.DowService/MaterialCoefficientGetKnownNames"
	DowService_MaterialCoefficientGetReactionCharacters_FullMethodName         = "/dow.DowService/MaterialCoefficientGetReactionCharacters"
	DowService_MaterialCoefficientGetTypes_FullMethodName                      = "/dow.DowService/MaterialCoefficientGetTypes"
	DowService_ProcessHazardCoefficientGet_FullMethodName                      = "/dow.DowService/ProcessHazardCoefficientGet"
	DowService_CompensationCoefficientGet_FullMethodName                       = "/dow.DowService/CompensationCoefficientGet"
	DowService_GeneralProcessHazardCoefficientCalc_FullMethodName              = "/dow.DowService/GeneralProcessHazardCoefficientCalc"
	DowService_SpecialProcessHazardCoefficientCalc_FullMethodName              = "/dow.DowService/SpecialProcessHazardCoefficientCalc"
	DowService_ProcessControlCompensationCoefficientCalc_FullMethodName        = "/dow.DowService/ProcessControlCompensationCoefficientCalc"
	DowService_MaterialIsolationCompensationCoefficientCalc_FullMethodName     = "/dow.DowService/MaterialIsolationCompensationCoefficientCalc"
	DowService_FirePreventionMeasureCompensationCoefficientCalc_FullMethodName = "/dow.DowService/FirePreventionMeasureCompensationCoefficientCalc"
	DowService_EvaluationResultsCalc_FullMethodName                            = "/dow.DowService/EvaluationResultsCalc"
)

// DowServiceClient is the client API for DowService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type DowServiceClient interface {
	// 化学活性等级
	MaterialCoefficientGetChemicalActivityGrade(ctx context.Context, in *MaterialCoefficientGetChemicalActivityGradeRequest, opts ...grpc.CallOption) (*MaterialCoefficientGetChemicalActivityGradeResponse, error)
	// 计算物质系数
	MaterialCoefficient(ctx context.Context, in *MaterialCoefficientRequest, opts ...grpc.CallOption) (*MaterialCoefficientResponse, error)
	// 保存未知物质
	MaterialCoefficientSaveUnknownMaterial(ctx context.Context, in *MaterialCoefficientSaveUnknownMaterialRequest, opts ...grpc.CallOption) (*MaterialCoefficientSaveUnknownMaterialResponse, error)
	// 根据名称查询已知物质系数
	MaterialCoefficientGetKnownCoefficient(ctx context.Context, in *MaterialCoefficientGetKnownCoefficientRequest, opts ...grpc.CallOption) (*MaterialCoefficientGetKnownCoefficientResponse, error)
	// 所有已知物质名称
	MaterialCoefficientGetKnownNames(ctx context.Context, in *MaterialCoefficientGetKnownNamesRequest, opts ...grpc.CallOption) (*MaterialCoefficientGetKnownNamesResponse, error)
	// 查询物质反应特性
	MaterialCoefficientGetReactionCharacters(ctx context.Context, in *MaterialCoefficientGetReactionCharactersRequest, opts ...grpc.CallOption) (*MaterialCoefficientGetReactionCharactersResponse, error)
	// 查询物质类型
	MaterialCoefficientGetTypes(ctx context.Context, in *MaterialCoefficientGetTypesRequest, opts ...grpc.CallOption) (*MaterialCoefficientGetTypesResponse, error)
	// 获取所有工艺危险系数
	ProcessHazardCoefficientGet(ctx context.Context, in *ProcessHazardCoefficientGetRequest, opts ...grpc.CallOption) (*ProcessHazardCoefficientGetResponse, error)
	// 获取所有补偿系数
	CompensationCoefficientGet(ctx context.Context, in *CompensationCoefficientGetRequest, opts ...grpc.CallOption) (*CompensationCoefficientGetResponse, error)
	// 计算一般工艺危险系数
	GeneralProcessHazardCoefficientCalc(ctx context.Context, in *GeneralProcessHazardCoefficientCalcRequest, opts ...grpc.CallOption) (*GeneralProcessHazardCoefficientCalcResponse, error)
	// 计算特殊工艺危险系数
	SpecialProcessHazardCoefficientCalc(ctx context.Context, in *SpecialProcessHazardCoefficientCalcRequest, opts ...grpc.CallOption) (*SpecialProcessHazardCoefficientCalcResponse, error)
	// 计算工艺控制补偿系数
	ProcessControlCompensationCoefficientCalc(ctx context.Context, in *ProcessControlCompensationCoefficientCalcRequest, opts ...grpc.CallOption) (*ProcessControlCompensationCoefficientCalcResponse, error)
	// 物质隔离补偿系数
	MaterialIsolationCompensationCoefficientCalc(ctx context.Context, in *MaterialIsolationCompensationCoefficientCalcRequest, opts ...grpc.CallOption) (*MaterialIsolationCompensationCoefficientCalcResponse, error)
	// 防火措施补偿系数
	FirePreventionMeasureCompensationCoefficientCalc(ctx context.Context, in *FirePreventionMeasureCompensationCoefficientCalcRequest, opts ...grpc.CallOption) (*FirePreventionMeasureCompensationCoefficientCalcResponse, error)
	// 评价结果
	EvaluationResultsCalc(ctx context.Context, in *EvaluationResultsCalcRequest, opts ...grpc.CallOption) (*EvaluationResultsCalcResponse, error)
}

type dowServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewDowServiceClient(cc grpc.ClientConnInterface) DowServiceClient {
	return &dowServiceClient{cc}
}

func (c *dowServiceClient) MaterialCoefficientGetChemicalActivityGrade(ctx context.Context, in *MaterialCoefficientGetChemicalActivityGradeRequest, opts ...grpc.CallOption) (*MaterialCoefficientGetChemicalActivityGradeResponse, error) {
	out := new(MaterialCoefficientGetChemicalActivityGradeResponse)
	err := c.cc.Invoke(ctx, DowService_MaterialCoefficientGetChemicalActivityGrade_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dowServiceClient) MaterialCoefficient(ctx context.Context, in *MaterialCoefficientRequest, opts ...grpc.CallOption) (*MaterialCoefficientResponse, error) {
	out := new(MaterialCoefficientResponse)
	err := c.cc.Invoke(ctx, DowService_MaterialCoefficient_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dowServiceClient) MaterialCoefficientSaveUnknownMaterial(ctx context.Context, in *MaterialCoefficientSaveUnknownMaterialRequest, opts ...grpc.CallOption) (*MaterialCoefficientSaveUnknownMaterialResponse, error) {
	out := new(MaterialCoefficientSaveUnknownMaterialResponse)
	err := c.cc.Invoke(ctx, DowService_MaterialCoefficientSaveUnknownMaterial_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dowServiceClient) MaterialCoefficientGetKnownCoefficient(ctx context.Context, in *MaterialCoefficientGetKnownCoefficientRequest, opts ...grpc.CallOption) (*MaterialCoefficientGetKnownCoefficientResponse, error) {
	out := new(MaterialCoefficientGetKnownCoefficientResponse)
	err := c.cc.Invoke(ctx, DowService_MaterialCoefficientGetKnownCoefficient_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dowServiceClient) MaterialCoefficientGetKnownNames(ctx context.Context, in *MaterialCoefficientGetKnownNamesRequest, opts ...grpc.CallOption) (*MaterialCoefficientGetKnownNamesResponse, error) {
	out := new(MaterialCoefficientGetKnownNamesResponse)
	err := c.cc.Invoke(ctx, DowService_MaterialCoefficientGetKnownNames_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dowServiceClient) MaterialCoefficientGetReactionCharacters(ctx context.Context, in *MaterialCoefficientGetReactionCharactersRequest, opts ...grpc.CallOption) (*MaterialCoefficientGetReactionCharactersResponse, error) {
	out := new(MaterialCoefficientGetReactionCharactersResponse)
	err := c.cc.Invoke(ctx, DowService_MaterialCoefficientGetReactionCharacters_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dowServiceClient) MaterialCoefficientGetTypes(ctx context.Context, in *MaterialCoefficientGetTypesRequest, opts ...grpc.CallOption) (*MaterialCoefficientGetTypesResponse, error) {
	out := new(MaterialCoefficientGetTypesResponse)
	err := c.cc.Invoke(ctx, DowService_MaterialCoefficientGetTypes_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dowServiceClient) ProcessHazardCoefficientGet(ctx context.Context, in *ProcessHazardCoefficientGetRequest, opts ...grpc.CallOption) (*ProcessHazardCoefficientGetResponse, error) {
	out := new(ProcessHazardCoefficientGetResponse)
	err := c.cc.Invoke(ctx, DowService_ProcessHazardCoefficientGet_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dowServiceClient) CompensationCoefficientGet(ctx context.Context, in *CompensationCoefficientGetRequest, opts ...grpc.CallOption) (*CompensationCoefficientGetResponse, error) {
	out := new(CompensationCoefficientGetResponse)
	err := c.cc.Invoke(ctx, DowService_CompensationCoefficientGet_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dowServiceClient) GeneralProcessHazardCoefficientCalc(ctx context.Context, in *GeneralProcessHazardCoefficientCalcRequest, opts ...grpc.CallOption) (*GeneralProcessHazardCoefficientCalcResponse, error) {
	out := new(GeneralProcessHazardCoefficientCalcResponse)
	err := c.cc.Invoke(ctx, DowService_GeneralProcessHazardCoefficientCalc_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dowServiceClient) SpecialProcessHazardCoefficientCalc(ctx context.Context, in *SpecialProcessHazardCoefficientCalcRequest, opts ...grpc.CallOption) (*SpecialProcessHazardCoefficientCalcResponse, error) {
	out := new(SpecialProcessHazardCoefficientCalcResponse)
	err := c.cc.Invoke(ctx, DowService_SpecialProcessHazardCoefficientCalc_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dowServiceClient) ProcessControlCompensationCoefficientCalc(ctx context.Context, in *ProcessControlCompensationCoefficientCalcRequest, opts ...grpc.CallOption) (*ProcessControlCompensationCoefficientCalcResponse, error) {
	out := new(ProcessControlCompensationCoefficientCalcResponse)
	err := c.cc.Invoke(ctx, DowService_ProcessControlCompensationCoefficientCalc_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dowServiceClient) MaterialIsolationCompensationCoefficientCalc(ctx context.Context, in *MaterialIsolationCompensationCoefficientCalcRequest, opts ...grpc.CallOption) (*MaterialIsolationCompensationCoefficientCalcResponse, error) {
	out := new(MaterialIsolationCompensationCoefficientCalcResponse)
	err := c.cc.Invoke(ctx, DowService_MaterialIsolationCompensationCoefficientCalc_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dowServiceClient) FirePreventionMeasureCompensationCoefficientCalc(ctx context.Context, in *FirePreventionMeasureCompensationCoefficientCalcRequest, opts ...grpc.CallOption) (*FirePreventionMeasureCompensationCoefficientCalcResponse, error) {
	out := new(FirePreventionMeasureCompensationCoefficientCalcResponse)
	err := c.cc.Invoke(ctx, DowService_FirePreventionMeasureCompensationCoefficientCalc_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dowServiceClient) EvaluationResultsCalc(ctx context.Context, in *EvaluationResultsCalcRequest, opts ...grpc.CallOption) (*EvaluationResultsCalcResponse, error) {
	out := new(EvaluationResultsCalcResponse)
	err := c.cc.Invoke(ctx, DowService_EvaluationResultsCalc_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// DowServiceServer is the server API for DowService service.
// All implementations must embed UnimplementedDowServiceServer
// for forward compatibility
type DowServiceServer interface {
	// 化学活性等级
	MaterialCoefficientGetChemicalActivityGrade(context.Context, *MaterialCoefficientGetChemicalActivityGradeRequest) (*MaterialCoefficientGetChemicalActivityGradeResponse, error)
	// 计算物质系数
	MaterialCoefficient(context.Context, *MaterialCoefficientRequest) (*MaterialCoefficientResponse, error)
	// 保存未知物质
	MaterialCoefficientSaveUnknownMaterial(context.Context, *MaterialCoefficientSaveUnknownMaterialRequest) (*MaterialCoefficientSaveUnknownMaterialResponse, error)
	// 根据名称查询已知物质系数
	MaterialCoefficientGetKnownCoefficient(context.Context, *MaterialCoefficientGetKnownCoefficientRequest) (*MaterialCoefficientGetKnownCoefficientResponse, error)
	// 所有已知物质名称
	MaterialCoefficientGetKnownNames(context.Context, *MaterialCoefficientGetKnownNamesRequest) (*MaterialCoefficientGetKnownNamesResponse, error)
	// 查询物质反应特性
	MaterialCoefficientGetReactionCharacters(context.Context, *MaterialCoefficientGetReactionCharactersRequest) (*MaterialCoefficientGetReactionCharactersResponse, error)
	// 查询物质类型
	MaterialCoefficientGetTypes(context.Context, *MaterialCoefficientGetTypesRequest) (*MaterialCoefficientGetTypesResponse, error)
	// 获取所有工艺危险系数
	ProcessHazardCoefficientGet(context.Context, *ProcessHazardCoefficientGetRequest) (*ProcessHazardCoefficientGetResponse, error)
	// 获取所有补偿系数
	CompensationCoefficientGet(context.Context, *CompensationCoefficientGetRequest) (*CompensationCoefficientGetResponse, error)
	// 计算一般工艺危险系数
	GeneralProcessHazardCoefficientCalc(context.Context, *GeneralProcessHazardCoefficientCalcRequest) (*GeneralProcessHazardCoefficientCalcResponse, error)
	// 计算特殊工艺危险系数
	SpecialProcessHazardCoefficientCalc(context.Context, *SpecialProcessHazardCoefficientCalcRequest) (*SpecialProcessHazardCoefficientCalcResponse, error)
	// 计算工艺控制补偿系数
	ProcessControlCompensationCoefficientCalc(context.Context, *ProcessControlCompensationCoefficientCalcRequest) (*ProcessControlCompensationCoefficientCalcResponse, error)
	// 物质隔离补偿系数
	MaterialIsolationCompensationCoefficientCalc(context.Context, *MaterialIsolationCompensationCoefficientCalcRequest) (*MaterialIsolationCompensationCoefficientCalcResponse, error)
	// 防火措施补偿系数
	FirePreventionMeasureCompensationCoefficientCalc(context.Context, *FirePreventionMeasureCompensationCoefficientCalcRequest) (*FirePreventionMeasureCompensationCoefficientCalcResponse, error)
	// 评价结果
	EvaluationResultsCalc(context.Context, *EvaluationResultsCalcRequest) (*EvaluationResultsCalcResponse, error)
	mustEmbedUnimplementedDowServiceServer()
}

// UnimplementedDowServiceServer must be embedded to have forward compatible implementations.
type UnimplementedDowServiceServer struct {
}

func (UnimplementedDowServiceServer) MaterialCoefficientGetChemicalActivityGrade(context.Context, *MaterialCoefficientGetChemicalActivityGradeRequest) (*MaterialCoefficientGetChemicalActivityGradeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method MaterialCoefficientGetChemicalActivityGrade not implemented")
}
func (UnimplementedDowServiceServer) MaterialCoefficient(context.Context, *MaterialCoefficientRequest) (*MaterialCoefficientResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method MaterialCoefficient not implemented")
}
func (UnimplementedDowServiceServer) MaterialCoefficientSaveUnknownMaterial(context.Context, *MaterialCoefficientSaveUnknownMaterialRequest) (*MaterialCoefficientSaveUnknownMaterialResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method MaterialCoefficientSaveUnknownMaterial not implemented")
}
func (UnimplementedDowServiceServer) MaterialCoefficientGetKnownCoefficient(context.Context, *MaterialCoefficientGetKnownCoefficientRequest) (*MaterialCoefficientGetKnownCoefficientResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method MaterialCoefficientGetKnownCoefficient not implemented")
}
func (UnimplementedDowServiceServer) MaterialCoefficientGetKnownNames(context.Context, *MaterialCoefficientGetKnownNamesRequest) (*MaterialCoefficientGetKnownNamesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method MaterialCoefficientGetKnownNames not implemented")
}
func (UnimplementedDowServiceServer) MaterialCoefficientGetReactionCharacters(context.Context, *MaterialCoefficientGetReactionCharactersRequest) (*MaterialCoefficientGetReactionCharactersResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method MaterialCoefficientGetReactionCharacters not implemented")
}
func (UnimplementedDowServiceServer) MaterialCoefficientGetTypes(context.Context, *MaterialCoefficientGetTypesRequest) (*MaterialCoefficientGetTypesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method MaterialCoefficientGetTypes not implemented")
}
func (UnimplementedDowServiceServer) ProcessHazardCoefficientGet(context.Context, *ProcessHazardCoefficientGetRequest) (*ProcessHazardCoefficientGetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ProcessHazardCoefficientGet not implemented")
}
func (UnimplementedDowServiceServer) CompensationCoefficientGet(context.Context, *CompensationCoefficientGetRequest) (*CompensationCoefficientGetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CompensationCoefficientGet not implemented")
}
func (UnimplementedDowServiceServer) GeneralProcessHazardCoefficientCalc(context.Context, *GeneralProcessHazardCoefficientCalcRequest) (*GeneralProcessHazardCoefficientCalcResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GeneralProcessHazardCoefficientCalc not implemented")
}
func (UnimplementedDowServiceServer) SpecialProcessHazardCoefficientCalc(context.Context, *SpecialProcessHazardCoefficientCalcRequest) (*SpecialProcessHazardCoefficientCalcResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SpecialProcessHazardCoefficientCalc not implemented")
}
func (UnimplementedDowServiceServer) ProcessControlCompensationCoefficientCalc(context.Context, *ProcessControlCompensationCoefficientCalcRequest) (*ProcessControlCompensationCoefficientCalcResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ProcessControlCompensationCoefficientCalc not implemented")
}
func (UnimplementedDowServiceServer) MaterialIsolationCompensationCoefficientCalc(context.Context, *MaterialIsolationCompensationCoefficientCalcRequest) (*MaterialIsolationCompensationCoefficientCalcResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method MaterialIsolationCompensationCoefficientCalc not implemented")
}
func (UnimplementedDowServiceServer) FirePreventionMeasureCompensationCoefficientCalc(context.Context, *FirePreventionMeasureCompensationCoefficientCalcRequest) (*FirePreventionMeasureCompensationCoefficientCalcResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FirePreventionMeasureCompensationCoefficientCalc not implemented")
}
func (UnimplementedDowServiceServer) EvaluationResultsCalc(context.Context, *EvaluationResultsCalcRequest) (*EvaluationResultsCalcResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method EvaluationResultsCalc not implemented")
}
func (UnimplementedDowServiceServer) mustEmbedUnimplementedDowServiceServer() {}

// UnsafeDowServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to DowServiceServer will
// result in compilation errors.
type UnsafeDowServiceServer interface {
	mustEmbedUnimplementedDowServiceServer()
}

func RegisterDowServiceServer(s grpc.ServiceRegistrar, srv DowServiceServer) {
	s.RegisterService(&DowService_ServiceDesc, srv)
}

func _DowService_MaterialCoefficientGetChemicalActivityGrade_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MaterialCoefficientGetChemicalActivityGradeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DowServiceServer).MaterialCoefficientGetChemicalActivityGrade(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: DowService_MaterialCoefficientGetChemicalActivityGrade_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DowServiceServer).MaterialCoefficientGetChemicalActivityGrade(ctx, req.(*MaterialCoefficientGetChemicalActivityGradeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DowService_MaterialCoefficient_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MaterialCoefficientRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DowServiceServer).MaterialCoefficient(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: DowService_MaterialCoefficient_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DowServiceServer).MaterialCoefficient(ctx, req.(*MaterialCoefficientRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DowService_MaterialCoefficientSaveUnknownMaterial_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MaterialCoefficientSaveUnknownMaterialRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DowServiceServer).MaterialCoefficientSaveUnknownMaterial(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: DowService_MaterialCoefficientSaveUnknownMaterial_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DowServiceServer).MaterialCoefficientSaveUnknownMaterial(ctx, req.(*MaterialCoefficientSaveUnknownMaterialRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DowService_MaterialCoefficientGetKnownCoefficient_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MaterialCoefficientGetKnownCoefficientRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DowServiceServer).MaterialCoefficientGetKnownCoefficient(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: DowService_MaterialCoefficientGetKnownCoefficient_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DowServiceServer).MaterialCoefficientGetKnownCoefficient(ctx, req.(*MaterialCoefficientGetKnownCoefficientRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DowService_MaterialCoefficientGetKnownNames_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MaterialCoefficientGetKnownNamesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DowServiceServer).MaterialCoefficientGetKnownNames(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: DowService_MaterialCoefficientGetKnownNames_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DowServiceServer).MaterialCoefficientGetKnownNames(ctx, req.(*MaterialCoefficientGetKnownNamesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DowService_MaterialCoefficientGetReactionCharacters_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MaterialCoefficientGetReactionCharactersRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DowServiceServer).MaterialCoefficientGetReactionCharacters(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: DowService_MaterialCoefficientGetReactionCharacters_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DowServiceServer).MaterialCoefficientGetReactionCharacters(ctx, req.(*MaterialCoefficientGetReactionCharactersRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DowService_MaterialCoefficientGetTypes_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MaterialCoefficientGetTypesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DowServiceServer).MaterialCoefficientGetTypes(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: DowService_MaterialCoefficientGetTypes_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DowServiceServer).MaterialCoefficientGetTypes(ctx, req.(*MaterialCoefficientGetTypesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DowService_ProcessHazardCoefficientGet_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ProcessHazardCoefficientGetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DowServiceServer).ProcessHazardCoefficientGet(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: DowService_ProcessHazardCoefficientGet_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DowServiceServer).ProcessHazardCoefficientGet(ctx, req.(*ProcessHazardCoefficientGetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DowService_CompensationCoefficientGet_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CompensationCoefficientGetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DowServiceServer).CompensationCoefficientGet(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: DowService_CompensationCoefficientGet_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DowServiceServer).CompensationCoefficientGet(ctx, req.(*CompensationCoefficientGetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DowService_GeneralProcessHazardCoefficientCalc_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GeneralProcessHazardCoefficientCalcRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DowServiceServer).GeneralProcessHazardCoefficientCalc(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: DowService_GeneralProcessHazardCoefficientCalc_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DowServiceServer).GeneralProcessHazardCoefficientCalc(ctx, req.(*GeneralProcessHazardCoefficientCalcRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DowService_SpecialProcessHazardCoefficientCalc_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SpecialProcessHazardCoefficientCalcRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DowServiceServer).SpecialProcessHazardCoefficientCalc(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: DowService_SpecialProcessHazardCoefficientCalc_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DowServiceServer).SpecialProcessHazardCoefficientCalc(ctx, req.(*SpecialProcessHazardCoefficientCalcRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DowService_ProcessControlCompensationCoefficientCalc_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ProcessControlCompensationCoefficientCalcRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DowServiceServer).ProcessControlCompensationCoefficientCalc(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: DowService_ProcessControlCompensationCoefficientCalc_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DowServiceServer).ProcessControlCompensationCoefficientCalc(ctx, req.(*ProcessControlCompensationCoefficientCalcRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DowService_MaterialIsolationCompensationCoefficientCalc_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MaterialIsolationCompensationCoefficientCalcRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DowServiceServer).MaterialIsolationCompensationCoefficientCalc(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: DowService_MaterialIsolationCompensationCoefficientCalc_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DowServiceServer).MaterialIsolationCompensationCoefficientCalc(ctx, req.(*MaterialIsolationCompensationCoefficientCalcRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DowService_FirePreventionMeasureCompensationCoefficientCalc_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FirePreventionMeasureCompensationCoefficientCalcRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DowServiceServer).FirePreventionMeasureCompensationCoefficientCalc(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: DowService_FirePreventionMeasureCompensationCoefficientCalc_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DowServiceServer).FirePreventionMeasureCompensationCoefficientCalc(ctx, req.(*FirePreventionMeasureCompensationCoefficientCalcRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DowService_EvaluationResultsCalc_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(EvaluationResultsCalcRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DowServiceServer).EvaluationResultsCalc(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: DowService_EvaluationResultsCalc_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DowServiceServer).EvaluationResultsCalc(ctx, req.(*EvaluationResultsCalcRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// DowService_ServiceDesc is the grpc.ServiceDesc for DowService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var DowService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "dow.DowService",
	HandlerType: (*DowServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "MaterialCoefficientGetChemicalActivityGrade",
			Handler:    _DowService_MaterialCoefficientGetChemicalActivityGrade_Handler,
		},
		{
			MethodName: "MaterialCoefficient",
			Handler:    _DowService_MaterialCoefficient_Handler,
		},
		{
			MethodName: "MaterialCoefficientSaveUnknownMaterial",
			Handler:    _DowService_MaterialCoefficientSaveUnknownMaterial_Handler,
		},
		{
			MethodName: "MaterialCoefficientGetKnownCoefficient",
			Handler:    _DowService_MaterialCoefficientGetKnownCoefficient_Handler,
		},
		{
			MethodName: "MaterialCoefficientGetKnownNames",
			Handler:    _DowService_MaterialCoefficientGetKnownNames_Handler,
		},
		{
			MethodName: "MaterialCoefficientGetReactionCharacters",
			Handler:    _DowService_MaterialCoefficientGetReactionCharacters_Handler,
		},
		{
			MethodName: "MaterialCoefficientGetTypes",
			Handler:    _DowService_MaterialCoefficientGetTypes_Handler,
		},
		{
			MethodName: "ProcessHazardCoefficientGet",
			Handler:    _DowService_ProcessHazardCoefficientGet_Handler,
		},
		{
			MethodName: "CompensationCoefficientGet",
			Handler:    _DowService_CompensationCoefficientGet_Handler,
		},
		{
			MethodName: "GeneralProcessHazardCoefficientCalc",
			Handler:    _DowService_GeneralProcessHazardCoefficientCalc_Handler,
		},
		{
			MethodName: "SpecialProcessHazardCoefficientCalc",
			Handler:    _DowService_SpecialProcessHazardCoefficientCalc_Handler,
		},
		{
			MethodName: "ProcessControlCompensationCoefficientCalc",
			Handler:    _DowService_ProcessControlCompensationCoefficientCalc_Handler,
		},
		{
			MethodName: "MaterialIsolationCompensationCoefficientCalc",
			Handler:    _DowService_MaterialIsolationCompensationCoefficientCalc_Handler,
		},
		{
			MethodName: "FirePreventionMeasureCompensationCoefficientCalc",
			Handler:    _DowService_FirePreventionMeasureCompensationCoefficientCalc_Handler,
		},
		{
			MethodName: "EvaluationResultsCalc",
			Handler:    _DowService_EvaluationResultsCalc_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "dow.proto",
}
