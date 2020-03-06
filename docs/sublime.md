### Sublime 插件和配置文件的版本控制

使用 [Package
Control](https://packagecontrol.io/installation)，所有安装的包在 [Package
Control.sublime-settings 文件](https://github.com/wangtager/sublime-config/blob/master/Package%20Control.sublime-settings)
 中都列出了。



### 使用步骤

首先在新系统上 sublime 3/2 安装好之后

```console

  1. 找到sublime插件目录
  打开sumlime, 选择菜单栏-首选项-浏览插件目录，然后在目录下打开User文件夹
  (mac系统下的插件地址是~/Library/Application\ Support/Sublime\ Text\ 2/Packages/User/)
  (windows下的插件地址是C:\Users\pp\AppData\Roaming\Sublime Text 3\Packages\User)

  2. cd 到插件的地址

  3. git clone https://github.com/wangtager/sublime-config.git

  4. 把sublime 插件和配置都存放在自己的git仓库，像操作其它项目一样对配置进行版本控制。

  ** 一次配置，终生有效。再也不用担心换电脑，重新一个一个的安装插件和配置了 **

```

- 到 https://packagecontrol.io/installation 安装 packagecontrol 。这样所有的包会自动安装上。（ ctrl 跟 导引号 来呼叫出 command console ）
- 如果已经安装了packagecontrol， 打开命令栏`Ctrl+Shift+P`, 在命令栏输入`pi`, 选择`Package Control: Install Package` 安装即可。

### 插件说明
1. ChineseLocalization
  语言包功能，切换各国语言
2. Ctags
  函数跳转，我的电脑上是Alt+点击 函数名称，会跳转到相应的函数
3. git
  git 版本控制
4. Vue Syntax Highlight
  Vue语法高亮
5. Vuejs Snippets
6. AdvancedNewFile
  快速创建文件
7. Emmet(同时自动安装PyV8库）
  一种快速编写html/css的方法
8. pug
9. Sass
10. SyncedSideBar
11. AutoFileName
功能：快捷输入文件名(按Tab键或鼠标点击选中)
12. Nodejs
功能：node代码提示
13. Open Folder
功能：在任何文件任何位置右击快速打开所在的文件夹

### 问题处理
> 1. 输入pci时 提示There are no packages available for installation，导致无法安装任何插件？
```
原因： Package Control的远程文件无法获取
  "channels": [
    "https://packagecontrol.io/channel_v3.json"
  ]

  处理: 在Package Control.sublime-settings文件中更换远程地址为
    "channels": [
    "https://wangtager.github.io/sublime-config/channel_v3.json"
  ]
  ```
> 2. sublime 怎样按elint自动格式化文件？
```
选择 工具-编译系统-新建编译系统
输入：
{
  // "shell_cmd": "eslint --fix $file"
  "shell_cmd": "npx eslint --fix --ext js,vue $file"
}
保存并命名
选择 工具-编译系统-选择自己刚命名的模板
文件有修改后，ctrl+b 即可按elint自动格式化当前文件
```
可配合 [SublimeLinter-eslint](https://packagecontrol.io/packages/SublimeLinter-eslint) 插件，在文件中高亮eslint的错误

这个问题全网都没有找到答案，这种情况只有摸索才能出真知

3. SublimeCodeIntel插件安装过程中出现的问题以及解决方案
原因：[参考](https://blog.csdn.net/BuluGuy/article/details/100056412)

处理: [参考](https://blog.csdn.net/nalaluky/article/details/80864386)

>注意：安装SublimeCodeIntel前需要安装CodeIntel

安装方法查看官网[说明 CodeIntel Installation](https://packagecontrol.io/packages/SublimeCodeIntel)[知乎pip](https://zhuanlan.zhihu.com/p/38603105)[python最新版下载地址](https://www.python.org/downloads/release/python-382/)

[python安装失败原因分析](https://www.jianshu.com/p/bc1263f12c4f)（未指定错误0x80072efd）

由于网络问题，python和pip很难下载，可直接[下载](https://pan.baidu.com/s/1ju8YvUBYSgzSjD0ikDKfYw)提取码：ke48
```
安装成功测试`python -m pip --version`
运行安装CodeIntel：
pip3 install --upgrade --pre CodeIntel 

WARNING: You are using pip version 19.2.3, however version 20.0.2 is available.
You should consider upgrading via the 'python -m pip install --upgrade pip' command.

运行python -m pip install --upgrade pip , 消除错误
```


### 快速导航
[受欢迎的特性](http://www.sublimetext.cn/)[英文版](https://www.sublimetext.com/support)

### 插件统计
在[Popular](https://packagecontrol.io/)中总有你喜欢的存在

### 快捷键（continue add）

```
alt + f3 选中同一个word(把光标放到你要选中变量的右边或者左边，记住不要选中这个变量)
ctrl+ D 连续使用，增量选中同一个word
```







