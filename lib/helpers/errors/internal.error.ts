class InternalError {
	isInternal: boolean;
	isCustom: boolean;
	message: string;
	stack: string;
	constructor(err = new Error()) {
		this.isInternal = true;
		this.isCustom = true;

		this.message = err.message;
		this.stack = err.stack || "";
	}
}

export default InternalError;
