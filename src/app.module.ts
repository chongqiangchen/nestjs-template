import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config';
import { CommonModule } from './common';
import { JssdkModule } from './jssdk';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    JssdkModule,
    CommonModule,
  ],
})
export class AppModule {}
