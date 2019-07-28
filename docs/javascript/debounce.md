# 防抖和节流的区分和实现详解
在网页运行的某些场景中，有些事件会不间断的被触发。如`scroll`事件并不是我们想象中的，滚动一次触发一次。而是会多次被触发，由于过于频繁地`DOM`操作和资源加载，严重影响了网页性能，甚至会造成浏览器崩溃。

## 常见的应用场景
1. 最常见的场景 `scroll` 事件。
如下。当我们对窗口增加滚动事件监听，然后每次滚动时，触发监听的回调函数。

```
function printScroll  () {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
　　console.log('滚动条当前位置：' + scrollTop);
}
window.addEventListener('scroll', printScroll)
```

但是，在运行时我们发现**滚动一下**会**触发多次**回调函数，打印结果如下：
<div style="text-align:center">
  <img :src="$withBase('/img/javascript/scroll.png')" alt="滚动" title="滚动打印" width="auto" height="auto" />
</div>
然而实际开发中我们并不需要如此高频的回调，毕竟浏览器的性能是有限的，不应该浪费在这里。那么如何优化这种情况了。

## 防抖(debounce)

含义：事件被触发后延迟n秒再执行回调，如果在这n秒内又被触发，则重新计时。

具体实现：原理就是利用闭包。

```
// 防抖函数（简洁版）
function debounce(fn,delay){
    let timer = null //借助闭包
    return function() {
        if(timer){
            clearTimeout(timer) 
        }
        timer = setTimeout(fn, delay)
    }
}
// 原始函数
let handlerScroll = ()=> {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
　　console.log('滚动条当前位置：' + scrollTop);
}
// 两函数结合，实现滚动防抖
window.addEventListener('scroll', debounce(handlerScroll, 1000))
```
此时会发现，必须在停止滚动1秒以后，才会打印出滚动条位置。
注：实际开发中需要通过apply来获取函数的作用域和变量`fn.apply(context, args)`。

实际开发中需要防抖处理的场景还是非常多的，如`resize事件`、`scroll事件`、`input事件`、`拖拽事件`等。除了这些,还有很多情况需要我们结合实际开发处理。 
## 节流(throttle)
顾名思义就是每过n秒仅执行一次回调函数。如单位时间内多次函数，也只有一次生效。

```
// 节流函数
function throttle(fn, delay) {
    let timer = null;      //定义一个定时器
    return function() {
        let context = this;
        let args = arguments;
        if(!timer) {
            timer = setTimeout(function() {
                fn.apply(context, args);
                timer = null;
            }, delay);
        }
    }
}
// 原始函数
let scrollEvent = ()=> {
　　console.log('当前时间戳：' + new Date().getTime());
}
// 滚动事件
window.addEventListener('scroll', throttle(scrollEvent, 1000));
```

连续滚动5s的实际效果：
<div style="text-align:center">
  <img :src="$withBase('/img/javascript/scroll1.png')" alt="滚动" title="滚动打印" width="auto" height="auto" />
</div>
由于`setTimeout`函数的时间参数存在误差，所以打印的结果后三位不一定是我们期望的数值。节流函数除了利用定时器的方式，也可以利用时间戳的方式。当前时间与上一个时间进行比对，这里就不赘述了。

## 区别
综上所述，防抖是事件停止触发且过了某指定时间后执行一次，而函数节流是间隔某指定的单位时间执行一次。

防抖和节流能有效减少浏览器引擎的损耗，防止出现页面堵塞卡顿现象，作为大前端开发人员是应该熟练掌握的技能。

