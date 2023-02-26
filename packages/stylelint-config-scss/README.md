# Personal configs

Credit:  Forked from [ntnyq](https://github.com/ntnyq/configs)

# StyleLint config for SCSS

## Usage

### Install

```bash
$ npm i @tylergaffaney/stylelint-config-scss -D
# OR
$ yarn add @tylergaffaney/stylelint-config-scss -D
```

### Extend this config

in `.stylelintrc.yml`

```yaml
extends:
  - @tylergaffaney/stylelint-config-scss
```

in `package.json`

```json
{
    "stylelint": {
        "extends": ["@tylergaffaney/stylelint-config-scss"]
    }
}
```
