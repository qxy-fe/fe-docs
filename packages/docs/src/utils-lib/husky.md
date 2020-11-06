# Huksy

为 shell 脚本添加 **执行** 权限。

```sh
$ chmod +x pre-commit
```

## pre-commit

### yorkie

```sh
#!/bin/bash

set -e

cd "html"

# Run hooks
node "./node_modules/yorkie/src/runner.js" pre-commit || {
  echo
  echo "pre-commit hook failed (add --no-verify to bypass)"
  exit 1
}
```

## commit-msg

```sh
#!/bin/bash

RED='\033[31m'
GREEN='\033[32m'

awk '{printf("%s",$0)}' $1 | egrep "^#[[:digit:]]*-(docs|unittest|pseudocode|msg-[^ ].*|bug-[^ ].*)$" > /dev/null 2>&1

if [ $? -ne 0 ];then
  echo -e "message check ${RED}fail${NORMAL}"
  exit 1
fi
  echo -e "message check ${GREEN}success${NORMAL}"
exit 0
```
