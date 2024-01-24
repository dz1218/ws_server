import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'dgram';

@WebSocketGateway({
  cors: { orgin: '*' },
})
export class EventGatewayService {
  @SubscribeMessage('newMessage')
  handleMessage(@MessageBody() body: any, @ConnectedSocket() client: Socket) {
    // @ts-ignore
    client.join('aaa');
    // @ts-ignore
    client.to('aaa').emit('message', body);
    // @ts-ignore
    console.log(client.broadcast);
  }
}
