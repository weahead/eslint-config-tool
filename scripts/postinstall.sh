#!/bin/sh

if [ ! -f "${INIT_CWD}/.eslintrc.json" ]; then
  echo '{\n  "extends": ["@weahead/eslint-config-tool"]\n}' >"${INIT_CWD}/.eslintrc.json"
fi
