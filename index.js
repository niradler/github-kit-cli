#!/usr/bin/env node
const Yargs = require("yargs"); // eslint-disable-line
const GithubApi = require("./GithubApi");
const querystring = require("querystring");
const Configstore = require("configstore");
const packageJson = require("./package.json");
const choices = require("./choices");

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

const output = (r, argv) => {
  switch (argv.outputFormat) {
    case "stringify":
      r = JSON.stringify(r, null, 2);
      console.log(r);
      break;
    case "table":
      if (r.items) r = r.items;
      console.table(r);
      break;
    case "log":
      console.log(r);
      break;
    default:
      console.log(r);
      break;
  }
};

Yargs.command(
  "search [action]",
  "Search github",
  yargs => {
    yargs.positional("action", {
      describe: "Search action",
      choices: choices.search,
      require: true
    });

    yargs.option("params", {
      describe: "Params",
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
      output(r, argv);
    } catch (error) {
      if (argv.verbose) console.log(error);
      else console.error(error.message);
    }
  }
);

Yargs.command(
  "git [action]",
  "Git actions",
  yargs => {
    yargs.positional("action", {
      describe: "Git action",
      choices: choices.git,
      require: true
    });

    yargs.option("params", {
      describe: "Params",
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
      output(r, argv);
    } catch (error) {
      if (argv.verbose) console.log(error);
      else console.error(error.message);
    }
  }
);

Yargs.command(
  "repos [action]",
  "Repos actions",
  yargs => {
    yargs.positional("action", {
      describe: "Repos action",
      choices: choices.repos,
      require: true
    });

    yargs.option("params", {
      describe: "Params",
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
      output(r, argv);
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
      choices: choices.pulls,
      require: true
    });

    yargs.option("params", {
      describe: "Params",
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
      output(r, argv);
    } catch (error) {
      if (argv.verbose) console.log(error);
      else console.error(error.message);
    }
  }
);

Yargs.command(
  "gists [action]",
  "Gists actions",
  yargs => {
    yargs.positional("action", {
      describe: "Gists action",
      choices: choices.gists,
      require: true
    });

    yargs.option("params", {
      describe: "Params",
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
      output(r, argv);
    } catch (error) {
      if (argv.verbose) console.log(error);
      else console.error(error.message);
    }
  }
);

Yargs.command(
  "issues [action]",
  "Issues actions",
  yargs => {
    yargs.positional("action", {
      describe: "Issues action",
      require: true
    });

    yargs.option("params", {
      describe: "Params",
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
      output(r, argv);
    } catch (error) {
      if (argv.verbose) console.log(error);
      else console.error(error.message);
    }
  }
);

Yargs.command(
  "any [domain] [action]",
  "Query any domain on github sdk",
  yargs => {
    yargs.positional("action", {
      describe: "Action",
      require: true
    });

    yargs.positional("domain", {
      describe: "Domain",
      require: true
    });

    yargs.option("params", {
      describe: "Params",
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
      output(r, argv);
    } catch (error) {
      if (argv.verbose) console.log(error);
      else console.error(error.message);
    }
  }
);

Yargs.command(
  "store",
  "Store keys and secret",
  yargs => {
    yargs.option("auth", {
      alias: "a",
      type: "string",
      description: "Github api key",
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
  description: "Github api key"
})
  .option("filter", {
    alias: "f",
    type: "string",
    description: "Filter result"
  })
  .option("map", {
    alias: "m",
    type: "string",
    description: "Map result"
  })
  .option("outputFormat", {
    alias: "o",
    type: "string",
    choices: ["stringify", "table", "log"],
    default: "log",
    description: "Output format"
  })
  .option("verbose", {
    alias: "v",
    type: "boolean",
    description: "Run with verbose logging"
  }).argv;

if (Yargs.argv["_"].length == 0) {
  Yargs.usage("gkc [domain] [action]");
  Yargs.showHelp();
}
