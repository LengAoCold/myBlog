# Git 基础命令
## Git 命令
```shell
git add 添加

git add -f xxx 添加被忽略的文件夹

git commit -m'' 提交暂存区

git status 查看状态

git reflog 查看commit记录

git rebase xx

git pull --rebase

git branch -f main HEAD~3 强制修改分支位置

git reset HEAD 撤销本地

git revert HEAD 撤销远程

git init 初始化git仓库

git config --global user.name xxx 配置名字

git config --global user.email xxx 配置邮箱

git remote add origin xxx.xxx.xxx 关联远程项目地址

git remote -v 查看远程仓库地址

git remote rm origin 删除远程仓库地址

git config --global --list 查看全局配置信息

git fetch 检测是否成功链接远程仓库

git pull origin master 拉取远程仓库

git push origin master 上传

git branch 查看本地分支

git branch --list 查看分支

git branch -a 查看分支（包括远程分支）

git checkout 分支名 切换本地分支

git checkout -b 创建并进入分支

git checkout -D xx 删除分支

git merge --no-ff -m'' 合并name分支到当前分支

git merge xx 合并分支

git merge --abort 撤销合并

git fetch 这将更新git remote 中所有的远程repo 所包含分支的最新commit-id, 将其记录到.git/FETCH_HEAD文件中

git pull origin master --allow-unrelated-histories 强制合并

touch .gitignore 创建一个文件
```

## 忽略文件
```shell
# 忽略文件
.DS_Store

node_modules/

dist/

npm-debug.log

yarn-error.log

# Editor directories and files

.idea

*.suo

_.ntvs_

*.njsproj

*.sln 不上传的文件

git log -p master..origin/master 查看本地master分支和远程(origin)分支的区别
```
