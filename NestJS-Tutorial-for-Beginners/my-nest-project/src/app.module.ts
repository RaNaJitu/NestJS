import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import nrdbmsConfig from './config/dbConnection/nrdbms';
import { ConfigService } from './config/dbConnection/config.service';
import { SharedModule } from './config/dbConnection/shared.module';

@Module({
  imports: [
    //MongooseModule.forRoot('mongodb://localhost:27017/DemoDB'),

    MongooseModule.forRootAsync({
      imports: [SharedModule],
      useFactory: async (configService: ConfigService) => (nrdbmsConfig),
      inject: [ConfigService],
    }),



    // MongooseModule.forRootAsync({
    //   imports: [SharedModule],
    //   useFactory: async (configService: ConfigService) => ({
    //     uri: configService.mongodbConfig(),
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useCreateIndex: true,
    //     useFindAndModify: false,
    //   }),
    //   inject: [ConfigService],
    // })



  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}