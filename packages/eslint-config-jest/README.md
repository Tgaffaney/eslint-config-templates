# Personal configs

Credit:  Forked from [ntnyq](https://github.com/ntnyq/configs)

# EsLint config

## Usage

### Install

```bash
$ npm i @tylergaffaney/eslint-config -D
# OR
$ yarn add @tylergaffaney/eslint-config -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@tylergaffaney'],

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
        "extends": "@tylergaffaney"
    }
}
```
