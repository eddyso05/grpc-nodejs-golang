"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNewUser = void 0;
const user_pb_1 = require("./protos/protos/user_pb");
function CreateNewUser(call, callback) {
    const response = new user_pb_1.User();
    const age = call.request.getAge();
    response.setAge(age);
    response.setName("Hello");
    response.setId(12);
    callback(null, response);
}
exports.CreateNewUser = CreateNewUser;
//# sourceMappingURL=user.js.map