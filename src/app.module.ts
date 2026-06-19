import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GymModule } from './gym/gym.module';

@Module({
  imports: [
  MongooseModule.forRoot(
    'mongodb://shragvithops_db_user:shragviT123@ac-q2tpwgd-shard-00-00.x70i0vc.mongodb.net:27017,ac-q2tpwgd-shard-00-01.x70i0vc.mongodb.net:27017,ac-q2tpwgd-shard-00-02.x70i0vc.mongodb.net:27017/?ssl=true&replicaSet=atlas-c1k6bn-shard-0&authSource=admin&appName=Cluster0'
  ),
  GymModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
