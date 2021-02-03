# Js基础

动态语言 => 脚本语言 => 解释性语言 => 弱类型语言

静态语言 => 编译性语言 => 强类型语言



> null 空值 (用于初始化函数 初始化组件 销毁函数 占位等等)
>
> NaN (Not a Number)不是number。但是它是数字类型；
>
> NaN 与包括自己在内的任何值都不相等
>
> infinity => 数字类型(无穷)



js里面常用的引用值(object array function data RegExp)

原始值的值是存在栈内存的，引用值的值不存在栈内存，他是引用值的指针保存在栈内存



代码规范

~~~js
for(){}

if(){}

switch(){}

function(){}
~~~

一般上面的这些语句不用加分号，其他语句末尾最好将分号加上



## 运算：

任何字符串加上其他任何类型的值都是字符串

比较运算符：

```js
>、< 、>= 、<= 、== 、=== 、!= 、!==
```

Number:String数据和字符串比较  String => Number先将string转化成number

```js
let a = 1 > '2'
console.log('a',a) // false

let bool = 'a' > 'b'
console.log('bool1',bool1) // false

let bool2 = 'a' < 'b'
console.log('bool2',bool2) // false

let b1 = '4.5' < '11'
console.log('b1',b1)// false

let b2 = '4.5' > '11'
console.log('b2',b2)// false
```



字符串的比较都是比较ascll码的大小的

4.5和11的比较， 先用4和1比较，然后.(46)和1(49)等等依次向后比较，4比1大，就没有再向后面比较了

==相等是不看数据类型的

===全等是需要看数据类型的



多个if 分开写和 if下面用多个 else if(利用条件的互斥性)

尽量多用else if(性能比较好，判读一次比较好)

### 逻辑运算： 

与(&&)或(||)非(!)

> 假：undefined 、null 、NaN 、"" 、0 、false
>
> 真：除了上面这些，全部都为真

~~~js
let a1 = 1 && 2
let a2 = 1 || 2
console.log('a1',a1,'a2',a2)// a1 2 a2 1
~~~

为什么会是这种的情况：

&& 遇到真就往后走，遇到假或者走到最后就返回当前的值

|| 遇到假就往后走，遇到真或者走到最后就返回当前的值

~~~js
let a3 = 1 && 2 && 0 && 4
let a4 = 0 || 1 ||null
let a5 = 0 || null || undefined ||false

console.log('a3',a3,'a4',a4,'a5',a5)// a3 0 a4 1 a5 false
~~~

## 循环

```js
for(let i = 0;i < 10;i++){
 console.log('i',i)
}
-----------------
i 0
i 1
i 2
i 3
i 4
i 5
i 6
i 7
i 8
i 9
```

可以直接等价于

```js
let i = 0;
for(;i < 10;){
 console.log('i',i);
 i++;
}
```

这个格式就很熟悉了，和while循环很像了

```js
let i = 0;
while(i < 10){
 console.log('i',i);
 i++;
}
```

是不是很熟悉