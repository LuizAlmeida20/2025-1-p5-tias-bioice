import { IsDefined, IsInt, IsNumber, Max, Min } from 'class-validator';
import { ConstantUtils } from './classes/constant-utils.class';

export class IdDto {
  @IsDefined()
  @Min(ConstantUtils.VALOR_MINIMO_PARA_ID)
  @Max(ConstantUtils.VALOR_MAXIMO_PARA_ID)
  id: number;
}
