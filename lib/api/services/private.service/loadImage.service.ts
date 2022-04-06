import db from '../../data-access/models';
import { v4 as uuidv4 } from 'uuid';

import { MFile } from '../../../helpers/utils/file.util/file.class';
import { fileUtil } from '../../../helpers/utils/file.util';
import path from 'path';

const loadImage = async (image: any) => {
    const buffer = await fileUtil.convertToWebP(image.data);
    const saveFile = new MFile(
        `${image.name.slice(0, image.name.lastIndexOf('.'))}.webp`,
        buffer,
    );
    const savedFile = await fileUtil.saveFiles(saveFile, 'image');
    return { imagePath: savedFile.url };
};

export default loadImage;
