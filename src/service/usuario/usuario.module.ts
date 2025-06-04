import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Usuario} from "../../model/usuario/usuario.entity";
import {UsuarioController} from "../../controller/usuario/usuario.controller";
import {UsuarioService} from "./usuario.service";
import {UsuarioRepository} from "../../repository/usuario/usuario.repository";

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    controllers: [UsuarioController],
    providers: [UsuarioService, UsuarioRepository],
    exports: [UsuarioService]
})
export class UsuarioModule {}