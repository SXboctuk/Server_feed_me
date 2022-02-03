import ExternalError from "./external.error";
import { CODE_STATUSES } from "../../constants/code-statuses";
import { MESSAGES } from "../../constants/messages";

class AuthError extends ExternalError {
	constructor({
		message = MESSAGES.AUTH.ERROR.BASE_ERROR,
		status = CODE_STATUSES.UNAUTHORISED,
	}) {
		super({ message, status });
	}
}

export default AuthError;
