import { Injectable } from '@nestjs/common';
import { SelectQueryBuilder } from 'typeorm';
import { PaginacaoDto } from '../../model/insumo/dto/paginacao.dto';
import {Insumo} from "../../model/insumo/insumo.entity";

@Injectable()
export class InsumoRepository {
    async salvarInsumo(insumo: Insumo) {
        return await Insumo.save(insumo);
    }

    async buscarInsumoPorId(id: number) {
        return await Insumo.findOne({
            where: { id: id },
            relations: ['usuario'],
        });
    }

    async paginacaoInsumos(paginacao: PaginacaoDto) {
        const { pagina, limite } = paginacao;

        return await Insumo.findAndCount({
            relations: ['usuario'],
            skip: (pagina - 1) * limite,
            take: limite,
        });
    }

    async verificarExistenciaDoInsumo(
        insumo: Partial<Insumo>,
    ): Promise<boolean> {
        const { id, nome, dataValidade, dataRegistro, lote, descricao } = insumo;

        const query: SelectQueryBuilder<Insumo> = Insumo.createQueryBuilder(
            'insumo',
        )
            .andWhere('insumo.nome = :nome', { nome })
            .andWhere('insumo.dataValidade = :dataValidade', { dataValidade })
            .andWhere('insumo.dataResgistro = :dataRegistro', { dataRegistro })
            .andWhere('insumo.lote = :lote', { lote })
            .andWhere('insumo.descricao = :descricao', { descricao });
        if (id) {
            query.andWhere('insumo.id != :id', { id });
        }
        return query.getExists();
    }

    async deletarInsumoPorId(id: number) {
        return await Insumo.delete(id);
    }
}
