# Personal configs

Credit:  Forked from [ntnyq](https://github.com/ntnyq/configs)

# StyleLint config

## Usage

### Install

```bash
$ npm i @tylergaffaney/stylelint-config -D
# OR
$ yarn add @tylergaffaney/stylelint-config -D
```

### Extend this config

in `.stylelintrc.yml`

```yaml
extends:
  - @tylergaffaney/stylelint-config
```

in `package.json`

```json
{
    "stylelint": {
        "extends": ["@tylergaffaney/stylelint-config"]
    }
}
```
