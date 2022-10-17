// package: usermgmt
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class NewUser extends jspb.Message { 
    getName(): string;
    setName(value: string): NewUser;
    getAge(): number;
    setAge(value: number): NewUser;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewUser.AsObject;
    static toObject(includeInstance: boolean, msg: NewUser): NewUser.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewUser, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewUser;
    static deserializeBinaryFromReader(message: NewUser, reader: jspb.BinaryReader): NewUser;
}

export namespace NewUser {
    export type AsObject = {
        name: string,
        age: number,
    }
}

export class User extends jspb.Message { 
    getName(): string;
    setName(value: string): User;
    getAge(): number;
    setAge(value: number): User;
    getId(): number;
    setId(value: number): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        name: string,
        age: number,
        id: number,
    }
}
