import { DynamicModule, Module } from '@nestjs/common';
import { dbConnection } from '../ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './service/usuario/usuario.module';
import { ProdutoModule } from './service/produto/produto.module';
import { PraticasSustentaveisModule } from './service/praticas-sustentaveis/praticas-sustentaveis.module';
import { MetricaService } from './service/metrica/metrica.service';
import { MetricaModule } from './service/metrica/metrica.module';

export function DatabaseOrmModule(): DynamicModule {
  return TypeOrmModule.forRoot(dbConnection);
}

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseOrmModule(),
    UsuarioModule,
    ProdutoModule,
    PraticasSustentaveisModule,
    MetricaModule,
  ],
  providers: [],
})
export class AppModule {}
