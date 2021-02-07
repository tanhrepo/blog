# ruoyi权限



login.js里面导出了这个方法 `getInfo`

~~~js
// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/getInfo',
    method: 'get'
  })
}
~~~

找调用这个方法的地方

ruoyi-ui/src/store/modules/user.js

~~~js
 // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(res => {
          const user = res.user
          const avatar = user.avatar == "" ? require("@/assets/images/profile.jpg") : process.env.VUE_APP_BASE_API + user.avatar;
          if (res.roles && res.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', res.roles)
            commit('SET_PERMISSIONS', res.permissions)
          } else {
            commit('SET_ROLES', ['ROLE_DEFAULT'])
          }
          commit('SET_NAME', user.userName)
          commit('SET_AVATAR', avatar)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
~~~

可以看到 `GetInfo `调用了 `getInfo`

再找调用

ruoyi-ui/src/permission.js

~~~js
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    /* has token*/
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {
        // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetInfo').then(res => {
          // 拉取user_info
          const roles = res.roles
          store.dispatch('GenerateRoutes', { roles }).then(accessRoutes => {
            // 根据roles权限生成可访问的路由表
            router.addRoutes(accessRoutes) // 动态添加可访问路由表
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
          })
        }).catch(err => {
            store.dispatch('LogOut').then(() => {
              Message.error(err)
              next({ path: '/' })
            })
          })
      } else {
        next()
      }
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

~~~

判断当前用户是否已拉取完user_info信息那里调用了`GetInfo`

转换路由的时候，钩子函数。一登陆成功就会路由转换一波



去登录的页面看一下

```js
handleLogin() {
  this.$refs.loginForm.validate(valid => {
    if (valid) {
      this.loading = true;
      if (this.loginForm.rememberMe) {
        Cookies.set("username", this.loginForm.username, { expires: 30 });
        Cookies.set("password", encrypt(this.loginForm.password), { expires: 30 });
        Cookies.set('rememberMe', this.loginForm.rememberMe, { expires: 30 });
      } else {
        Cookies.remove("username");
        Cookies.remove("password");
        Cookies.remove('rememberMe');
      }
      this.$store.dispatch("Login", this.loginForm).then(() => {
        this.$router.push({ path: this.redirect || "/" }).catch(()=>{});
      }).catch(() => {
        this.loading = false;
        this.getCode();
      });
    }
  });
}
```

this.$store.dispatch("Login", this.loginForm).then(() => {}

点击进去，是vueX处理登录,`(ruoyi-ui/src/store/modules/user.js)`

~~~js
// 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      const password = userInfo.password
      const code = userInfo.code
      const uuid = userInfo.uuid
      return new Promise((resolve, reject) => {
        login(username, password, code, uuid).then(res => {//进行登陆
          setToken(res.token)
          commit('SET_TOKEN', res.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
~~~



登录后设置token了就完事了，再返回login页面，进行路由切换

~~~js
this.$router.push({ path: this.redirect || "/" }).catch(()=>{});
~~~

切换路由时，被路由的钩子函数挡住

 ~~~js
   router.beforeEach((to, from, next) => {
     NProgress.start()
     if (getToken()) {//前面登录完成，已经有了token
       /* has token*/
       if (to.path === '/login') {
         next({ path: '/' })
         NProgress.done()
       } else {
         if (store.getters.roles.length === 0) {
           // 判断当前用户是否已拉取完user_info信息
           store.dispatch('GetInfo').then(res => {//GetInfo获取用户信息
             // 拉取user_info
             const roles = res.roles
             store.dispatch('GenerateRoutes', { roles }).then(accessRoutes => {
               // 根据roles权限生成可访问的路由表
               router.addRoutes(accessRoutes) // 动态添加可访问路由表
               next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
             })
           }).catch(err => {
               store.dispatch('LogOut').then(() => {
                 Message.error(err)
                 next({ path: '/' })
               })
             })
         } else {
           next()
         }
       }
     } else {
       // 没有token
       if (whiteList.indexOf(to.path) !== -1) {
         // 在免登录白名单，直接进入
         next()
       } else {
         next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
         NProgress.done()
       }
     }
   })
 ~~~

这个时候就正式调用GetInfo。最后进入api

~~~js
// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/getInfo',
    method: 'get'
  })
}
~~~

此时，视线转向后端

src/main/java/com/ruoyi/web/controller/system/SysLoginController.java

~~~java
 	/**
     * 获取用户信息
     * 
     * @return 用户信息
     */
    @GetMapping("getInfo")
    public AjaxResult getInfo()
    {
        LoginUser loginUser = tokenService.getLoginUser(ServletUtils.getRequest());
        SysUser user = loginUser.getUser();
        // 角色集合
        Set<String> roles = permissionService.getRolePermission(user);
        // 权限集合
        Set<String> permissions = permissionService.getMenuPermission(user);
        AjaxResult ajax = AjaxResult.success();
        ajax.put("user", user);
        ajax.put("roles", roles);
        ajax.put("permissions", permissions);
        return ajax;
    }
~~~

登录的时候就获取角色和权限，点进菜单权限`getMenuPermission`

~~~java
    /**
     * 获取菜单数据权限
     * 
     * @param user 用户信息
     * @return 菜单权限信息
     */
    public Set<String> getMenuPermission(SysUser user)
    {
        Set<String> perms = new HashSet<String>();//new 了一个HashSet来存贮全部的权限
        // 管理员拥有所有权限
        if (user.isAdmin())
        {
            perms.add("*:*:*");//如果是超级管理员，获得所有的权限
        }
        else
        {
            perms.addAll(menuService.selectMenuPermsByUserId(user.getUserId()));
            //否则去数据库里面查询你到底有哪些权限
        }
        return perms;
    }
~~~

~~~java
public boolean isAdmin()
    {
        return isAdmin(this.userId);
    }

    public static boolean isAdmin(Long userId)
    {
        return userId != null && 1L == userId;
    }
~~~

userId为1L时，为超级管理员

否则通过userId去数据库查权限

~~~java
    /**
     * 根据用户ID查询权限
     * 
     * @param userId 用户ID
     * @return 权限列表
     */
    @Override
    public Set<String> selectMenuPermsByUserId(Long userId)
    {
        List<String> perms = menuMapper.selectMenuPermsByUserId(userId);
        Set<String> permsSet = new HashSet<>();
        for (String perm : perms)
        {
            if (StringUtils.isNotEmpty(perm))
            {
                permsSet.addAll(Arrays.asList(perm.trim().split(",")));
            }
        }
        return permsSet;
    }
~~~

首先去查询数据库

~~~
selectMenuPermsByUserId
~~~

~~~sql
	<select id="selectMenuPermsByUserId" parameterType="Long" resultType="String">
		select distinct m.perms
		from sys_menu m
			 left join sys_role_menu rm on m.menu_id = rm.menu_id
			 left join sys_user_role ur on rm.role_id = ur.role_id
			 left join sys_role r on r.role_id = ur.role_id
		where m.status = '0' and r.status = '0' and ur.user_id = #{userId}
	</select>
~~~

查询完后就处理添加，然后返回permsSet，



