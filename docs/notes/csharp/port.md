# C Sharp
## 端口 ip 释放
```shell
# 修改为绑定所有网卡 IP
listener.Prefixes.Add("http://+:8080/"); // + 代表所有 IP 地址

# 注意：使用 `http://+:8080/` 或 `http://192.168.X.X:8080/` 时，**需要在系统中注册 URL ACL 权限**，否则会抛出权限异常。  需要关闭防火墙或者打开端口
# 打开管理员权限的 CMD，运行以下命令：
netsh http add urlacl url=http://+:8080/ user=Everyone

# 如果你要限制某个 IP，也可以写具体 IP：
netsh http add urlacl url=http://192.168.1.100:8080/ user=Everyone

# 删除
netsh http delete urlacl url=http://+:8434/

# 防火墙打开端口
netsh advfirewall firewall add rule name="HttpListener 8080" dir=in action=allow protocol=TCP localport=8080
```
