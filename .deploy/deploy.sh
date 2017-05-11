#!/usr/bin/env bash
npm run build
git add .
git commit -m 'New build created'
git push
curl "https://dev.wital.se/api/clientdeploy?Sessionid=997"
if curl "https://dev.wital.se/api/clientdeploy?Sessionid=997"
then echo "Request was successful"
else echo "CURL Failed"
echo 'New build created!'
fi