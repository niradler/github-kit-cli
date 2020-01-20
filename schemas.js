const Joi = require("@hapi/joi");

const gitSchema = Joi.object()
  .keys({
    action: Joi.string()
      .valid(
        "createBlob",
        "getBlob",
        "createCommit",
        "getCommit",
        "listMatchingRefs",
        "getRef",
        "createRef",
        "updateRef",
        "deleteRef",
        "createTag",
        "getTag",
        "createTree",
        "getTree",
        "listRefs"
      )
      .required(),
    params: Joi.object()
      .keys({})
      .unknown()
  })
  .unknown();

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

const gistsSchema = Joi.object()
  .keys({
    action: Joi.string()
      .valid(
        "listPublic",
        "listStarred",
        "listStarred",
        "update",
        "delete",
        "listComments",
        "createComment",
        "getComment",
        "updateComment",
        "deleteComment",
        "listCommits",
        "fork",
        "listForks",
        "list",
        "star",
        "unstar",
        "checkIsStarred",
        "getRevision",
        "listPublicForUser"
      )
      .required(),
    params: Joi.object()
      .keys({})
      .unknown()
  })
  .unknown();

const pullsSchema = Joi.object()
  .keys({
    action: Joi.string()
      .valid(
        "list",
        "create",
        "listCommentsForRepo",
        "getComment",
        "updateComment",
        "deleteComment",
        "get",
        "update",
        "listComments",
        "createReviewCommentReply",
        "createComment",
        "listCommits",
        "listFiles",
        "checkIfMerged",
        "merge",
        "listReviewRequests",
        "createReviewRequest",
        "deleteReviewRequest",
        "listReviews",
        "createReview",
        "getReview",
        "deletePendingReview",
        "updateReview",
        "getCommentsForReview",
        "dismissReview",
        "submitReview",
        "updateBranch"
      )
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
  gitSchema
};
