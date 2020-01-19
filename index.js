#!/usr/bin/env node
const Yargs = require("yargs"); // eslint-disable-line
const GithubApi = require("./GithubApi");

const initGithub = argv => {
  const opt = {};
  if (argv.auth) opt.auth = argv.auth;
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
  const fields = argv.map.split(",");

  return data.map(d => {
    const obj = {};
    fields.foreach(f => (obj[f] = d[f]));
    return obj;
  });
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

      if (argv.map) r = map(argv, r.items);
      if (argv.filter) r = filter(argv, r.items);
      console.log(r);
    } catch (error) {
      console.error(error.message);
    }
  }
)
  .option("auth", {
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
