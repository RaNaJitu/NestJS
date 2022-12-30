import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import * as dotenv from 'dotenv';
import { TagEntity } from '../module/tag/Entities/tag.entity';
import UsersEntity from '../module/user/Entities/user.entity';
dotenv.config();

export const config = {
  test: {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'tagtestdb',
    entities: [UsersEntity, TagEntity],
    synchronize: true,
    migrations: [],
  },
  development: {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [UsersEntity, TagEntity],
    synchronize: true,
    migrations: [],
    // migrationsRun:true,
    // logging: true,
  },
};
const getRdbmsConfig = (env?: string) => {
  if (!env) {
    env = 'development';
  }

  const configuration: MysqlConnectionOptions = config[env];
  return configuration;
};

const rdbmsConfig = getRdbmsConfig(process.env.NODE_ENV);
export default rdbmsConfig;
