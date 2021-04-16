import dotenv from "dotenv";

dotenv.config();

const config = {
  DB: {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    NAME: process.env.DB_NAME,
  },
  TOKEN: {
    JWT: process.env.JWT_TOKEN,
  },
};

export default config;
