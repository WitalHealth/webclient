#!/usr/bin/env bash
function deploy {
  RESPONSE=$(curl -so /dev/null -w "%{http_code}\n" ${1})
  if [[ ${RESPONSE} = 200 ]]; then
    echo "DEPLOY SUCCESSFUL!"
  else
    echo "DEPLOY FAILED: Error ${RESPONSE} calling ${1}"
  fi
}

npm run build
git add .
git commit -m 'New build created'
git push
deploy https://dev.wital.se/api/clientdeploy?Sessionid=997