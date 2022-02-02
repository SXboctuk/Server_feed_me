import { InternalError } from "../../errors";
import { tokenUtils } from "../token.util";

const generateAuthToken = ({ email, id }: { email: string; id: string }) => {
	if (!email || !id) {
		throw new InternalError();
	}

	const token = tokenUtils.generateToken({ email, id });

	return token;
};

export default generateAuthToken;
