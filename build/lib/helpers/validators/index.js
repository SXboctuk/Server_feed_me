"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = void 0;
const auth_validator_1 = require("./auth.validator");
const cookbook_validator_1 = require("./cookbook.validator");
const recepie_validator_1 = require("./recepie.validator");
const user_validator_1 = require("./user.validator");
exports.validator = { auth: auth_validator_1.auth, user: user_validator_1.user, recepie: recepie_validator_1.recepie, cookbook: cookbook_validator_1.cookbook };
