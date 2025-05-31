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
    async cadastrarProduto(@Body() dto: ProdutoDto) {
        return await this.produtoService.cadastrarProduto(dto);
    }

    @Put(':id')
    async editarProduto(@Param('id') id: number, @Body() dto: ProdutoDto) {
        return await this.produtoService.editarProduto(id, dto);
    }

    @Delete(':id')
    async deletarProduto(@Param('id') id: number) {
        return await this.produtoService.deletarProduto(id);
    }

}
