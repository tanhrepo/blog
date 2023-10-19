# CSS笔记

```css
{
    white-space:nowrap; //不换行
	flex-shrink: 0; //子元素不缩放
}
```



### 滚动条样式：

```css
{
    &::-webkit-scrollbar {   
        width: 5px;    /*高宽分别对应横竖滚动条的尺寸*/   
        height: 5px; 
    }
    &::-webkit-scrollbar-thumb { 
        background-color: #c9defd;  
        border-radius: 5px;   
        width: 5px;  
    }
    &::-webkit-scrollbar-corner {  
        background-color: rgba(0, 0, 0, 0); 
    }
}
```

