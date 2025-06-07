import { MetricaService } from '../../service/metrica/metrica.service';
import {
  Body,
  Controller, Delete,
  Get,
  HttpStatus, Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { Metricas } from '../../model/metrica/metricas.entity';
import { PaginacaoDto } from '../../model/produto/dto/paginacao.dto';
import { CriarMetricaDto } from '../../model/metrica/dto/criar-metrica.dto';
import { EditarMetricasDto } from '../../model/metrica/dto/editar-metricas.dto';
import {IdDto} from "../../shared/id.dto";
import {MensagensMetricas} from "../../model/metrica/utils/metrica.mensagens";

@Controller()
export class MetricaController {
  constructor(private readonly metricaService: MetricaService) {}

  @Get()
  async getMetricas(
    @Query() paginacao: PaginacaoDto,
    @Res() response: Response,
  ): Promise<Response> {
    const { pagina, limite } = paginacao;
    const metricas: Metricas[] = await this.metricaService.getMetricas(
      pagina,
      limite,
    );
    return response.status(HttpStatus.OK).send(metricas);
  }

  @Post()
  async adicionarMetricas(
    @Body() criarMetricaDto: CriarMetricaDto,
    @Res() response: Response,
  ): Promise<Response> {
    const metricasCriadas: Metricas =
      await this.metricaService.criarMetricas(criarMetricaDto);
    return response.status(HttpStatus.CREATED).send(metricasCriadas);
  }

  @Put()
  async editarMetricas(
    @Body() editarMetricas: EditarMetricasDto,
    @Res() response: Response,
  ): Promise<Response> {
    const metricasEditadas: Metricas =
      await this.metricaService.editarMetricas(editarMetricas);
    return response.status(HttpStatus.OK).send(metricasEditadas);
  }

  @Delete('/:id')
  async deletarMetrica(
      @Param() id: IdDto,
      @Res() response: Response,
  ): Promise<Response> {
    await this.metricaService.deletarMetrica(id.id);
    return response.status(HttpStatus.OK).send(MensagensMetricas.METRICA_EXCLUIDA);
  }
}
