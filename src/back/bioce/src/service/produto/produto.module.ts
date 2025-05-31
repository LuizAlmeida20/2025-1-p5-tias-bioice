import { Module } from '@nestjs/common';
import {ProdutoController} from "../../controller/produto/produto.controller";
import {ProdutoService} from "./produto.service";

@Module({
    controllers: [ProdutoController],
    providers: [ProdutoService]
})
export class ProdutoModule {}
