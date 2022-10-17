// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');

function serialize_usermgmt_NewUser(arg) {
  if (!(arg instanceof user_pb.NewUser)) {
    throw new Error('Expected argument of type usermgmt.NewUser');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_usermgmt_NewUser(buffer_arg) {
  return user_pb.NewUser.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_usermgmt_User(arg) {
  if (!(arg instanceof user_pb.User)) {
    throw new Error('Expected argument of type usermgmt.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_usermgmt_User(buffer_arg) {
  return user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserManagementService = exports.UserManagementService = {
  createNewUser: {
    path: '/usermgmt.UserManagement/CreateNewUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.NewUser,
    responseType: user_pb.User,
    requestSerialize: serialize_usermgmt_NewUser,
    requestDeserialize: deserialize_usermgmt_NewUser,
    responseSerialize: serialize_usermgmt_User,
    responseDeserialize: deserialize_usermgmt_User,
  },
};

exports.UserManagementClient = grpc.makeGenericClientConstructor(UserManagementService);
