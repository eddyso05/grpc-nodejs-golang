"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_1 = __importDefault(require("grpc"));
const user_grpc_pb_1 = require("./protos/protos/user_grpc_pb");
const user_1 = require("./user");
function GrpcServer() {
    const server = new grpc_1.default.Server();
    server.addService(user_grpc_pb_1.UserManagementService, { createNewUser: user_1.CreateNewUser });
    server.bind("127.0.0.1:50051", grpc_1.default.ServerCredentials.createInsecure());
    server.start();
    console.log("Server running on port 127.0.0.1:50051");
}
GrpcServer();
//# sourceMappingURL=index.js.map