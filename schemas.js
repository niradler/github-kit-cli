const Joi = require("@hapi/joi");

const searchSchema = Joi.object()
  .keys({
    action: Joi.string()
      .valid(
        "issuesAndPullRequests",
        "repos",
        "users",
        "code",
        "issues",
        "commits"
      )
      .required(),
    params: Joi.object().keys({
      q: Joi.string().required()
    })
  })
  .unknown();

module.exports = {
  searchSchema
};
