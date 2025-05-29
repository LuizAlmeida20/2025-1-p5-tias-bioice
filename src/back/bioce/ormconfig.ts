import {ConnectionOptions, DataSource} from "typeorm";
import 'dotenv/config';

export const dbConnection: ConnectionOptions = {
    type: 'mysql',
    host: process.env.HOST,
    port: Number(process.env.PORT),
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    entities: [__dirname + '/src/model/**/*.entity{.ts,.js}'],
    synchronize: true,
};

const dataSource: DataSource = new DataSource(dbConnection);
export default dataSource;