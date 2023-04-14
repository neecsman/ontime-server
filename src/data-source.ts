import "reflect-metadata";
import { DataSource } from "typeorm";
import { Users, Tokens, Orders, PaymentsHistory } from "./entity";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "ontime",
  password: "Ontime_01",
  database: "ontime",
  synchronize: true,
  logging: false,
  entities: [Users, Tokens, Orders, PaymentsHistory],
  subscribers: [],
  migrations: [],
});
