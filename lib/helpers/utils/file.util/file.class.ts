export class MFile {
    originalname: string;
    buffer: Buffer;

    constructor(originalname: string, buffer: Buffer) {
        this.buffer = buffer;
        this.originalname = originalname;
    }
}
