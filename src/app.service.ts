import { Injectable } from '@nestjs/common';
// import { accessSecretVersion } from './utils/secretManager.util';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    // const secretValue = await accessSecretVersion();

    // return `${secretValue} : v0.8.0`;

    return 'Hey';
  }
}
