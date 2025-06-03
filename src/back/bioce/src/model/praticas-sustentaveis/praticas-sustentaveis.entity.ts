import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class PraticasSustentaveis extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'nome' })
  nome: string;

  @Column({ name: 'tarefa' })
  tarefa: string;
}
