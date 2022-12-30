import { MongooseModuleOptions } from "@nestjs/mongoose";
import * as dotenv from "dotenv";
// import nrdbmsConfig from "../../config/nrdbms";
const nrdbmsConfig = {
  uri: "mongodb://localhost:27017/DemoDB",
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

export class ConfigService {
  constructor() {
    const nodeEnv = this.nodeEnv;
    dotenv.config({
      path: `.env`,
    });
  }

  get isDevEnv(): boolean {
    return this.nodeEnv === "development";
  }

  get isProdEnv(): boolean {
    return this.nodeEnv === "production";
  }

  get isTestEnv(): boolean {
      return this.nodeEnv === "test";
  }

  get nodeEnv(): string {
    return this.get("NODE_ENV") || "development";
  }
  
  public get(key: string): string {
    return process.env[key];
  }

  public getNumber(key: string): number {
    return Number(this.get(key));
  }

  public mongodbConfig(): MongooseModuleOptions{
    return {
      ...nrdbmsConfig
    }
  }
}
