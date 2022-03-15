export const serverConfig = {
    port: Number(process.env.SERVER_PORT) || 3000,
    hostName: process.env.HOST_NAME || "localhost",
};
