# github-kit-cli

github sdk wrapper to run as cli, to get more details on params and options go to [octokit](https://octokit.github.io/rest.js)

## Usage

### Basic

```
gkc --help
```

```
gkc store -a="github-api-key"
```

```
gkc search repos -p="q=org:niradler"
```

```

gkc any search repos -p="q=org:niradler"
```

### Advance

```
gkc repos listForUser --params="username=niradler" --map="name" --filter="fork=true"
gkc repos listForUser -p="username=niradler" -m="name" -f="fork=true"
```
