# @weahead/eslint-config-tool

[We aheads](https://www.weahead.se/) eslint config for tool projects.

## Install

`npx install-peerdeps -d -x '-E' @weahead/eslint-config-tool`

### Usage

1. Create a file named `.eslintrc.json` and fill it with:

   ```json
   {
     "extends": ["@weahead/eslint-config-tool"]
   }
   ```

2. Optionally, add a run target to `scripts` in `package.json`:

   ```json
   {
     "scripts": {
       "lint": "eslint --fix '**/*.js' '**/*.json'"
     }
   }
   ```

## License

[X11](LICENSE)
