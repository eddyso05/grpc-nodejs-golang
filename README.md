# grpc-nodejs-golang

# introduction

This is a simple GRPC project for nodeJs Server -> Golang Client intercommunicate

# Download this project

1. git clone https://github.com/eddyso05/grpc-nodejs-golang.git

# run NodeJS Server

1. open new terminal & getting into nodeJS directory - `cd nodejs`
2. install node_modules & start the server - `yarn install & yarn start`

if want to generate protobuf file just direct `yarn build`

# run Golang Client

1. Open new Terminal & getting into golang directory - `cd golang`
2. `go run main.go` - need to initialise nodeJS server first

if want to generate protobuf just run `sh protos.sh`
