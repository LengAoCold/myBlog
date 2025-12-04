# mongodb
## 启动服务
```shell
# 进入 mongodb目录
cd /usr/local/mongodb/bin

# 启动服务
sudo ./mongod

# 启动服务
sudo ./mongod --dbpath=/usr/local/mongodb/data
```


## 关闭服务
```shell
# 打开终端输入mongo连接到mongodb
mongo

# 切换管理员用户
use admin;

# 关闭服务
db.shutdownServer();

#或者 打开终端并输入以下命令查找MongoDB进程ID
ps aux | grep -i mongo

#找到pid（进程ID）并输入以下命令杀死MongoDB进程
kill pid xxx
```

