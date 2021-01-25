# nginx

使用nginx操作命令的前提条件：必须进入nginx的目录

~~~
/usr/local/nginx/sbin
~~~



## 常用命令

~~~
# 快速关闭Nginx，可能不保存相关信息，并迅速终止web服务
nginx -s stop
# 平稳关闭Nginx，保存相关信息，有安排的结束web服务
nginx -s quit
# 因改变了Nginx相关配置，需要重新加载配置而重载
nginx -s reload
# 重新打开日志文件
nginx -s reopen
# 为 Nginx 指定一个配置文件，来代替缺省的
nginx -c filename
# 不运行，而仅仅测试配置文件。nginx 将检查配置文件的语法的正确性，并尝试打开配置文件中所引用到的文件
nginx -t
#  显示 nginx 的版本
nginx -v
# 显示 nginx 的版本，编译器版本和配置参数
nginx -V
# 格式换显示 nginx 配置参数
2>&1 nginx -V | xargs -n1
2>&1 nginx -V | xargs -n1 | grep lua
~~~

启动 Nginx：

`sudo nginx`或 `sudo brew services start nginx`

停止 Nginx：

`sudo nginx -s stop`或 `sudo brew services stop nginx`

热重启 Nginx：

`sudo nginx -s reload`

强制停止 Nginx：

`sudo pkill -9 nginx`



***tasklist /fi “imagename eq nginx.exe”*** 



1. 通过ps命令查询正在运行程序的进程号

```bash
ps -ef|grep nginx

查询结果：
root     10995 10989  0 1月12 ?       00:09:27 hexo                                                                            
root     15202 15180  0 13:49 pts/0    00:00:00 grep --color=auto hexo 
12345
```

2. 通过 ll /proc/{进程号}/cwd查看运行目录

```bash
ll /proc/10995/cwd

查询结果：
lrwxrwxrwx 1 root root 0 1月  12 00:05 /proc/10995/cwd -> /home/blog
```