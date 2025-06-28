import {IsDateString, IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class InsumoDto {
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsDateString()
    @IsNotEmpty()
    dataValidade: Date;

    @IsDateString()
    @IsNotEmpty()
    dataRegistro: Date;

    @IsString()
    @IsNotEmpty()
    lote: string;

    @IsString()
    @IsNotEmpty()
    descriacao: string;

    @IsNotEmpty()
    @IsNumber()
    usuarioId: number;
}
