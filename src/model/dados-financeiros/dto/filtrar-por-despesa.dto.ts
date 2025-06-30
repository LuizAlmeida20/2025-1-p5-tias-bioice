import {IsBoolean, IsOptional} from "class-validator";
import {Transform, Type} from "class-transformer";

export class FiltrarPorDespesaDto {
    @IsOptional()
    @IsBoolean()
    @Transform(({ value }) => value === 'true')
    filtrarPorDespesas: boolean;
}