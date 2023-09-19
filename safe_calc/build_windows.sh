CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -o development/windows/auth_s.exe auth/main.go
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -o development/windows/gustav_s.exe gustav/main.go
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -o development/windows/dow_s.exe dow/main.go
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -o development/windows/mond_s.exe mond/main.go
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -o development/windows/fireloss_s.exe fireloss/main.go
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -o development/windows/engineering_s.exe engineering/main.go
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -o development/windows/accsim_s.exe accsim/main.go
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -o development/windows/gateway.exe gateway/main.go