import { InternalError } from "../../errors";

const safeJsonStringify = (obj: any) => {
    try {
        return JSON.stringify(obj);
    } catch (err: any) {
        throw new InternalError(err);
    }
};

export default safeJsonStringify;
