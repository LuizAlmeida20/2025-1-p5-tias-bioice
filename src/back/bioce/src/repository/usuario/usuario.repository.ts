import { Injectable } from '@nestjs/common';
import { Usuario } from '../../model/usuario/usuario.entity';
import { SelectQueryBuilder } from 'typeorm';

@Injectable()
export class UsuarioRepository {
  constructor() {}

  async saveUsuario(usuario: Usuario): Promise<Usuario> {
    return await Usuario.save(usuario);
  }

  async verificarExistenciaDoUsuario(
    usuario: Partial<Usuario>,
  ): Promise<boolean> {
    const { username, email } = usuario;
    return Usuario.createQueryBuilder('usuario')
      .orWhere('usuario.username = :username', { username })
      .orWhere('usuario.email = :email', { email })
      .getExists();
  }
}
