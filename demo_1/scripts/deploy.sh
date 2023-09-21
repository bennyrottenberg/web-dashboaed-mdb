#!/bin/sh
PROJECT_DIR="$(dirname $( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd ))"
cd $PROJECT_DIR
echo "project dir is"
echo $PROJECT_DIR
npm run build
#rsync -avz -e 'ssh' $PROJECT_DIR/dist/* heb@10.10.230.14:/var/www/html/ottguard-dashboard