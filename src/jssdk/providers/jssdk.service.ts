import { Injectable } from '@nestjs/common';
import { JssdkDownloadBody } from '../jssdk.interface';
import { Logger } from '../../common';

@Injectable()
export class JssdkService {
  constructor(private log: Logger) {}

  download(body: JssdkDownloadBody) {
    console.log(body);
    this.log.log('我开始下载啦');
  }
}
