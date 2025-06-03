import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CriarUsuarioDto } from '../../model/usuario/dto/criar-usuario.dto';
import { Usuario } from '../../model/usuario/usuario.entity';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { Response } from 'express';
import { IdDto } from '../../shared/id.dto';
import { EditarUsuarioDto } from '../../model/usuario/dto/editar-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async criarUsuario(
    @Body() criarUsuarioDto: CriarUsuarioDto,
    @Res() response: Response,
  ): Promise<Response> {
    const usuarioCriado: Usuario =
      await this.usuarioService.criarUsuario(criarUsuarioDto);
    return response.status(HttpStatus.CREATED).send(usuarioCriado);
  }

  @Put()
  async editarUsuario(
    @Body() editarUsuarioDto: EditarUsuarioDto,
    @Res() response: Response,
  ): Promise<Response> {
    const usuarioEditado: Usuario =
      await this.usuarioService.editarUsuario(editarUsuarioDto);
    return response.status(HttpStatus.OK).send(usuarioEditado);
  }
}
