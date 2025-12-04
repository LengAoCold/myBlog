# postgres
## 其他设备无法访问
```shell
# 只有本机可以访问时，找到安装目录，打开data文件
# 比如目录是`D:\software\postgresSQL\data`，打开后打开`pg_hba.conf`配置文件，
# 允许任意IP远程访问（仅测试用，生产环境建议指定网段）
host    all             all             0.0.0.0/0               md5

# 再打开`postgresql.conf`配置文件
# 找到
listen_addresses = 'localhost'
# 改成
listen_addresses = '*'
```

然后重启数据库
