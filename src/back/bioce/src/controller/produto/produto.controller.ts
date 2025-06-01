import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {ProdutoService} from "../../service/produto/produto.service";
import {ProdutoDto} from "../../model/produto/produto.dto";

@Controller('produto')
export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService) {
    }

    @Get()
    async exibirProdutos(
        @Query('pagina') pagina: string,
        @Query('limite') limite: string) {

        const pag = parseInt(pagina) || 1;
        const quantidadeProdutos = parseInt(limite) || 10;

        return await this.produtoService.exibirProdutos(pag, quantidadeProdutos);
    }

    @Get(':id')
    async buscarProduto(@Param('id') id: number) {
        return await this.produtoService.buscarProduto(id);
    }

    @Post()
    async cadastrarProduto(@Body() produto: ProdutoDto) {
        return await this.produtoService.cadastrarProduto(produto);
    }

    @Put(':id')
    async editarProduto(@Param('id') id: number, @Body() produto: ProdutoDto) {
        return await this.produtoService.editarProduto(id, produto);
    }

    @Delete(':id')
    async deletarProduto(@Param('id') id: number) {
        return await this.produtoService.deletarProduto(id);
    }

}
