export const serverConfig = {
  port: Number(process.env.SERVER_PORT) || 8080,
  hostName: process.env.HOST_NAME || "localhost",
};
