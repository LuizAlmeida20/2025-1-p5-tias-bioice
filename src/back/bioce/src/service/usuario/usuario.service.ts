import {
  BadRequestException,
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { UsuarioRepository } from '../../repository/usuario/usuario.repository';
import { CriarUsuarioDto } from '../../model/usuario/dto/criar-usuario.dto';
import { Usuario } from '../../model/usuario/usuario.entity';
import * as bcrypt from 'bcrypt';
import { ExceptionHandler } from '@nestjs/core/errors/exception-handler';
import { MensagensUsuario } from '../../model/usuario/utils/mensagens-usuario';

@Injectable()
export class UsuarioService {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  async criarUsuario(criarUsuarioDto: CriarUsuarioDto): Promise<Usuario> {
    const { name, senha, email, nivelPermissao } = criarUsuarioDto;
    const salt: string = await bcrypt.genSalt();
    const usuario: Usuario = new Usuario({
      username: name,
      salt: salt,
      senha: await bcrypt.hash(senha, salt),
      email: email,
      nivelPermissao: nivelPermissao,
    });
    await this.validarExistenciaDoUsuario(usuario);
    return await this.usuarioRepository.saveUsuario(usuario);
  }

  //TODO: evoluir para validação de edição do usuário também
  async validarExistenciaDoUsuario(usuario: Partial<Usuario>): Promise<void> {
    const usuarioExiste: boolean =
      await this.usuarioRepository.verificarExistenciaDoUsuario(usuario);
    if (usuarioExiste) {
      throw new ConflictException({
        status: HttpStatus.CONFLICT,
        message: MensagensUsuario.USUARIO_JA_EXISTE,
      });
    }
  }
}
