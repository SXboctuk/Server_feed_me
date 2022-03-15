import ExternalError from "./external.error";

class BaseError extends ExternalError {
    constructor({ status, message }: { status: number; message: string }) {
        super({ status, message });
    }
}

export default BaseError;
