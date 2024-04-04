import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import * as process from 'process';
import  * as dotenv from 'dotenv'
dotenv.config()

const ormConfig: PostgresConnectionOptions = {
  type: process.env.DB_TYPE as 'postgres',
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/src/migrations/**/*{.ts,.js}'],
};

export default ormConfig;
