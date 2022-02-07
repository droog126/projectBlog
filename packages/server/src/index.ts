import { App, SHARED_COMPRESSOR } from "./uWebSockets.js";
const { decode } = require("msgpack5")();
import { router } from "../src/wsRouter";

const port = 9001;
const app = App();

app.ws("/*", {
  compression: SHARED_COMPRESSOR,
  maxPayloadLength: 16 * 1024 * 1024,
  idleTimeout: 10,
  /* Handlers */
  open: (ws) => {
    console.log("A WebSocket connected!");
  },
  message: (socket, buffer, isBinary) => {
    try {
      const data = decode(buffer);
      console.log("得到数据", data);
      router(data, socket);
      return data;
    } catch (error) {
      console.log("数据处理失败");
    }
  },
  drain: (ws) => {
    console.log("WebSocket backpressure: " + ws.getBufferedAmount());
  },
  close: (ws, code, message) => {
    console.log("WebSocket closed");
  },
});

app.listen(port, (token) => {
  if (token) {
    console.log("Listening to port " + port);
  } else {
    console.log("Failed to listen to port " + port);
  }
});
