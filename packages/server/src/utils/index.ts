var jwt = require('jsonwebtoken');

import * as msgpack from '@/res/msgpack5.min.js';
const { decode, encode } = msgpack();

import Data from '@/data';
const { client } = Data;

export const verifyUser = async ({ token, path }, socket) => {
  let isValid = false;
  let tokenData = { name: '', _time: 0 };
  try {
    tokenData = jwt.verify(token, 'droog126');
    isValid = Date.now() - tokenData._time < 7879680000;
  } catch (e) {
    isValid = false;
  }

  if (!isValid) {
    const res = { code: 2, msg: 'token无效!', path };
    send(socket, res);
  }
  const { name } = tokenData;
  const userKey = `user:${name}`;

  let isExist = (await client.exists(userKey)) ? true : false;
  if (!isExist) {
    const res = { code: 2, msg: '用户不存在!', path };
    send(socket, res);
    isValid = isExist;
  }

  return { isValid, userKey, name, userName: name };
};

export const send = (socket, res) => {
  // socket.send('88' + encode(res));
  const buffer = encode(res);
  const hex = '88' + buffer.toString('hex');
  socket.send(hex);
};
