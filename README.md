# Mission Control Extension Validator

This validator has two purposes

1. For use as a module in [space-race/mc-core](https://github.com/space-race/mc-core) to validate extensions when loading

2. For use in extension packages to validate during development and CI.

## Usage in an Extension Package

To use in your extension package, install the package...

```
npm install --save-dev mc-extension-validator
```


... and add some code to your test command in your `package.json`

```
{
  ...
  "scripts": {
    "test": "./node_modules/.bin/validate-mc-extension && your-normal-test-command"
  },
  ...
}
```
