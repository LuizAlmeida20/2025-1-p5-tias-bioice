import {
    BadRequestException,
    ConflictException,
    HttpStatus,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { Usuario } from '../../model/usuario/usuario.entity';
import { PaginacaoDto } from '../../model/insumo/dto/paginacao.dto';
import {InsumoRepository} from "../../repository/insumo/insumo.repository";
import {Insumo} from "../../model/insumo/insumo.entity";
import {InsumoDto} from "../../model/insumo/dto/insumo.dto";
import {MensagensInsumos} from "../../model/insumo/utils/mensgens-insumos";

@Injectable()
export class InsumoService {
    constructor(private readonly insumoService: InsumoRepository) {}

    async cadastrarInsumo(dto: InsumoDto): Promise<Insumo> {
        const usuarioId = await Usuario.findOne({ where: { id: dto.usuarioId } });
        if (!usuarioId) {
            throw new BadRequestException('Usuário não encontrado!');
        }

        const deveExistir: boolean = false;

        const novoInsumo = new Insumo();
        novoInsumo.nome = dto.nome;
        novoInsumo.dataValidade = dto.dataValidade;
        novoInsumo.dataRegistro = dto.dataRegistro;
        novoInsumo.lote = dto.lote;
        novoInsumo.descricao = dto.descricao;

        novoInsumo.usuario = usuarioId;

        await this.validarExistenciaDoInsumo(novoInsumo, deveExistir);

        return await this.insumoService.salvarInsumo(novoInsumo);
    }

    async validarExistenciaDoInsumo(
        insumo: Partial<Insumo>,
        deveExistir: boolean,
    ): Promise<void> {
        const insumoExiste: boolean =
            await this.insumoService.verificarExistenciaDoInsumo(insumo);
        if (insumoExiste && !deveExistir) {
            throw new ConflictException({
                status: HttpStatus.CONFLICT,
                message: MensagensInsumos.INSUMO_JA_EXISTE,
            });
        }
        if (!insumoExiste && deveExistir) {
            throw new NotFoundException({
                status: HttpStatus.NOT_FOUND,
                message: MensagensInsumos.INSUMO_INEXISTENTE,
            });
        }
    }

    async exibirInsumo(paginacao: PaginacaoDto) {
        const { pagina, limite } = paginacao;
        const [produtos, total] =
            await this.insumoService.paginacaoInsumos(paginacao);

        return {
            data: produtos,
            total,
            pagina,
            ultimaPagina: Math.ceil(total / limite),
        };
    }

    async buscarInsumo(id: number): Promise<Insumo> {
        const insumo = await this.insumoService.buscarInsumoPorId(id);

        if (!insumo) {
            throw new NotFoundException({
                status: HttpStatus.NOT_FOUND,
                message: MensagensInsumos.INSUMO_INEXISTENTE,
            });
        }

        return insumo;
    }

    async editarInsumo(id: number, dto: InsumoDto): Promise<Insumo> {
        const insumo = await this.insumoService.buscarInsumoPorId(id);
        if (!insumo) {
            throw new NotFoundException({
                status: HttpStatus.NOT_FOUND,
                message: MensagensInsumos.INSUMO_INEXISTENTE,
            });
        }

        insumo.nome = dto.nome;
        insumo.dataValidade = dto.dataValidade;
        insumo.dataRegistro = dto.dataRegistro;
        insumo.lote = dto.lote;
        insumo.descricao = dto.descricao;

        return await this.insumoService.salvarInsumo(insumo);
    }

    async deletarInsumo(id: number) {
        const insumo = await this.insumoService.buscarInsumoPorId(id);
        if (!insumo) {
            throw new NotFoundException({
                status: HttpStatus.NOT_FOUND,
                message: MensagensInsumos.INSUMO_INEXISTENTE,
            });
        }

        return await this.insumoService.deletarInsumoPorId(id);
    }
}
