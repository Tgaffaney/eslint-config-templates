# Personal configs

Credit:  Forked from [ntnyq](https://github.com/ntnyq/configs)

# EsLint config for Vue.js with Prettier

## Usage

### Install

```bash
$ npm i @tylergaffaney/eslint-config-prettier-vue -D
# OR
$ yarn add @tylergaffaney/eslint-config-prettier-vue -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@tylergaffaney/prettier-vue'],

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
        "extends": "@tylergaffaney/prettier-vue"
    }
}
```
