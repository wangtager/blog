#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build
# 根目录的文件备份到blog文件夹,是GitHub和gitee都能访问到；直接在npm run docs:build后执行
# npm run gulp
# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/wangtager/blog.git master:gh-pages
git push -f https://${access_token}@github.com/wangtager/blog.git master:gh-pages


# git remote add origin https://github.com/wangtager/blog.git
# git push origin --delete gh-pages
# git push origin master:gh-pages

cd -