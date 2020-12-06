#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd dist

touch .spa

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:mexyx/blog.git master:gh-pages
git push -f git@gitee.com:mexyx/blog.git master:gh-pages

cd -