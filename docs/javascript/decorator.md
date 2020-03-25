# Decorator 装饰器
**`什么是装饰器?`**
```
装饰器是一种函数，目的是用来修改类及其成员。
Javascript装饰器还处于草案中，目前没有直接支持该语法的环境，但Babel 已支持其语法转换。
在TypeScript里也已做为一项实验性特性予以支持。
在Angular中也进行了大量使用，有很多内置的装饰器。
实际上就是设计模式中常说的装饰者模式的一种实现

装饰者模式，是指在不必改变原类文件或使用继承的情况下，动态地扩展一个对象的功能，
为对象增加额外特性的一种设计模式。
```
**`为什么要用装饰器`**
```
装饰器有方便、高效、语义化更强的特性。
合理利用装饰器可以极大的提高开发效率、可以封装提炼非内部函数的逻辑代码、
可以帮助我们快速完成重复性的工作。
```

## Decorator装饰器的使用及实例
>case 1： 修饰类 基础用法

给类添加装饰器，自动把类作为第一个参数，传递给装饰器。


>case 2： 修饰类 并自定义参数

如果你觉得一个参数不够用，可以在装饰器函数的外层再封装一层函数。不只是装饰器，在`Vue`中利用闭包的特性，还可以向`computed和getter`等方法中传递指定的参数。


装饰器在装饰类的属性时，会智能的去装饰该原型，其
- 第一参数为要装饰的目标元素，
- 第二个参数为属性名，
- 第三参数为该属性的描述对象

装饰器对类的行为的改变，是在代码编译时发生的，而不是在运行时。

>case3 多个装饰器嵌套的应用

如果多个装饰器有传参会按顺序执行所有装饰器的外部函数。执行完毕后再用reduce倒序递归执行得到的内部装饰器函数。


>case4 实现类的多继承

在js中class没有直接的语法可以实现多重继承，如果要实现多继承，只能使用mixin的方式或用getOwnPropertyNames遍历等间接的手段。如：
```
class C extends A, B {}        // Error
class C extends A extends B {} // Error
Mixin 方法实现
class A{}
function Mixin ( BaseClass ) {
	return class extends BaseClass
	{
		mixin(){ console.log('这是混合继承的类的方法，继承生成新的表达式类') }
	}
}
class C extends Mixin(A){}
new C().mixin() // 这是混合继承的类的方法，继承生成新的表达式类

// getOwnPropertyNames 方式实现
class C extend B {} 
for (let key of Object.getOwnPropertyNames(A.prototype)) {
 if (key === 'constructor') continue 
Object.defineProperty(C.prototype, key, Object.getOwnPropertyDescriptor(A.prototype, key)) 
}
```
但有了装饰器，开发人员无需关注上面的具体实现，
可通过@Decorator，能够帮你省去很多繁琐的步骤来用上装饰器

>case5 其他常用的简易装饰器
1. **@readonly 装饰器**
```
使属性只读
class Person{
@readonly // 使该属性只读。
age() {
}
}
function readonly(target, name, descriptor){
    // descriptor对象原来的值如下
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // };
  descriptor.writable = false;
  return descriptor;
}
readonly(Person.prototype, 'name', descriptor)
```
2. **@getExcuteTime 装饰器，**
```
获取某个函数执行开始时间到结束的时间
以往需要这样
class Person{
something1(){
let start = Date.now()
// do something...
let end = Date.now()
console.log('执行时间：',end-start)
}
something2(){
let start = Date.now()
// do something...
let end = Date.now()
console.log('执行时间：',end-start)
}
}
使用装饰器,使计时和业务分离
class Person{
@getExcuteTime
something1(){
// do something...
}
@getExcuteTime
something2(){
// do something...
}
}
```

3. **@log 装饰器**
```
我们不希望日志和业务掺和在一起，这样使用修饰器就避免了这个问题
class Person{
@log('开始第一步')
step1() {
// do something...
// 无需在函数中写打印的逻辑
}
@log('开始第二步')
step2() {
// do something...
}
}

function log(value) {
    return function (target, name, descriptor) {
        // 可以在这里根据参数打印更加详细的信息
        console.log(value)
    }
}
```

还有像登陆(不要重复写一些是否登陆的逻辑)、aixos等装饰器，需要我们自身根据具体需求去实现。

>其它

vue项目中使用装饰器，其官方提供的组件[装饰器](https://github.com/vuejs/vue-class-component)

core-decorators.js 提供了一些[常用的装饰器方法](https://github.com/jayphelps/core-decorators)

<Vssue title="vssue-blog" />