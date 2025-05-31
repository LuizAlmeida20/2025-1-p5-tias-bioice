import {Injectable} from "@nestjs/common";
import {UsuarioRepository} from "../../repository/usuario/usuario.repository";

@Injectable()
export class UsuarioService {
    constructor(
        private readonly usuarioRepository: UsuarioRepository
    ) {}

}