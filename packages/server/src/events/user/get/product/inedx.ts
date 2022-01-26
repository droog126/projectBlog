const { encode, decode } = require("msgpack5")();

export default (data: any, socket: any) => {
  console.log("事件触发了", data, socket);
  const { path, token } = data;
  const sendData = { productName: "LastKingdom" };
  socket.send(JSON.stringify(encode({ path, data: sendData })));
};
