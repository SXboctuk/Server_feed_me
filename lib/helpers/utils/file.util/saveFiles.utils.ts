import { path } from "app-root-path";
import { ensureDir, writeFile } from "fs-extra";
import { MFile } from "./file.class";

export interface FileElementResponse {
	url: string;
	name: string;
}

export const saveFiles = async (
	file: MFile,
	dataFolderName: string
): Promise<FileElementResponse> => {
	const dateFolder = dataFolderName;
	const uploadFolder = `${path}/uploads/${dateFolder}`;
	await ensureDir(uploadFolder);
	let res: FileElementResponse;
	await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);
	res = {
		url: `http://localhost:3000/uploads/${dateFolder}/${file.originalname}`,
		name: file.originalname,
	};
	return res;
};
