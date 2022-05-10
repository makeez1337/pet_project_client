import Joi from 'joi';

import { constants } from '../../constants';

export const commonValidator = {
  emailValidator: Joi.string().pattern(constants.emailRegexp).trim().required().messages({
    'string.pattern.base': `"email" should include "@" and symbols after`
  }),
  passwordValidator: Joi.string().alphanum().min(8).trim().required()
};
