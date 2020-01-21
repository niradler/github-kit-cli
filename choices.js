const repos = [
  "acceptInvitation",
  "addCollaborator",
  "addDeployKey",
  "addProtectedBranchAdminEnforcement",
  "addProtectedBranchAppRestrictions",
  "addProtectedBranchRequiredSignatures",
  "addProtectedBranchRequiredStatusChecksContexts",
  "addProtectedBranchTeamRestrictions",
  "addProtectedBranchUserRestrictions",
  "checkCollaborator",
  "checkVulnerabilityAlerts",
  "compareCommits",
  "createCommitComment",
  "createDeployment",
  "createDeploymentStatus",
  "createDispatchEvent",
  "createFile",
  "createForAuthenticatedUser",
  "createFork",
  "createHook",
  "createInOrg",
  "createOrUpdateFile",
  "createRelease",
  "createStatus",
  "createUsingTemplate",
  "declineInvitation",
  "delete",
  "deleteCommitComment",
  "deleteDownload",
  "deleteFile",
  "deleteHook",
  "deleteInvitation",
  "deleteRelease",
  "deleteReleaseAsset",
  "disableAutomatedSecurityFixes",
  "disablePagesSite",
  "disableVulnerabilityAlerts",
  "enableAutomatedSecurityFixes",
  "enablePagesSite",
  "enableVulnerabilityAlerts",
  "get",
  "getAppsWithAccessToProtectedBranch",
  "getArchiveLink",
  "getBranch",
  "getBranchProtection",
  "getClones",
  "getCodeFrequencyStats",
  "getCollaboratorPermissionLevel",
  "getCombinedStatusForRef",
  "getCommit",
  "getCommitActivityStats",
  "getCommitComment",
  "getCommitRefSha",
  "getContents",
  "getContributorsStats",
  "getDeployKey",
  "getDeployment",
  "getDeploymentStatus",
  "getDownload",
  "getHook",
  "getLatestPagesBuild",
  "getLatestRelease",
  "getPages",
  "getPagesBuild",
  "getParticipationStats",
  "getProtectedBranchAdminEnforcement",
  "getProtectedBranchPullRequestReviewEnforcement",
  "getProtectedBranchRequiredSignatures",
  "getProtectedBranchRequiredStatusChecks",
  "getProtectedBranchRestrictions",
  "getPunchCardStats",
  "getReadme",
  "getRelease",
  "getReleaseAsset",
  "getReleaseByTag",
  "getTeamsWithAccessToProtectedBranch",
  "getTopPaths",
  "getTopReferrers",
  "getUsersWithAccessToProtectedBranch",
  "getViews",
  "list",
  "listAppsWithAccessToProtectedBranch",
  "listAssetsForRelease",
  "listBranches",
  "listBranchesForHeadCommit",
  "listCollaborators",
  "listCommentsForCommit",
  "listCommitComments",
  "listCommits",
  "listContributors",
  "listDeployKeys",
  "listDeploymentStatuses",
  "listDeployments",
  "listDownloads",
  "listForOrg",
  "listForUser",
  "listForks",
  "listHooks",
  "listInvitations",
  "listInvitationsForAuthenticatedUser",
  "listLanguages",
  "listPagesBuilds",
  "listProtectedBranchRequiredStatusChecksContexts",
  "listProtectedBranchTeamRestrictions",
  "listProtectedBranchUserRestrictions",
  "listPublic",
  "listPullRequestsAssociatedWithCommit",
  "listReleases",
  "listStatusesForRef",
  "listTags",
  "listTeams",
  "listTeamsWithAccessToProtectedBranch",
  "listTopics",
  "listUsersWithAccessToProtectedBranch",
  "merge",
  "pingHook",
  "removeBranchProtection",
  "removeCollaborator",
  "removeDeployKey",
  "removeProtectedBranchAdminEnforcement",
  "removeProtectedBranchAppRestrictions",
  "removeProtectedBranchPullRequestReviewEnforcement",
  "removeProtectedBranchRequiredSignatures",
  "removeProtectedBranchRequiredStatusChecks",
  "removeProtectedBranchRequiredStatusChecksContexts",
  "removeProtectedBranchRestrictions",
  "removeProtectedBranchTeamRestrictions",
  "removeProtectedBranchUserRestrictions",
  "replaceProtectedBranchAppRestrictions",
  "replaceProtectedBranchRequiredStatusChecksContexts",
  "replaceProtectedBranchTeamRestrictions",
  "replaceProtectedBranchUserRestrictions",
  "replaceTopics",
  "requestPageBuild",
  "retrieveCommunityProfileMetrics",
  "testPushHook",
  "transfer",
  "update",
  "updateBranchProtection",
  "updateCommitComment",
  "updateFile",
  "updateHook",
  "updateInformationAboutPagesSite",
  "updateInvitation",
  "updateProtectedBranchPullRequestReviewEnforcement",
  "updateProtectedBranchRequiredStatusChecks",
  "updateRelease",
  "updateReleaseAsset",
  "uploadReleaseAsset"
];

const git = [
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
];

const search = [
  "issuesAndPullRequests",
  "repos",
  "users",
  "code",
  "issues",
  "commits"
];

const pulls = [
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
];

const gists = [
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
];
module.exports = {
  repos,
  git,
  search,
  pulls,
  gists
};
