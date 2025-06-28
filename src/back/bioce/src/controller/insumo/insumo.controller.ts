import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Put,
    Query,
} from '@nestjs/common';

import { InsumoDto } from '../../model/insumo/dto/insumo.dto';
import { PaginacaoDto } from '../../model/insumo/dto/paginacao.dto';
import {InsumoService} from "../../service/insumo/insumo.service";
import {MensagensInsumos} from "../../model/insumo/utils/mensgens-insumos";

@Controller('insumo')
export class InsumoController {
    constructor(private readonly insumoService: InsumoService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    async exibirInsumo(@Query() paginacao: PaginacaoDto) {
        const insumos = await this.insumoService.exibirInsumo(paginacao);
        return {
            data: insumos,
            messagem: MensagensInsumos.INSUMO_ENCONTRADOS,
        };
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async buscarInsumo(@Param('id') id: number) {
        const insumo = await this.insumoService.buscarInsumo(id);
        return {
            data: insumo,
            mensagem: MensagensInsumos.INSUMO_ECONTRADO,
        };
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async cadastrarInsumo(@Body() insumo: InsumoDto) {
        const novoInsumo = await this.insumoService.cadastrarInsumo(insumo);
        return {
            data: novoInsumo,
            mensagem: MensagensInsumos.INSUMO_CADASTRADO,
        };
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async editarInsumo(@Param('id') id: number, @Body() insumo: InsumoDto) {
        const insumoAtulizado = await this.insumoService.editarInsumo(
            id,
            insumo,
        );
        return {
            data: insumoAtulizado,
            mensagem: MensagensInsumos.INSUMO_ATUALIZADO,
        };
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async deletarInsumo(@Param('id') id: number) {
        await this.insumoService.deletarInsumo(id);
        return {
            mesagem: MensagensInsumos.INSUMO_DELETADO,
        };
    }
}
