import dotenv from "dotenv";

dotenv.config();

const config = {
  DB: {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    NAME: process.env.DB_NAME,
    PORT: process.env.DB_PORT,
  },
  TOKEN: {
    JWT: process.env.JWT_TOKEN,
  },
  APP: {
    MODE: process.env.APP_MODE,
    PORT: process.env.APP_PORT
  }
};

export default config;
