# GitHub CICD 部署

## 服务器创建用户
#### 在服务器上创建 deploy 用户（如果还没有）
```shell
# 在服务器上以 root 或有 sudo 的用户运行
sudo adduser deploy
# 给用户设置写入权限（防止没权限删除更新文件）
sudo chown -R deploy:deploy /项目目录
sudo chmod -R 755 /项目目录
```

## GitHub 创建 SSH
#### 为 GitHub Actions 创建一个部署用 SSH Key
在你的本地电脑执行：
```shell
ssh-keygen -t ed25519 -f deploy_key -C "github-deploy"
```
会得到两个文件：
```shell
deploy_key           ← 私钥（放 GitHub Secrets）
deploy_key.pub       ← 公钥（放服务器）
```
把公钥复制到服务器 deploy 用户：
```shell
ssh-copy-id -i deploy_key.pub deploy@x.x.x.x
```
如果没有 ssh-copy-id，就：
```shell
cat deploy_key.pub | ssh deploy@x.x.x.x "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

## GitHub 设置 Secrets
#### 在 GitHub 仓库设置 Secrets
进入仓库 → `Settings` → `Secrets` → `Actions` → `New repository secret`

添加以下 `Secrets`（注意名称必须一致）：
| Secret名称 | 内容 |
| ------------- | ----------- |
| DEPLOY_HOST | 服务器的 IP 地址 |
| DEPLOY_USER | 服务器的用户名 |
| DEPLOY_PATH | 服务器的部署目录 |
| SSH_PRIVATE_KEY | deploy_key 私钥内容（完整内容） |

**注意 SSH_PRIVATE_KEY 用的是 deploy_key（私钥），不是 .pub** 

## 创建自动化发布脚本
#### 在项目中新建 GitHub Actions 配置文件
在你的项目里新建：
```shell
.github/workflows/deploy.yml
```
内容如下（按自己的环境配置好，以下是我的环境 VitePress + Nginx ）：
```yml
name: Deploy VitePress to Server

on:
  push:
    branches:
      - master   # 每次推送 master 就自动部署

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Source
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Install pnpm
        run: npm install -g pnpm

      - name: Install Dependencies (pnpm)
        run: pnpm install --frozen-lockfile

      - name: Build VitePress
        run: pnpm run docs:build

      - name: Setup SSH
        env:
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
        run: |
          mkdir -p ~/.ssh
          echo "$SSH_PRIVATE_KEY" > ~/.ssh/id_ed25519
          chmod 600 ~/.ssh/id_ed25519
          ssh-keyscan -H ${{ secrets.DEPLOY_HOST }} >> ~/.ssh/known_hosts

      - name: Deploy to Server with rsync
        run: |
          rsync -avc --delete docs/.vitepress/dist/ \
            ${{ secrets.DEPLOY_USER }}@${{ secrets.DEPLOY_HOST }}:${{ secrets.DEPLOY_PATH }}/

      - name: Reload Nginx
        run: |
          ssh ${{ secrets.DEPLOY_USER }}@${{ secrets.DEPLOY_HOST }} "sudo nginx -s reload || true"
```

## 开始测试
本地提交代码
```shell
Git add .
Git commit -m "update docs"
Git push origin main
```
就会自动按照yml脚本运行，并显示运行结果：

`GitHub Actions` → `自动 build` → `自动 rsync 上传` → `自动 nginx reload`

## 🔍 常见问题说明

#### VitePress 构建产物路径
```shell
# 删除旧文件时可能找不到文件夹，就找一下对应的 vite press build 后构建的目录
rsync -avc --delete .vitepress/dist/
```
