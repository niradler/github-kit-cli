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

  if (value === null) return data.filter(d => d[field]);
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

    yargs.option("q", {
      describe: "search query",
      require: true
    });
  },
  async argv => {
    try {
      let r = [];
      if (argv.verbose) console.info("verbose is on.", argv);
      const githubApi = initGithub(argv);
      const res = await githubApi.search(argv.action, { q: argv.q });
      r = res.data;
      if (argv.map || argv.filter) {
        r = r.items;
        if (argv.map) r = map(argv, r);
        if (argv.filter) r = filter(argv, r);
      }
      console.log(r);
    } catch (error) {
      console.error(error.message);
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
      let r = [];
      if (argv.verbose) console.info("verbose is on.", argv);
      const githubApi = initGithub(argv);
      const params = transformParams(argv.params);
      const res = await githubApi.any(argv.domain, argv.action, params);
      r = res.data;
      if (argv.map) r = map(argv, r.items);
      if (argv.filter) r = filter(argv, r.items);
      console.log(r);
    } catch (error) {
      console.error(error.message);
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
