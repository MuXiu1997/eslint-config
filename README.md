# @muxiu1997/eslint-config

[![npm](https://img.shields.io/npm/v/@muxiu1997/eslint-config)](https://npmjs.com/package/@muxiu1997/eslint-config)

## Usage

### Install

npm:

```sh
npm install -D eslint prettier typescript @muxiu1997/eslint-config
```
pnpm:

```sh
pnpm add -D eslint prettier typescript @muxiu1997/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": [
    "@muxiu1997"
  ]
}
```

### Config `.eslintignore`

```ignore
dist
public
```

### Config `package.json`

```json5
{
  //...
  "prettier": "@muxiu1997/eslint-config/prettier-config"
  //...
}
```



## Acknowledgement

- [@antfu/eslint-config](https://github.com/antfu/eslint-config)

