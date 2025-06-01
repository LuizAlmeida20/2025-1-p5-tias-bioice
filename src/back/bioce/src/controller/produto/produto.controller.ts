import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ProdutoService} from "../../service/produto/produto.service";
import {ProdutoDto} from "../../model/produto/produto.dto";

@Controller('produto')
export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService) {
    }

    @Get()
    async exibirProdutos() {
        return await this.produtoService.exibirProdutos();
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
