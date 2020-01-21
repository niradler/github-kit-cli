const Joi = require("@hapi/joi");
const choices = require("./choices");

const gitSchema = Joi.object()
  .keys({
    action: Joi.string()
      .valid(...choices.git)
      .required(),
    params: Joi.object()
      .keys({})
      .unknown()
  })
  .unknown();

const searchSchema = Joi.object()
  .keys({
    action: Joi.string()
      .valid(...choices.search)
      .required(),
    params: Joi.object().keys({
      q: Joi.string().required()
    })
  })
  .unknown();

const gistsSchema = Joi.object()
  .keys({
    action: Joi.string()
      .valid(...choices.gists)
      .required(),
    params: Joi.object()
      .keys({})
      .unknown()
  })
  .unknown();

const pullsSchema = Joi.object()
  .keys({
    action: Joi.string()
      .valid(...choices.pulls)
      .required(),
    params: Joi.object()
      .keys({})
      .unknown()
  })
  .unknown();

const reposSchema = Joi.object()
  .keys({
    action: Joi.string()
      .valid(...choices.repos)
      .required(),
    params: Joi.object()
      .keys({})
      .unknown()
  })
  .unknown();

module.exports = {
  searchSchema,
  gistsSchema,
  pullsSchema,
  gitSchema,
  reposSchema
};
