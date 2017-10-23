# wf-attendance
考勤系统
# 环境搭建
### 一、 安装mongodb
##### 1. 安装mongodb和robo mongo图形化管理工具

* [数据库安装链接](https://www.mongodb.com/download-center?jmp=nav#atlas)

* [robo mongo图形化管理工具安装链接](https://robomongo.org/download)
#####  2. 安装完成时注意，要自己新建数据目录，并且放在根目录下（如：C:\或者D:\等）
```

c:\>mkdir data

c:\>cd data

c:\data>mkdir db

c:\data>cd db

c:\data\db>

```
执行后启动mongod.exe，然后启动mongo.exe，即可在命令行中插入数据到数据库
```
db.col.insert({title: 'wf-attendance', 
    description: '这是一个考勤系统',
    by: 'wffe',
    url: 'https://github.com/wffe-team/wf-attendance',
    tags: ['mongodb', 'database', 'NoSQL'],
    likes: 100
})
```
### 二、 新建vue项目文件夹
##### 1. 命令行下输入以下指令
```
npm install -g vue-cli

vue init webpack

npm install

npm install mongoose --save-dev

npm install element-ui --save-dev

npm install element-theme --save-dev

npm install element-theme-default --save-dev

npm run build

npm run dev
```
#### 2. 参考官网
* [element-ui官网链接](http://element.eleme.io/#/zh-CN)
