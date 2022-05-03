import Joi from 'joi';

import { commonValidator } from '../common/commonValidator';

export const authValidator = {
  registration: Joi.object().keys({
    firstName: Joi.string().min(1).trim().required(),
    lastName: Joi.string().min(1).trim().required(),
    email: commonValidator.emailValidator,
    password: commonValidator.passwordValidator,
    repeatedPassword: Joi.string().valid(Joi.ref('password')).required().messages({
      'any.only': 'Passwords is not equal'
    })
  }),
  login: Joi.object().keys({
    email: commonValidator.emailValidator,
    password: commonValidator.passwordValidator
  })
};
