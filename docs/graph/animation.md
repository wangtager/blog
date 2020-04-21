<Pv :id="5"/>

# 动画的应用
>`目的：为满足项目需求，打造体验性、交互性更强的项目。统一使用以下动画图表框架`

## 1.js动画框架
使用js动画框架animejs

框架地址：
- [github地址](https://github.com/juliangarnier/anime)
- [中文官网地址](https://www.animejs.cn/)

## 项目中实际使用

可以根据需求，封装成方法，反复调用。元素的动画实例始终是唯一的。
```
setAnime(targets, width){
  this.anime({
    targets,
    width: [0, width],
    easing: 'easeInOutSine',
    direction: 'normal',
    loop: false,
    duration: 600
  })
}
```

## 2.css动画框架
使用css动画框架[animate.css](https://daneden.github.io/animate.css/)
和使用`iconfont`一样直接在元素的class属性上添加类`animated`和对应的效果类名。无需写多余的样式。支持动画结束时的回调函数
框架地址：

[github地址](https://github.com/daneden/animate.css)
[官网地址](https://daneden.github.io/animate.css/)

## 3.数据可视化图表框架
使用[echarts框架](https://www.echartsjs.com/zh/index.html)
框架地址：[https://echarts.baidu.com/index.html](https://echarts.baidu.com/index.html)
简单图表可借助`svg/canvas`生成。后期可以封装一些常用的`svg/canvas`简单动画。配合`animejs`，实现s`vg/canvas`的动画效

## 4.其它框架的使用
后期根据是否有3d动画的需求使用three.js（或者D3.js）

<Vssue title="animation" />





