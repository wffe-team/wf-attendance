<<<<<<< HEAD
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

# 项目功能
## 一、 目的

* 提高考勤确认效率

## 二、 技术

* [Vue.js](https://cn.vuejs.org/)

* [Node.js](https://nodejs.org/en/)

* [MongoDB](https://www.mongodb.com/)

## 三、 开发工具

* [VsCode](https://code.visualstudio.com/)

## 四、 功能

* 管理员录入或者删除员工信息（姓名、岗位性质）
* 管理员录入员工缺勤日期、缺勤类型（请假、年假、调休...）
* 员工确认时间以及签字

=======
# attendance

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
>>>>>>> rebase
