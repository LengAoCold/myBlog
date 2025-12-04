# nextJS
## 创建项目
```shell
# 全局安装nest
npm i -g @nestjs/cli

# cli创建nest项目
nest new server

# 命令帮助
nest g --help

# 安装prisma
npm install prisma --save-dev

# 初始化prisma
npx prisma init
```

##  创建数据库
```shell
# 然后更改env中的sql类型，对应数据库类型
# 更改prisma中的schema.prisma中db类型

# 然后可以新增数据表 如下
model User {
	id String @id @default(auto()) @map("_id") @db.ObjectId
	name String
	email String @unique
	password String
	posts Post[]
	createdAt DateTime @default(now())
	updatedAt DateTime @default(now()) @updatedAt
}

# 执行以下命令创建sql语句文件  数据库迁移
npx prisma migrate dev --name init

# 创建prisma
nest g s prisma

# 生成模块 生成所有文件
nest g res xxx

# 生成module 讲prisma 依赖注入到全局，都可以使用不用单个引入,
nest g mo prisma(xxx)

# 生成module
nest g mo xxx

# 生成control 
nest g co xxx

# 创建守卫   （权限）
nest g gu xxx

```
