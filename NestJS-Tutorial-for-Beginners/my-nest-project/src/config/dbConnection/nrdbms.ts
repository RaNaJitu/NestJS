import { MongooseModuleOptions } from "@nestjs/mongoose";
import "./envSetup";

const config: { [key: string]: MongooseModuleOptions } = {
  test: {
    uri: "mongodb://localhost:27017/DemoDB",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  development: {
    uri: "mongodb://localhost:27017/DemoDB",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
};

const getNRDBMSConfig = (env?: string): MongooseModuleOptions => {
  if (!env) {
    // Setting default database to development
    env = "development";
  }
  const configuration: MongooseModuleOptions = config[env];
  console.log("🚀 ~ file: nrdbms.ts ~ line 29 ~ getNRDBMSConfig ~ configuration", configuration);

  return configuration;
};

const nrdbmsConfig: MongooseModuleOptions = getNRDBMSConfig(process.env.NODE_ENV);

export default nrdbmsConfig;
