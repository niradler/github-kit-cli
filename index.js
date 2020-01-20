#!/usr/bin/env node
const Yargs = require("yargs"); // eslint-disable-line
const GithubApi = require("./GithubApi");
const querystring = require("querystring");
const Configstore = require("configstore");
const packageJson = require("./package.json");

const config = new Configstore(packageJson.name, {});

const initGithub = argv => {
  const opt = {};
  if (argv.auth) opt.auth = argv.auth;
  if (config.get("auth")) opt.auth = config.get("auth");
  const githubApi = new GithubApi(opt);

  return githubApi;
};

const filter = (argv, data) => {
  let field = argv.filter.includes("=")
    ? argv.filter.split("=")[0]
    : argv.filter;
  let value = argv.filter.includes("=") ? argv.filter.split("=")[1] : null;

  if (value === "true" || value === "false") value = value === "true";
  if (value === null) return data.filter(d => d[field]);
  if (!isNaN(value) && value !== true && value !== false) value = Number(value);

  return data.filter(d => d[field] === value);
};

const map = (argv, data) => {
  const fields = argv.map.includes(",") ? argv.map.split(",") : [argv.map];

  return data.map(d => {
    const obj = {};
    fields.forEach(f => (obj[f] = d[f]));
    return obj;
  });
};

const handleMapFilter = (argv, r) => {
  if (argv.map || argv.filter) {
    r = r.items ? r.items : r;
    if (argv.filter) r = filter(argv, r);
    if (argv.map) r = map(argv, r);
  }

  return r;
};

const transformParams = params => {
  return querystring.decode(params);
};

Yargs.command(
  "search [action]",
  "search github",
  yargs => {
    yargs.positional("action", {
      describe: "search action",
      require: true
    });

    yargs.option("params", {
      describe: "params",
      alias: "p",
      require: true
    });
  },
  async argv => {
    try {
      let r = { error: "not found" };
      if (argv.verbose) console.info("verbose is on.", argv);
      const githubApi = initGithub(argv);
      argv.params = transformParams(argv.params);
      const res = await githubApi.search(argv.action, argv.params);
      r = handleMapFilter(argv, res.data);
      console.log(r);
    } catch (error) {
      if (argv.verbose) console.log(error);
      else console.error(error.message);
    }
  }
);

Yargs.command(
  "git [action]",
  "git actions",
  yargs => {
    yargs.positional("action", {
      describe: "git action",
      require: true
    });

    yargs.option("params", {
      describe: "params",
      alias: "p",
      require: true
    });
  },
  async argv => {
    try {
      let r = { error: "not found" };
      if (argv.verbose) console.info("verbose is on.", argv);
      const githubApi = initGithub(argv);
      argv.params = transformParams(argv.params);
      const res = await githubApi.git(argv.action, argv.params);
      r = handleMapFilter(argv, res.data);
      console.log(r);
    } catch (error) {
      if (argv.verbose) console.log(error);
      else console.error(error.message);
    }
  }
);

Yargs.command(
  "repos [action]",
  "repos actions",
  yargs => {
    yargs.positional("action", {
      describe: "repos action",
      require: true
    });

    yargs.option("params", {
      describe: "params",
      alias: "p",
      require: true
    });
  },
  async argv => {
    try {
      let r = { error: "not found" };
      if (argv.verbose) console.info("verbose is on.", argv);
      const githubApi = initGithub(argv);
      argv.params = transformParams(argv.params);
      const res = await githubApi.repos(argv.action, argv.params);
      r = handleMapFilter(argv, res.data);
      console.log(r);
    } catch (error) {
      if (argv.verbose) console.log(error);
      else console.error(error.message);
    }
  }
);

Yargs.command(
  "pulls [action]",
  "pulls actions",
  yargs => {
    yargs.positional("action", {
      describe: "pulls action",
      require: true
    });

    yargs.option("params", {
      describe: "params",
      alias: "p",
      require: true
    });
  },
  async argv => {
    try {
      let r = { error: "not found" };
      if (argv.verbose) console.info("verbose is on.", argv);
      const githubApi = initGithub(argv);
      argv.params = transformParams(argv.params);
      const res = await githubApi.pulls(argv.action, argv.params);
      r = handleMapFilter(argv, res.data);
      console.log(r);
    } catch (error) {
      if (argv.verbose) console.log(error);
      else console.error(error.message);
    }
  }
);

Yargs.command(
  "gists [action]",
  "gists actions",
  yargs => {
    yargs.positional("action", {
      describe: "gists action",
      require: true
    });

    yargs.option("params", {
      describe: "params",
      alias: "p",
      require: true
    });
  },
  async argv => {
    try {
      let r = { error: "not found" };
      if (argv.verbose) console.info("verbose is on.", argv);
      const githubApi = initGithub(argv);
      argv.params = transformParams(argv.params);
      const res = await githubApi.gists(argv.action, argv.params);
      r = handleMapFilter(argv, res.data);
      console.log(r);
    } catch (error) {
      if (argv.verbose) console.log(error);
      else console.error(error.message);
    }
  }
);

Yargs.command(
  "issues [action]",
  "issues actions",
  yargs => {
    yargs.positional("action", {
      describe: "issues action",
      require: true
    });

    yargs.option("params", {
      describe: "params",
      alias: "p",
      require: true
    });
  },
  async argv => {
    try {
      let r = { error: "not found" };
      if (argv.verbose) console.info("verbose is on.", argv);
      const githubApi = initGithub(argv);
      argv.params = transformParams(argv.params);
      const res = await githubApi.issues(argv.action, argv.params);
      r = handleMapFilter(argv, res.data);
      console.log(r);
    } catch (error) {
      if (argv.verbose) console.log(error);
      else console.error(error.message);
    }
  }
);

Yargs.command(
  "any [domain] [action]",
  "query any domain on github sdk",
  yargs => {
    yargs.positional("action", {
      describe: "action",
      require: true
    });

    yargs.positional("domain", {
      describe: "domain",
      require: true
    });

    yargs.option("params", {
      describe: "params",
      alias: "p",
      require: true
    });
  },
  async argv => {
    try {
      let r = { error: "not found" };
      if (argv.verbose) console.info("verbose is on.", argv);
      const githubApi = initGithub(argv);
      argv.params = transformParams(argv.params);
      const res = await githubApi.any(argv.domain, argv.action, argv.params);
      r = handleMapFilter(argv, res.data);
      console.log(r);
    } catch (error) {
      if (argv.verbose) console.log(error);
      else console.error(error.message);
    }
  }
);

Yargs.command(
  "store",
  "store keys and secret",
  yargs => {
    yargs.option("auth", {
      alias: "a",
      type: "string",
      description: "github api key",
      require: true
    });
  },
  async argv => {
    try {
      config.set("auth", argv.auth);
      console.log(config.all);
    } catch (error) {
      if (argv.verbose) console.log(error);
      else console.error(error.message);
    }
  }
);

Yargs.option("auth", {
  alias: "a",
  type: "string",
  description: "github api key"
})
  .option("filter", {
    alias: "f",
    type: "string",
    description: "filter result"
  })
  .option("map", {
    alias: "m",
    type: "string",
    description: "map result"
  })
  .option("verbose", {
    alias: "v",
    type: "boolean",
    description: "Run with verbose logging"
  }).argv;
