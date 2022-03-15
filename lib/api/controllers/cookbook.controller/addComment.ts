import { NextFunction, Request, Response } from "express";
import { cookbookService } from "../../services";

const addComment = async (req: Request, res: Response, next: NextFunction) => {
    const { userPayload, commentText, cookbookId } = req.body;
    try {
        const comment = await cookbookService.addComment(
            cookbookId,
            userPayload.id,
            commentText
        );

        res.json({
            ...comment,
        });
    } catch (err) {
        next(err);
    }
};

export default addComment;
