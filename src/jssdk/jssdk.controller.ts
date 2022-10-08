import { Body, Controller, Post } from '@nestjs/common';
import { JssdkService } from './providers';
import { JssdkDownloadBody } from './jssdk.interface';

@Controller('jssdk')
export class JssdkController {

  constructor(private jssdk: JssdkService) {}

  @Post('download')
  public async download(@Body() body: JssdkDownloadBody): Promise<any> {
    this.jssdk.download(body);
    return body;
  }

}
