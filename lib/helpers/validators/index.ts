import { auth } from './auth.validator';
import { cookbook } from './cookbook.validator';
import { privat } from './private.validator';
import { recepie } from './recepie.validator';
import { user } from './user.validator';

export const validator = { auth, user, recepie, cookbook, privat };
