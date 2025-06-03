import {IsDefined, IsNumber, Max, Min} from 'class-validator';

export class PaginacaoDto {
    @IsDefined()
    @IsNumber()
    @Min(1)
    @Max(Number.MAX_SAFE_INTEGER)
    pagina: number;

    @IsDefined()
    @IsNumber()
    @Min(1)
    @Max(50)
    limite: number;
}
