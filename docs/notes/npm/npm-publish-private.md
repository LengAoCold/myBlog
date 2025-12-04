# NPM 发布私包

## NPM 发布私包
```shell
# 通过npm配置registery xxx是地址
npm config set registry xxx

# 可以查看配置是否成功
npm config get registry

# 查看登录用户
npm whoami

# 登录认证到私服/npm公服 xxx是地址
npm login --register=xxx

# 退出登录 --force 强制
npm logout

# 发布 xxx是地址  更新的话直接更改package.json中的版本号 再次发布即可
npm publish --registry=xxx

# 删除发布的包  npm unpublish 命令只能删除 72 小时以内发布的包 删除的包，在 24 小时内不允许重复发布
npm unpublish 包名 --force

# 如果发布不成功，把源更改为local 本地源  下载时也加上
npm install 包名 --register=私服地址/npm-local/

# 安装包
npm install 包名 --registry=私服地址/npm-group/
```

