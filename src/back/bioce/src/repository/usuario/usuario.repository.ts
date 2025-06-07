import { Injectable } from '@nestjs/common';
import { Usuario } from '../../model/usuario/usuario.entity';
import { SelectQueryBuilder } from 'typeorm';
import {Count} from "../../shared/interfaces/count.interface";

@Injectable()
export class UsuarioRepository {
  constructor() {}

  async saveUsuario(usuario: Usuario): Promise<Usuario> {
    return await Usuario.save(usuario);
  }

  async verificarExistenciaDoUsuario(
    usuario: Partial<Usuario>,
  ): Promise<boolean> {
    const { id, username, email } = usuario;
    const query: SelectQueryBuilder<Usuario> = Usuario.createQueryBuilder(
      'usuario',
    );
    if (username) {
      query.andWhere('usuario.username = :username', { username })
    }
    if (email) {
      query.andWhere('usuario.email = :email', { email });
    }
    if (id) {
      query.andWhere('usuario.id = :id', { id });
    }
    return query.getExists();
  }

  async findOneById(id: number): Promise<Usuario | null> {
    return await Usuario.findOneBy({ id: id });
  }

  async getUserById(id: number): Promise<Usuario | null> {
    return await Usuario.findOne({ where: { id: id } });
  }

  async performarExclusaoLogicaDeUsuario(id: number): Promise<void> {
    const usuario: Usuario = new Usuario({ id: id, isExcluido: true});
    await this.saveUsuario(usuario);
  }
}

