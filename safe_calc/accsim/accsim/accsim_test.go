package accsim

import (
	"context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	accsimpb "safe/accsim/api/gen"
	"testing"
)

func TestService_JetFireCalc(t *testing.T) {
	dial, err := grpc.Dial("localhost:8086", []grpc.DialOption{
		grpc.WithTransportCredentials(insecure.NewCredentials()),
	}...)
	if err != nil {
		t.Fatal(err)
	}

	client := accsimpb.NewAccSimServiceClient(dial)
	calc, err := client.JetFireCalc(context.Background(), &accsimpb.JetFireCalcRequest{
		Aperture:             10,
		Pressure:             10,
		SpecificHeatCapacity: 10,
		MolecularWeight:      10,
		TargetDis:            10,
		WindSpeed:            30,
	})
	if err != nil {
		t.Fatal(err)
	}
	t.Log(calc)
}

func TestService_BallFireCalc(t *testing.T) {
	dial, err := grpc.Dial("localhost:8086", []grpc.DialOption{
		grpc.WithTransportCredentials(insecure.NewCredentials()),
	}...)
	if err != nil {
		t.Fatal(err)
	}

	client := accsimpb.NewAccSimServiceClient(dial)
	calc, err := client.BallFireCalc(context.Background(), &accsimpb.BallFireCalcRequest{
		Leakage:       10,
		TargetDis:     10,
		WindSpeed:     10,
		SceneName:     "1",
		WindDirection: "1",
	})
	if err != nil {
		t.Fatal(err)
	}
	t.Log(calc)
}

func TestService_EnterpriseAreaGet(t *testing.T) {
	dial, err := grpc.Dial("localhost:8086", []grpc.DialOption{
		grpc.WithTransportCredentials(insecure.NewCredentials()),
	}...)
	if err != nil {
		t.Fatal(err)
	}

	client := accsimpb.NewAccSimServiceClient(dial)
	get, err := client.EnterpriseAreaGet(context.Background(), &accsimpb.EnterpriseAreaGetRequest{EnterpriseId: 1})
	if err != nil {
		t.Fatal(err)
	}
	t.Log(get)
}
