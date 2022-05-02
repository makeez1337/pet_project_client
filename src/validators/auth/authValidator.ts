import Joi from 'joi';

import { commonValidator } from '../common/commonValidator';

export const authValidator = {
  registration: Joi.object().keys({
    email: commonValidator.emailValidator,
    password: commonValidator.passwordValidator
  })
};
