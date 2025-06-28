import {Module} from '@nestjs/common';
import {InsumoController} from "../../controller/insumo/insumo.controller";
import {InsumoService} from "../../service/insumo/insumo.service";
import {InsumoRepository} from "../../repository/insumo/insumo.repository";

@Module({
    controllers: [InsumoController],
    providers: [InsumoService, InsumoRepository],
})
export class InsumoModule {
}
