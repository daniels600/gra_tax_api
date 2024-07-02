
const Joi = require('joi');

module.exports.payloadSchema = Joi.object({
  desiredNetSalary: Joi.number().positive().required(),
  allowances: Joi.number().min(0).required()
});
