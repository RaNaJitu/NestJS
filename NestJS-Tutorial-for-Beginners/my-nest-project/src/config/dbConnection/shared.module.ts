// import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';

import { ConfigService } from './index';

const providers = [ConfigService];

@Global()
@Module({
    providers,
    imports: [
        // HttpModule
    ],
    exports: [...providers, /*HttpModule */],
})
export class SharedModule {}
