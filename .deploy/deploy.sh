#!/usr/bin/env bash
npm run build
git add .
git commit -m 'New build created'
git push
curl "https://dev.wital.se/api/clientdeploy?Sessionid=997"
echo 'New build created!'
