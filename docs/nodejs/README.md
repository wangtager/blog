# NodeJs
[NodeJs 中文网](http://nodejs.cn/)

[NodeJs 指南](https://nodejs.org/zh-cn/docs/guides/)

[NodeJS特点与适用场景](https://www.jianshu.com/p/ae16c52717db)

添加配置国内源：`npm install -g cnpm --registry=https://registry.npm.taobao.org`

[npx](http://www.ruanyifeng.com/blog/2019/02/npx.html) 
想要解决的主要问题，就是调用项目内部安装的模块

Node自动重启工具 [nodemon](https://www.jianshu.com/p/3b3b8bf9c4e9) [npm地址](https://www.npmjs.com/package/nodemon)

nrm 管理和快速切换npm源地址

管理 node 版本，选择 nvm 还是 n？

nvm 和 n 的差异还是比较大的，具体体现在：

1. 安装简易度。nvm 安装起来显然是要麻烦不少；n 这种安装方式更符合 node 的惯性思维。见仁见智吧。
2. 系统支持。注意， nvm 不支持 Windows。
3. 对全局模块的管理。n 对全局模块毫无作为，因此有可能在切换了 node 版本后发生全局模块执行出错的问题；nvm 的全局模块存在于各自版本的沙箱中，切换版本后需要重新安装，不同版本间也不存在任何冲突。
4. 关于 node 路径。n 是万年不变的 /usr/local/bin；nvm 需要手动指定路径。

选择建议：

1. 如果你使用 Windows，那没得选了，使用 n，或者换一台 Mac。
2. 如果你会频繁切换 node 版本（比如本地经常测试最新版的特性，同时又要兼顾代码在生产环境的兼容性），那么从全局模块兼容性的角度考虑，只能使用 nvm。
3. 如果你是一个轻量级的用户，不需要担心兼容性的问题，更关心 node 安装和使用上的体验，那么选择 n。


Npm常用命令整理:
> <a href="https://docs.npmjs.com/cli-documentation/">查看 npm命令 官网</a>

> `npm config list`       //基本配置 

> `查看npm主要配置包含：npm仓库地址，cwd路径，根目录等配置信息`

> `npm config ls -l     //详细配置 查看全部npm默认配置`

> `npm --registry https://registry.npm.taobao.org install express // 一次性镜像`

> `npm config set registry https://registry.npm.taobao.org // 永久性镜像`

> `npm config get registry 或 npm info express // 获取当前镜像源 `

> `npm ls // 查看当前安装的包依赖关系`

> `npm list -g --depth 0 // npm 查看安装包`

> `npm list --depth=2 | grep webpack // 使用管道`

> `npm install -h   // 查看install相关的命令(帮助)`

> `npm login`

> `npm publish --access=public // access 指定修饰符。`
> 
> npm root -g // 查看全局的包的安装路径

<div style="display: none;">
    <a href="https://www.cnblogs.com/dotnetcrazy/p/10118756.html" target="_blank"></a>
</div>
