# Nssm 
## 直接创建服务不弹窗
```shell
# MyExeService 是服务名称 后面是路径
nssm install MyExeService "D:\apps\yourapp.exe"
```

## 常用命令
::: info 安装服务
```shell
nssm install 服务名称
```
:::

::: info 删除服务
```shell
# 删除服务
nssm remove 服务名称
# 删除服务确定
nssm remove 服务名称 confirm
```
:::

::: info 修改服务
```shell
# 修改服务（显示界面修改）
nssm edit 服务名称
```
:::

::: info 启动服务
```shell
nssm start 服务
```
:::

::: info 停止服务
```shell
nssm stop 服务名称
```
:::

在nssm文件夹中打开cmd弹窗，输入nssm install后会弹窗，选择需要映射成服务的exe或者bat脚本，然后输入服务名称，点击install service就会注册成服务。
![[nssm.png]](/public/nssm/nssm.png)
