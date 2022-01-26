const { encode, decode } = require("msgpack5")();

export default (data: any, socket: any) => {
  console.log("事件触发了", data, socket);
  const { path, token } = data;
  socket.send(JSON.stringify(encode({ path })));
};
