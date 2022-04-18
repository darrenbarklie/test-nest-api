import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // Default with dotenv

    // TypeOrmModule.forRootAsync({
    //   useFactory: () => ({
    //     type: 'postgres',
    //     host: process.env.DATABASE_HOST,
    //     port: +process.env.DATABASE_PORT,
    //     username: process.env.DATABASE_USER,
    //     password: process.env.DATABASE_PASSWORD,
    //     database: process.env.DATABASE_NAME,
    //     autoLoadEntities: true,
    //     synchronize: true,
    //     // IMPORTANT: disable synchronize setting in Production
    //     // Automatically generates a SQL table from all classes
    //     // with an @Entity decorator and the metadata contained
    //   }),
    // }),

    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',

        host: '127.0.0.1', // Proxy
        port: 1234, // Proxy

        // host: '/cloudsql/cloudpayroll-dev:europe-west2:nest-test-db2',

        extra: {
          socketPath: '/cloudsql/cloudpayroll-dev:europe-west2:nest-test-db2',
        },

        database: 'postgres',
        username: 'postgres',
        password: '109876543210',
        autoLoadEntities: true,
        synchronize: true,
        // IMPORTANT: disable synchronize setting in Production
        // Automatically generates a SQL table from all classes
        // with an @Entity decorator and the metadata contained
        entities: ['dist/**/*.entity.js'],
      }),
    }),

    ConfigModule.forRoot({
      envFilePath: ['.env'],
      validationSchema: Joi.object({
        // DATABASE_HOST: Joi.required(),
        // DATABASE_PORT: Joi.number().default(5432),
        DATABASE_USER: Joi.required(),
        DATABASE_PASSWORD: Joi.required(),
        DATABASE_NAME: Joi.required(),
      }),
    }),

    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
