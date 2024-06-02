import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostgresConnectService } from './postgres-connect.service';

@Module({
  // (forRootAsync dae nam useFactory,jakyj pryjmae ConfigService.
  //    Tut my jakymosj 4ynom vplyvatymemo na configy.
  //   Wob vykorystaty configService potriben inject: [ConfigService])
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: PostgresConnectService /*...Configuretion from useClass...*/,
    }),
    /*V2 Config*/
    // TypeOrmModule.forRootAsync({
    //   useClass: PostgresConnectService,
    //   useFactory: (configService: ConfigService<Config>) => {
    //     const databaseConfig = configService.get<DatabaseConfig>('database');
    //     return {
    //       type: 'postgres',
    //       host: databaseConfig.host,
    //       port: databaseConfig.port,
    //       username: databaseConfig.user,
    //       password: databaseConfig.password,
    //       database: databaseConfig.dbName,
    //       entities: [
    //         AuthEntity,
    //         UserEntity,
    //       ] /*....rejestruem vsi sutnosti bazy danyx....*/,
    //       synchronize:
    //         true /*...jakwo nemaje migrations to mo*na zminyty na true....*/,
    //     });
    // inject: [ConfigService],
    // }),
    /*V3 Config*/
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5433,
    //   username: 'user',
    //   password: 'password',
    //   database: 'sept-2023',
    //   entities: [],
    //   synchronize: false,
    // }),
    //
    //
    // inject: [ConfigService],
    // }),
  ],
})
export class PostgresModule {}
