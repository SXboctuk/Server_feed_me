import sharp from "sharp";

export const convertToWebP = async (file: Buffer): Promise<Buffer> => {
	return sharp(file).webp().toBuffer();
};
