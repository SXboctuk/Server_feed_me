import addComment from "./addComment.service";
import addToSave from "./addToSave.service";
import create from "./create.service";
import deleteById from "./deleteById.service";
import get from "./get.service";
import getAll from "./getAll.service";
import like from "./like.service";
import update from "./update.service";

export const recepieService = {
	create,
	deleteById,
	get,
	update,
	addComment,
	like,
	addToSave,
	getAll,
};
