const Octokit = require("@octokit/rest");
const { searchSchema } = require("./schemas");

class GithubApi {
  constructor({ auth }) {
    const opt = {};
    if (auth) opt.auth = auth;

    this.octokit = new Octokit(opt);
  }

  repos(action, params = {}) {
    return this.octokit.repos[action](params);
  }

  pulls(action, params = {}) {
    return this.octokit.pulls[action](params);
  }

  gists(action, params = {}) {
    return this.octokit.gists[action](params);
  }

  issues(action, params = {}) {
    return this.octokit.issues[action](params);
  }

  search(action, params = {}) {
    const valid = searchSchema.validate({ action, params });
    if (valid.error) throw new Error(valid.error);

    return this.octokit.search[action](params);
  }

  any(domain, action, params = {}) {
    return this.octokit[domain][action](params);
  }
}

module.exports = GithubApi;
