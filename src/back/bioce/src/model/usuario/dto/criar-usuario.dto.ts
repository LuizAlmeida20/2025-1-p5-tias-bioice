import { NivelPermissaoEnum } from '../enums/nivel-permissao.enum';

export class CriarUsuarioDto {
  name: string;
  email: string;
  senha: string;
  nivelPermissao: NivelPermissaoEnum;
}
