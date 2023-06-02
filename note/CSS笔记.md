# CSS笔记

## 哪个属性将连续播放嵌入到 audio 元素中的音频(loop)
|属性		|描述
|:-:		|:-
|autoplay	|如果出现该属性，则音频在就绪后马上播放。
|controls	|如果出现该属性，则向用户显示控件，比如播放按钮。
|loop		|如果出现该属性，则每当音频结束时重新开始播放。
|muted		|规定视频输出应该被静音。					
|preload	|如果出现该属性，则音频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。
|url		|要播放的音频的 URL。

## css 如何使用服务端的字体：@font-face
指定名为"myFirstFont"的字体，并指定在哪里可以找到它的URL：
```
@font-face
{
@font-face
{
	font-family: myFirstFont;
	src: url('Sansation_Light.ttf')
		,url('Sansation_Light.eot'); /* IE9 */
}

div
{
	font-family:myFirstFont;
}
```
#### 属性定义及使用说明
@font-face规则，网页设计师再也不必使用的"web-safe"的字体之一。

字体的名称，font - face规则：
```
font-family: myFirstFont;
```
字体文件包含在您的服务器上的某个地方，参考CSS：
```
src: url('Sansation_Light.ttf')
```
如果字体文件是在不同的位置，请使用完整的URL：
```
src: url('http://www.w3cschool.css/css3/Sansation_Light.ttf')
```

## 不换行必须设置哪些项
word-break;word-space

**通过使用 word-break 属性，可以让浏览器实现在任意位置的换行。**

|值			|描述							|
|:-:		|:-								|
|normal		|使用浏览器默认的换行规则。		|
|break-all	|允许在单词内换行。				|
|keep-all	|只能在半角空格或连字符处换行。		|

**white-space 属性设置如何处理元素内的空白。**

|值			|描述
|:-:		|:-
|normal		|默认。空白会被浏览器忽略。
|pre		|空白会被浏览器保留。其行为方式类似 HTML 中的 \<pre> 标签。
|nowrap		|文本不会换行，文本会在在同一行上继续，直到遇到 \<br> 标签为止。
|pre-wrap	|保留空白符序列，但是正常地进行换行。
|pre-line	|合并空白符序列，但是保留换行符。
|inherit	|规定应该从父元素继承 white-space 属性的值。

## 以下关于跨域的描述哪些是正确的:
>1. CSS文件的加载不受跨域限制  
>2. `window.onerror`方法默认情况下无法获取跨域脚本的报错详情  
>3. canvas中使用drawImage贴图会受跨域限制
后续。。。。

## 优化滚动性能:
>在滚动中对滚动函数进行节流处理  
滚动中减少导致重绘的操作  
滚动中减少导致重排的操作  
通过给滚动内的子元素开启硬件加速  

## CSS颜色表示红色？
1. 颜色名  
		如：red，blue，green  
2. 十六进制(红绿蓝)  
		#f00、#ff0000表示红色  
		一般为3或者6位数字，题目4位？？？  
		4位的十六进制颜色代码看的我一脸懵逼。 
		查了一下资料——4位的十六进制中前3位表示rgb三颜色，
		最后一位表示透明度。
		换句话说，4位的十六进制颜色代码里的每一位其实就分别代表了rgba里的r，g，b，a。
		本题的＃f00f，其实等于rgba(255, 0, 0, 1)
3. rgb(r,g,b)  
		如：rgb(255,0,0)表示红色   
4. hsl(Hue,Saturation,Lightness)/（色调、饱和度、亮度）   
hsl(0,100%,100%)  
		0：红色  
		120：绿色，  
		240： 蓝色   

## 块级元素里面有一行文字，能实现文字前留白两字的css属性有：???
1. margin-left  
1. padding-left  
1. text-indent  //text-indent 首行缩进  
1. letter-spacing  //letter-spacing：字符之间的距离  
		所以选择123
		
## 定义周和年的控件
date 选取日、月、年 month 选取月和年  
week 选取周和年  
time 选取时间（小时和分钟）

