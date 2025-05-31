import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PraticasSustentaveis {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'nome' })
  nome: string;

  @Column({ name: 'tarefa' })
  tarefa: string;
}
