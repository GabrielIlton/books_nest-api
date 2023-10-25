import { ConfigModule } from "@nestjs/config"

ConfigModule.forRoot()

export const environments = {
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_PORT: Number(process.env.PORT),
  DATABASE_USER: process.env.DATABASE_USER
}