// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();

import { App, SHARED_COMPRESSOR } from '@/res/uWebSockets.js';
import * as msgpack from '@/res/msgpack5.min.js';
const { decode } = msgpack();

import { router } from '@/wsRouter';

const port = 9001;
const app = App();

app.ws('/*', {
  compression: SHARED_COMPRESSOR,
  maxPayloadLength: 16 * 1024 * 1024,
  idleTimeout: 10,
  /* Handlers */
  open: (ws) => {
    console.log('A WebSocket connected!');
  },
  message: (socket, buffer, isBinary) => {
    try {
      const data = decode(buffer);
      console.log('得到数据', data);
      router(data, socket);
      return data;
    } catch (error) {
      console.log('数据处理失败');
    }
  },
  drain: (ws) => {
    console.log('WebSocket backpressure: ' + ws.getBufferedAmount());
  },
  close: (ws, code, message) => {
    console.log('WebSocket closed');
  },
});

app.listen(port, (token) => {
  if (token) {
    console.log('Listening to port ' + port);
  } else {
    console.log('Failed to listen to port ' + port);
  }
});
