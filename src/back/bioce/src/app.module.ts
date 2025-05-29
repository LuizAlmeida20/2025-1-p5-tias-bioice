import { DynamicModule, Module } from '@nestjs/common';
import { dbConnection } from '../ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

export function DatabaseOrmModule(): DynamicModule {
  return TypeOrmModule.forRoot(dbConnection);
}

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseOrmModule()],
  providers: [],
})
export class AppModule {}