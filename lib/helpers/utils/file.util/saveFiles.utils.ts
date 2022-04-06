require('dotenv').config();
import { path } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';
import { MFile } from './file.class';

export interface FileElementResponse {
    url: string;
    name: string;
}

export const saveFiles = async (
    file: MFile,
    dataFolderName: string,
): Promise<FileElementResponse> => {
    const dateFolder = dataFolderName;
    const uploadFolder = `${path}/uploads/${dateFolder}`;
    await ensureDir(uploadFolder);

    await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);
    const siteURL = process.env.SITE_URL;
    // if (process.env.NODE_ENV === 'development') {
    //     siteURL = 'http://localhost:3000';
    // } else {
    //     siteURL = 'https://secure-brushlands-80295.herokuapp.com';
    // }
    const res: FileElementResponse = {
        url: `${siteURL}/uploads/${dateFolder}/${file.originalname}`,
        name: file.originalname,
    };
    return res;
};
