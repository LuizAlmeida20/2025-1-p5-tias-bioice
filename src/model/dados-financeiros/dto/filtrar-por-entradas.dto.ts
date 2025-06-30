import {IsBoolean, IsOptional} from "class-validator";
import {Transform, Type} from "class-transformer";

export class FiltrarPorEntradasDto {
    @IsOptional()
    @IsBoolean()
    @Transform(({ value }) => value === 'true')
    filtrarPorEntradas: boolean;
}