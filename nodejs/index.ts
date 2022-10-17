import grpc from "grpc";
import { UserManagementService } from "./protos/protos/user_grpc_pb";
import { CreateNewUser } from "./user";

function GrpcServer() {
  const server = new grpc.Server();
  server.addService(UserManagementService, { createNewUser: CreateNewUser });

  server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure());
  server.start();
  console.log("Server running on port 127.0.0.1:50051");
}

GrpcServer();
