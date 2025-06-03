import {BadRequestException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
import {ProdutoDto} from "../../model/produto/dto/produto.dto";
import {Produto} from "../../model/produto/produto.entity";
import {Usuario} from "../../model/usuario/usuario.entity";
import {MensagensProdutos} from "../../model/produto/utils/mensagens-produtos";

@Injectable()
export class ProdutoService {
    async cadastrarProduto(dto: ProdutoDto) {
        const usuarioId = await Usuario.findOne({where: {id: dto.usuarioId}});
        if (!usuarioId) {
            throw new BadRequestException('Usuário não encontrado!');
        }

        const novoProduto = new Produto();
        novoProduto.nome = dto.nome;
        novoProduto.dataValidade = dto.dataValidade;
        novoProduto.dataFab = dto.dataFab;
        novoProduto.usuario = usuarioId;

        return await Produto.save(novoProduto);
    }

    async exibirProdutos(pagina: number, limite: number) {

        const [produtos, total] = await Produto.findAndCount({
            relations: ['usuario'],
            skip: (pagina - 1) * limite,
            take: limite
        })

        return {
            data: produtos,
            total,
            pagina,
            ultimaPagina: Math.ceil(total / limite)
        }
    }

    async buscarProduto(id: number) {
        const produto = await Produto.findOne({where: {id: id}, relations: ['usuario']});

        if (!produto) {
            throw new NotFoundException({
                status: HttpStatus.NOT_FOUND,
                message: MensagensProdutos.PRODUTO_INEXISTENTE
            });
        }

        return produto;
    }

    async editarProduto(id: number, dto: ProdutoDto) {
        const produto = await Produto.findOne({where: {id: id}});
        if (!produto) {
            throw new NotFoundException({
                status: HttpStatus.NOT_FOUND,
                message: MensagensProdutos.PRODUTO_INEXISTENTE
            });
        }

        produto.nome = dto.nome;
        produto.dataValidade = dto.dataValidade;
        produto.dataFab = dto.dataFab;

        return await Produto.save(produto);
    }

    async deletarProduto(id: number) {
        const produto = await Produto.findOne({where: {id: id}});
        if (!produto) {
            throw new NotFoundException({
                status: HttpStatus.NOT_FOUND,
                message: MensagensProdutos.PRODUTO_INEXISTENTE
            });
        }

        return await Produto.delete(id);
    }
}
