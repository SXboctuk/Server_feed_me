import { Response, Request, NextFunction, ErrorRequestHandler } from "express";
import { ExternalError, InternalError } from "../helpers/errors";

const errorMiddleware: ErrorRequestHandler = async (
	err: any,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (err) {
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

		res.status(publicError.status).json({ message: publicError.message });

		if (internalError) {
			console.log("internalError", internalError);
		}
	}
};

export default errorMiddleware;
