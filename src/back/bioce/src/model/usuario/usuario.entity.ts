import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NivelPermissaoEnum } from './enums/nivel-permissao.enum';
import { Produto } from '../produto/produto.entity';
import { Insumo } from '../insumo/insumo.entity';
import { DadosFinanceiros } from '../dados-financeiros.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'UserName' })
  username: string;

  @Column({ name: 'Email' })
  email: string;

  @Column({ name: 'Senha' })
  senha: string;

  @Column({ name: 'nivel_permissao' })
  nivelPermissao: NivelPermissaoEnum;

  @OneToMany(() => Produto, (produto: Produto) => produto.usuario)
  produtos: Produto[];

  @OneToMany(() => Insumo, (insumo: Insumo) => insumo.usuario)
  insumos: Insumo[];

  @OneToMany(
    () => DadosFinanceiros,
    (dadosFinanceiros: DadosFinanceiros) => dadosFinanceiros.usuario,
  )
  dadosFinanceiros: DadosFinanceiros[];
}
