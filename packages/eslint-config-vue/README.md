# Personal configs

Credit:  Forked from [ntnyq](https://github.com/ntnyq/configs)

# EsLint config for Vue.js

## Usage

### Install

```bash
$ npm i @tylergaffaney/eslint-config-vue -D
# OR
$ yarn add @tylergaffaney/eslint-config-vue -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@tylergaffaney/vue'],

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
        "extends": "@tylergaffaney/vue"
    }
}
```
