import Joi from 'joi';

import { commonValidator } from '../common/commonValidator';

export const authValidator = {
  login: Joi.object().keys({
    email: commonValidator.emailValidator,
    password: commonValidator.passwordValidator
  })
};
