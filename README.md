# UI Blog

## Install

```sh
m='ui-blog'; git submodule add "https://github.com/site-0002/${m}.git" "themes/${m}"
```

## Update

```sh
git submodule update --recursive --remote --merge
```

## Uninstall

```sh
m='ui-blog'; git submodule deinit -f "themes/${m}"; git rm -r --cached "themes/${m}"; rm -rf ".git/modules/themes/${m}"; rm -rf "themes/${m}"
```
