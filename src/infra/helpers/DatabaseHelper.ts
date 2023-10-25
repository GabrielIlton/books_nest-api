import { SequelizeModule } from "@nestjs/sequelize";

import { environments } from "../../config/Environments";

import { models } from "../models";

export const DatabaseHelper = [
  SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: environments.DATABASE_PORT,
    username: environments.DATABASE_USER,
    password: environments.DATABASE_PASSWORD,
    database: environments.DATABASE_NAME,
    autoLoadModels: true,
    synchronize: true
  }),
  SequelizeModule.forFeature(models)
];
