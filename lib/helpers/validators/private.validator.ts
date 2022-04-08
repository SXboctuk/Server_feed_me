import { check } from 'express-validator';
import { MESSAGES } from '../../constants/messages';
import { checkError } from './checkError.validator';

const loadImage = [
    check().custom((value, { req }) => {
        const image: any = req.files?.image;
        if (!image) {
            throw new Error(MESSAGES.FILE.FILE_NOT_CATCH);
        }
        if (!image.mimetype.includes('image')) {
            throw new Error(MESSAGES.FILE.WRONG_FILE_FORMAT);
        }
        return true;
    }),
    checkError(),
];
export const privat = { loadImage };
