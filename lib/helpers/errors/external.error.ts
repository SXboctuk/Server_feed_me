class ExternalError {
    isExternal: boolean;
    isCustom: boolean;
    message: string;
    status: number;

    constructor({ message, status }: { message: string; status: number }) {
        this.isExternal = true;
        this.isCustom = true;

        this.message = message;
        this.status = status;
    }
}

export default ExternalError;
