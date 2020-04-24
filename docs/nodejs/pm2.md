# pm2 使用

> [pm2](https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/)

> [常用命令集合 jb51](https://www.jb51.net/article/162234.htm)

> [pm2 启动 http-server 静态服务器](https://www.jianshu.com/p/a476ee08b5f1)

## pm2 支持[YAML](https://www.jianshu.com/p/cea930923f3d)配置、json配置、js配置、sh配置，管理多个应用程序

```json
// processes.json
module.exports = {
  apps : [{
    name        : "worker",//应用名称
    script      : "./worker.js", //脚本路径相对于pm2开始
    watch       : true, //开启监察，文件改变自动重启
    env: {
      "PORT": 3000,
      "NODE_ENV": "development",
    },
    env_production : {
        "PORT": 80
       "NODE_ENV": "production"
    }
  },{
    name       : "api-app",
    script     : "./api.js",
    cwd         : "/home/www/project_root/current",// 
    "error_file": "./logs/app.err.log",
    "out_file": "./logs/app.out.log", 
    "log_date_format" : "YYYY-MM-DD HH:mm Z"
    instances  : 4, // 实例（多核）
    exec_mode  : "cluster" // 集群模式
  }]
}

// 使用 
pm2 start processes.json
pm2 reload process.json
pm2 reload process.json --only api

```

## 参考reference

. [pm2入门到精通](https://www.jianshu.com/p/1778deeb428e)

. [pm2进阶使用](https://www.cnblogs.com/coolslider/p/8510993.html)

. [pm2使用心得](https://www.jianshu.com/p/225b9284cfb8)




