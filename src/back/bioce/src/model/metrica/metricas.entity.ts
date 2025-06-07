import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'metricas' })
export class Metricas extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'Descarte' })
  descarte: string;

  @Column({ name: 'desperdicio' })
  desperdicio: string;

  @Column({ name: 'financeira' })
  financeira: string;
}
