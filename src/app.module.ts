import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule } from '@nestjs/config';
// import * as Joi from '@hapi/joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // TypeOrmModule.forRootAsync({
    //   useFactory: () => ({
    //     type: 'postgres',
    //     host: '127.0.0.1',
    //     // host: '10.77.80.3',
    //     port: 1234,
    //     // port: 5432,
    //     username: 'postgres',
    //     password: '5APs4Edojig6fml7',
    //     database: 'postgres',
    //     autoLoadEntities: true,
    //     synchronize: true,
    //     // IMPORTANT: disable synchronize setting in Production
    //     // Automatically generates a SQL table from all classes
    //     // with an @Entity decorator and the metadata contained
    //   }),
    // }),
    // ConfigModule.forRoot({
    //   envFilePath: ['.env'],
    //   validationSchema: Joi.object({
    //     DATABASE_HOST: Joi.required(),
    //     DATABASE_PORT: Joi.number().default(5432),
    //     DATABASE_USERNAME: Joi.required(),
    //     DATABASE_PASSWORD: Joi.required(),
    //     DATABASE_NAME: Joi.required(),
    //   }),
    // }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
