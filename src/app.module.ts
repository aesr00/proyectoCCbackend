import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './persona/persona.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot('10.253.162.65:27017,10.253.162.50:27017,10.253.162.144:27017/?replicaSet=myReplicaSet'),
    PersonaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
