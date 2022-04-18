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

        // host: '/cloudsql/cloudpayroll-dev:europe-west2:nest-test-db', // Connection (Doesn't deploy 2)
        // host: '10.77.80.3', // Private IP (Doesn't deploy 2)
        // host: '34.89.33.30', // Public IP (Works locally, Doesn't deploy)
        // host: '34.89.127.167', // DB2 works local
        host: '/cloudsql/cloudpayroll-dev:europe-west2:nest-test-db2',
        extra: {
          socketPath: '/cloudsql/cloudpayroll-dev:europe-west2:nest-test-db2',
        },
        database: 'postgres',
        // port: 5432,
        // host: '127.0.0.1', // Proxy
        // port: 1234, // Proxy
        // username: 'postgres',
        // password: '5APs4Edojig6fml7',
        // username: 'test_user_1',
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
        DATABASE_HOST: Joi.required(),
        DATABASE_PORT: Joi.number().default(5432),
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
