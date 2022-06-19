import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    //importing mongoose module
    MongooseModule.forRoot('mongodb://localhost:27017/nest-database'),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
