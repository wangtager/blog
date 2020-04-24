# three.js 3D图形动画

## 浏览器兼容性（Browser support）
[兼容性](http://www.webgl3d.cn/threejs/docs/#manual/zh/introduction/Browser-support) [WebGL兼容性检查](http://www.webgl3d.cn/threejs/docs/#manual/zh/introduction/WebGL-compatibility-check)

## 获得更好的渲染性能
```js
1. new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )  第三个和第三个参数的设置

new THREE.WebGLRenderer().setSize( window.innerWidth, window.innerHeight, false)
2. setSize 传入一个较小的值;或者保持尺寸的情况下,设置第三个参数为false,应用程序以一半的分辨率来进行渲染。

```

## 材质
1. 基础网格材质(MeshBasicMaterial)， 不受光照的影响
2. Phong网格材质(MeshPhongMaterial)一种用于具有镜面高光的光泽表面的材质
3. [更多](http://www.webgl3d.cn/threejs/docs/#api/zh/materials/Material)

## attention

> 1. 加载器和控制器等组件，是示例文件夹中的一部分。所有文件和你的three.js主文件版本相匹配是很重要的。 
> 
> 

## [一些有用的链接（Useful links）](http://www.webgl3d.cn/threejs/docs/#manual/zh/introduction/Useful-links)
