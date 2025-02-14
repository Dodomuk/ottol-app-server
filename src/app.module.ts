import { Module } from '@nestjs/common';
import { LottoModule } from './lotto/lotto.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataBaseConfigModule } from './db/config/config.module';
import { DataBaseConfigService } from './db/config/config.service';
import { UtilsModule } from './utils/utils.module';


@Module({
  imports: [
    LottoModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ DataBaseConfigModule ],
      useClass: DataBaseConfigService,
      inject: [ DataBaseConfigService ]
    }),
    UtilsModule
  ],
})
export class AppModule {} 
