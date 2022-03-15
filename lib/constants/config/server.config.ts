export const serverConfig = {
  port: Number(process.env.PORT) || 8080,
  hostName: process.env.NODE_ENV == "PRODUCTION" ? "0.0.0.0" : "localhost",
};
