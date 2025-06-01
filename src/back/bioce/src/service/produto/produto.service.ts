import {BadRequestException, Injectable} from '@nestjs/common';
import {ProdutoDto} from "../../model/produto/produto.dto";
import {Produto} from "../../model/produto/produto.entity";
import {Usuario} from "../../model/usuario/usuario.entity";

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
        limite = Math.min(limite, 30);

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
        return await Produto.findOne({
            where: {id: id},
            relations: ['usuario']
        })
    }

    async editarProduto(id: number, dto: ProdutoDto) {
        const produto = await Produto.findOne({where: {id: id}});
        if (!produto) {
            throw new BadRequestException("Produto não encontrado!");
        }

        produto.nome = dto.nome;
        produto.dataValidade = dto.dataValidade;
        produto.dataFab = dto.dataFab;

        return await Produto.save(produto);
    }

    async deletarProduto(id: number) {
        return await Produto.delete(id);
    }
}
