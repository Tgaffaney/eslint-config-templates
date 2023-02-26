# Personal configs

Credit:  Forked from [ntnyq](https://github.com/ntnyq/configs)

# EsLint config for TypeScript

## Usage

### Install

```bash
$ npm i @tylergaffaney/eslint-config-typescript -D
# OR
$ yarn add @tylergaffaney/eslint-config-typescript -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@tylergaffaney/typescript'],

    rules: {
        // Override rules
    },
}
```

in `package.json`

```json
{
    "eslintConfig": {
        "root": true,
        "extends": "@tylergaffaney/typescript"
    }
}
```
