# Mac 命令
## kill指定端口号
::: info kill指定端口号
### 查找端口号
```shell
lsof  -i:端口号
如 lsof -i:8080	
```

### kill端口
```shell
kill -9 PID
```
:::


## 文件夹显示隐藏文件
::: info 文件夹显示隐藏文件
```shell
command + shift + .
```
:::

## 音乐视频无法播放
::: info 音乐视频无法播放
```shell
 sudo killall coreaudiod
```
:::

## 打开录屏
::: info 打开录屏
```shell
command ➕ shift + 5
```
:::


## 系统自定义全局命令
::: info 系统自定义全局命令
### 终端运行
```shell
open .zshrc
```

### 打开后添加命令如下
```shell
alias cdmy="cd /Users/lengao/myLearn/"
alias cls="clear"
alias ys="yarn serve"
```

### 最后运行
```shell
source .zshrc
```
:::
