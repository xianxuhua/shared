CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o development/linux/auth auth/main.go
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o development/linux/gustav gustav/main.go
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o development/linux/dow dow/main.go
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o development/linux/mond mond/main.go
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o development/linux/fireloss fireloss/main.go
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o development/linux/engineering engineering/main.go
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o development/linux/accsim accsim/main.go
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o development/linux/gateway gateway/main.go