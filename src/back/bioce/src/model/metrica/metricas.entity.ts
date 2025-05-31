import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class PraticasSustentaveis extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'Descarte' })
  descarte: string;

  @Column({ name: 'desperdicio' })
  desperdicio: string;

  @Column({ name: 'financeira' })
  financeira: string;
}
