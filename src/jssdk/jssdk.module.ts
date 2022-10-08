import { Module } from '@nestjs/common';
import { JssdkController } from './jssdk.controller';
import { JssdkService } from './providers';

@Module({
  imports: [],
  controllers: [JssdkController],
  providers: [JssdkService],
})
export class JssdkModule {}
