export const serverConfig = {
    port: Number(process.env.PORT) || 3000,
    hostName: process.env.NODE_ENV == 'production' ? '0.0.0.0' : 'localhost',
};
