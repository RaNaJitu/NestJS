import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';
import { ItemSchema } from './item/schemas/item.schemas';
import { StudentModule } from './students/student.module';
//? this is for mysql connection
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemController } from './item/item.controller';
import { ItemService } from './item/item.service';

@Module({
  // imports: [ItemModule, MongooseModule.forRoot(config.mongoURI), StudentModule],
  imports: [MongooseModule.forFeature([{ name: 'item', schema: ItemSchema }])],
  controllers: [AppController, ItemController],
  providers: [AppService, ItemService],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
