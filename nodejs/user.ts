import { User } from "./protos/protos/user_pb";

function CreateNewUser(call, callback) {
  const response = new User();
  const age = call.request.getAge();
  response.setAge(age);
  response.setName("Hello");
  response.setId(12);

  callback(null, response);
}

export { CreateNewUser };
