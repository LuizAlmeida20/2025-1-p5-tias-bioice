import {
  BadRequestException,
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsuarioRepository } from '../../repository/usuario/usuario.repository';
import { CriarUsuarioDto } from '../../model/usuario/dto/criar-usuario.dto';
import { Usuario } from '../../model/usuario/usuario.entity';
import * as bcrypt from 'bcrypt';
import { MensagensUsuario } from '../../model/usuario/utils/mensagens-usuario';
import {EditarUsuarioDto} from "../../model/usuario/dto/editar-usuario.dto";

@Injectable()
export class UsuarioService {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  async criarUsuario(criarUsuarioDto: CriarUsuarioDto): Promise<Usuario> {
    const usuario: Usuario =
      await this.instanciarUsuarioByDtoDeCriacao(criarUsuarioDto);
    const deveExistir: boolean = false;
    await this.validarExistenciaDoUsuario(usuario, deveExistir);
    return await this.usuarioRepository.saveUsuario(usuario);
  }

  async validarExistenciaDoUsuario(
    usuario: Partial<Usuario>,
    deveExistir: boolean,
  ): Promise<void> {
    const usuarioExiste: boolean =
      await this.usuarioRepository.verificarExistenciaDoUsuario(
        usuario,
      );
    if (usuarioExiste && !deveExistir) {
      throw new ConflictException({
        status: HttpStatus.CONFLICT,
        message: MensagensUsuario.USUARIO_JA_EXISTE,
      });
    }
    if (!usuarioExiste && deveExistir) {
      throw new NotFoundException({
        status: HttpStatus.NOT_FOUND,
        message: MensagensUsuario.USUARIO_NAO_EXISTE,
      });
    }
  }

  async editarUsuario(
    editarUsuarioDto: EditarUsuarioDto,
  ): Promise<Usuario> {
    const usuario: Usuario =
      await this.instanciarUsuarioByDtoDeCriacao(editarUsuarioDto);
    usuario.id = editarUsuarioDto.id;
    const deveExistir: boolean = true;
    await this.validarExistenciaDoUsuario(usuario, deveExistir);
    return this.usuarioRepository.saveUsuario(usuario);
  }

  async instanciarUsuarioByDtoDeCriacao(
    criarUsuarioDto: CriarUsuarioDto,
  ): Promise<Usuario> {
    const { name, senha, email, nivelPermissao } = criarUsuarioDto;
    const salt: string = await bcrypt.genSalt();
    return new Usuario({
      username: name,
      salt: salt,
      senha: await bcrypt.hash(senha, salt),
      email: email,
      nivelPermissao: nivelPermissao,
    });
  }
}
