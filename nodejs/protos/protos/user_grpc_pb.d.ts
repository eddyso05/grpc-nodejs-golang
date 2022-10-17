// package: usermgmt
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_pb from "./user_pb";

interface IUserManagementService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createNewUser: IUserManagementService_ICreateNewUser;
}

interface IUserManagementService_ICreateNewUser extends grpc.MethodDefinition<user_pb.NewUser, user_pb.User> {
    path: "/usermgmt.UserManagement/CreateNewUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.NewUser>;
    requestDeserialize: grpc.deserialize<user_pb.NewUser>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}

export const UserManagementService: IUserManagementService;

export interface IUserManagementServer {
    createNewUser: grpc.handleUnaryCall<user_pb.NewUser, user_pb.User>;
}

export interface IUserManagementClient {
    createNewUser(request: user_pb.NewUser, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    createNewUser(request: user_pb.NewUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    createNewUser(request: user_pb.NewUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
}

export class UserManagementClient extends grpc.Client implements IUserManagementClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createNewUser(request: user_pb.NewUser, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public createNewUser(request: user_pb.NewUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public createNewUser(request: user_pb.NewUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
}
