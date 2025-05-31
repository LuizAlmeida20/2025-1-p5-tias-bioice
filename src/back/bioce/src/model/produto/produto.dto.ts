import {IsNotEmpty} from "class-validator";

export class ProdutoDto {
    @IsNotEmpty()
    nome: string

    @IsNotEmpty()
    dataValidade: Date;

    @IsNotEmpty()
    dataFab: Date

    @IsNotEmpty()
    usuarioId: number;
}