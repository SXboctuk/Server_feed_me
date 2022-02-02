import { InternalError } from "../../errors";

const safeJsonParse = (str: string) => {
	try {
		return JSON.parse(str);
	} catch (err: any) {
		throw new InternalError(err);
	}
};

export default safeJsonParse;
