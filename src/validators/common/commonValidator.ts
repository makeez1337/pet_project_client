import Joi from 'joi';

import { constants } from '../../constants/constants';

export const commonValidator = {
  emailValidator: Joi.string().pattern(constants.emailRegexp).trim().required(),
  passwordValidator: Joi.string().alphanum().min(8).trim().required()
};
