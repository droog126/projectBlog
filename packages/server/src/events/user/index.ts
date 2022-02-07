import Data from "@/data";
const { encode, decode } = require("msgpack5")();
const { setData, getData, client } = Data;
var jwt = require("jsonwebtoken");

export const UserCreate = async (req: any, socket: any) => {
  const { data, path } = req;
  const { name, psw } = data;
  const _key = `user:${name}`;

  // 检测用户是否存在
  const isExist = await client.EXISTS(_key);
  if (isExist) {
    const res = { code: 1, msg: "用户名重复了", path };
    socket.send(JSON.stringify(encode(res)));
    return;
  }

  const token = jwt.sign({ name: name, _time: Date.now() }, "droog126");
  try {
    const userData = {
      name,
      psw,
      token,
      articles: [],
      project: [],
    };
    await client.json.set(_key, ".", userData);

    delete userData.psw;
    const res = { code: 0, msg: "创建成功了", path, data: userData };
    socket.send(JSON.stringify(encode(res)));
  } catch (e: any) {
    console.log(e, "hello", e.message);
  }
};

export const UserLogin = async (req: any, socket: any) => {
  const { data, path } = req;
  const { name, psw } = data;
  const _key = `user:${name}`;

  // 检测用户是否存在
  const isExist = await client.EXISTS(_key);
  if (!isExist) {
    const res = { code: 1, msg: "用户还没有注册，你点创建吧...", path };
    socket.send(JSON.stringify(encode(res)));
    return;
  }

  const userData: any = await client.json.get(_key);
  if (userData.psw === psw) {
    delete userData.psw;
    // 更新token
    let deToken = { _time: 0 };
    try {
      deToken = jwt.verify(userData.token, "droog126") || 0;
    } catch (e) {
      console.log("登录有bug", e);
    }
    if (Date.now() - deToken._time < 7879680000) {
      const res = {
        code: 0,
        msg: "登入成功!",
        path,
        token: userData.token,
        data: userData,
      };

      delete userData.psw;
      socket.send(JSON.stringify(encode(res)));
    } else {
      delete userData.psw;
      const newToken = jwt.sign({ name: name, _time: Date.now() }, "droog126");
      client.json.set(_key, ".token", newToken);

      const res = {
        code: 0,
        msg: "登入成功!",
        path,
        token: newToken,
        data: userData,
      };

      delete userData.psw;
      socket.send(JSON.stringify(encode(res)));
    }

    return;
  } else {
    const res = { code: 1, msg: "密码错误...", path };
    socket.send(JSON.stringify(encode(res)));
    return;
  }
};

export const UserAutoLogin = async (req: any, socket: any) => {
  const { token, path } = req;
  let deToken;
  let isValid = true;
  let isExist = 1;

  try {
    deToken = jwt.verify(token, "droog126");
    isValid = Date.now() - deToken._time < 7879680000;
  } catch (e) {
    isValid = false;
  }

  if (isValid) {
    const { name } = deToken;
    const _key = `user:${name}`;
    isExist = await client.exists(_key);
    if (isExist) {
      const userData: any = await client.json.get(_key);

      delete userData.psw;
      const res = { code: 0, msg: "自动登入成功!", path, data: userData };
      socket.send(JSON.stringify(encode(res)));
      return;
    } else {
      const res = { code: 2, msg: "用户不存在!", path };
      socket.send(JSON.stringify(encode(res)));
      return;
    }
  } else {
    const res = { code: 2, msg: "token无效!", path };
    socket.send(JSON.stringify(encode(res)));
    return;
  }
};
