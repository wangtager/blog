# http缓存（图文解析）
<Pv :id="2"/>

Http 缓存机制作为 ```web``` 性能优化的重要手段，对于从事 ```Web``` 开发的同学们来说，应该是知识体系库中的一个基础环节，同时对于有志成为前端架构师的同学来说是必备的知识技能。
## 知识铺垫
了解浏览器和服务器间通信时的请求报文及响应报文,```HTTP```报文就是浏览器和服务器间通信时发送及响应的数据块。
[参考](https://www.jianshu.com/p/0015277c6575)
## 缓存命中规则

    为方便大家理解，我们认为浏览器存在一个缓存数据库,用于存储缓存信息。
    在客户端第一次请求数据时，此时缓存数据库中没有对应的缓存数据，需要请求服务器，服务器返回后，
    将数据存储至缓存数据库中。

<div style="text-align:center">
  <img :src="$withBase('/img/javascript/cache.jpg')" alt="GitHub" title="GitHub0,Social Coding" width="auto" height="auto" />
</div>

HTTP缓存有多种规则，根据是否需要重新向服务器发起请求来分类，我将其分为两大类(**强制缓存**，**对比缓存**)

    强制缓存如果生效，不需要再和服务器发生交互，而对比缓存不管是否生效，都需要与服务端发生交互。

### 强制缓存

响应头中一定有```cache-control```或```expires```属性。
其http的状态码返回：```Status Code: 200  (from disk cache)```，说明强制缓存已被命中使用。

```Expires```为服务端返回的到期时间。即下一次请求时，请求时间```小于```服务端返回的到期时间，直接使用缓存数据。作为HTTP 1.0的作品，所以它基本可以忽略。

另一个问题是，到期时间是由服务端生成的，但是客户端时间可能跟服务端时间有误差，这就会导致缓存命中的误差。
所以```HTTP 1.1``` 的版本，使用```Cache-Control```替代。

```Cache-Control``` 是最重要的规则。常见的取值有no-cache、no-store、max-age、private、public、，默认为private。见下表：
| 字段值  | 作用 |
| :--- | :----: |
| no-cache    | 防止从缓存中返回过期的资源，所以使用之前，需要和源服务器发起请求比对过期时间 |
| no-store    | 这个指令才是真正的不进行缓存，暗示请求报文中可能含有机密信息，不可缓存 |
| max-age    | 在指定时间内，缓存服务器不再对资源的有效性进行确认，可以使用 |
| private    | 只有某个在通过缓存服务器的时候，得到缓存资源 |
| public    | 所有的用户在通过缓存服务器的时候，都可以缓存这个资源。 |

在```Cache-Control``` 中，这些值可以自由组合，多个值如果冲突时，也是有优先级的，而no-store优先级最高。如下图：
<div style="text-align:center">
  <img :src="$withBase('/img/javascript/cache3.png')" alt="GitHub" title="GitHub2,Social Coding" width="auto" height="auto" />
</div>

**强制缓存的缓存机制**，如下图：
<div style="text-align:center">
  <img :src="$withBase('/img/javascript/cache1.png')" alt="GitHub" title="GitHub1,Social Coding" width="auto" height="auto" />
</div>

### 对比缓存
顾名思义，需要进行比较判断是否可以使用缓存。
响应头中一定有```etag```或```last-modified```属性。
其http的状态码返回传说中的：``````Status Code: 304``````

```last-modified：``` 
- 服务器第一次响应请求时，告诉浏览器资源的最后修改时间，并存储到浏览器端。
- 再次请求时，请求头中携带```If-Modified-Since```字段，将上次请求服务器资源的最后修改时间传到服务器与被请求资源的最后修改时间进行比对。
- 若资源的最后修改时间大于If-Modified-Since的值，说明资源又被改动过，则响应整片资源内容，返回状态码200。
- 若资源的最后修改时间小于或等于If-Modified-Since，说明资源无新修改，则响应HTTP 304，告知浏览器继续使用所保存的cache。

```etag：``` 
- 服务器资源是否被修改的唯一标志。首次请求唯一标志被存到客户端数据库。
- 同理，再次请求时，请求头中携带```If-None-Match```字段。与被请求资源的唯一标识进行比对
- 若不同，说明资源又被改动过，则响应整片资源内容，返回状态码200；
- 若不同，说明资源没有被改动过，则响应HTTP 304，告知浏览器继续使用所保存的cache。

**对比缓存的缓存机制**，如下图：
<div style="text-align:center">
  <img :src="$withBase('/img/javascript/cache2.png')" alt="GitHub" title="GitHub2,Social Coding" width="auto" height="auto" />
</div>

### http缓存优先级
强制缓存优先级 **高于** 对比缓存。 也就是说，当执行强制缓存的规则时，如果缓存生效，直接使用缓存，**不再执行对比缓存规则**。
```
强制缓存: cache-control (http1.1) > expires(http1.0)、
对比缓存: etag(传送If-None-Match) > last-modified (传送If-Modified-Since)
```


<Vssue title="vssue-blog" />