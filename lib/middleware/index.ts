import { verifyAuthToken } from "./auth.middleware";
import errorMiddleware from "./error.middleware";

export const middlewares = { errorMiddleware, verifyAuthToken };
