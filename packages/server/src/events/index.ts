const { encode, decode } = require("msgpack5")();

export const Connect = (data: any, socket: any) => {
  const { path } = data;
  socket.send(JSON.stringify(encode({ path })));
  console.log("确认连接成功。。");
};
