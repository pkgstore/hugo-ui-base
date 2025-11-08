# Hugo UI Base

Base theme for Hugo.

## Install

```sh
git submodule add 'https://github.com/pkgstore/hugo-ui-base.git' 'themes/ui-base'
```

## Update

```sh
git submodule update --remote --merge
```

## Uninstall

```sh
m='ui-base'; git submodule deinit -f "themes/${m}"; git rm -r --cached "themes/${m}"; rm -rf ".git/modules/themes/${m}"; rm -rf "themes/${m}"
```
