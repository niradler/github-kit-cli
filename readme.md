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
repos listForUser --params="username=niradler&per_page=100" --map="name,has_issues,fork" -f="fork=false" -o="table"
```
