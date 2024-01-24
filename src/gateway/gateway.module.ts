import { Module } from '@nestjs/common';
import { EventGatewayService } from './event.gateway.service';

@Module({
  providers: [EventGatewayService],
})
export class GatewayModule {}
