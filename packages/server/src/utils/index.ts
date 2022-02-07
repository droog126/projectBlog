const { encode, decode } = require("msgpack5")();
var jwt = require("jsonwebtoken");
import Data from "@/data";
const { client } = Data;

export const verifyUser = async ({ token, path }, socket) => {
  let isValid = false;
  let tokenData = { name: "", _time: 0 };
  try {
    tokenData = jwt.verify(token, "droog126");
    isValid = Date.now() - tokenData._time < 7879680000;
  } catch (e) {
    isValid = false;
  }

  if (!isValid) {
    const res = { code: 2, msg: "token无效!", path };
    socket.send(JSON.stringify(encode(res)));
  }
  const { name } = tokenData;
  const userKey = `user:${name}`;

  let isExist = (await client.exists(userKey)) ? true : false;
  if (!isExist) {
    const res = { code: 2, msg: "用户不存在!", path };
    socket.send(JSON.stringify(encode(res)));
    isValid = isExist;
  }

  return { isValid, userKey, name };
};

export const send = (socket, res) => {
  socket.send(JSON.stringify(encode(res)));
};
