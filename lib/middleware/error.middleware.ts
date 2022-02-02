import { Response, Request, NextFunction } from "express";
import { ExternalError, InternalError } from "../helpers/errors";

const errorMiddleware = async (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		await next();
	} catch (err: any) {
		let internalError;
		let publicError;
		const status = err.status;
		if (err instanceof Error) {
			internalError = new InternalError(err);
			publicError = new ExternalError({
				status: status,
				message: err.message,
			});
		} else {
			publicError = new ExternalError({
				status: err.status,
				message: err.message,
			});
		}

		res.status(publicError.status).send(publicError.message);

		if (internalError) {
			console.log("internalError", internalError);
		}
	}
};

export default errorMiddleware;
