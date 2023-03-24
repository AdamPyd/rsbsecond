// axiosRequestConfig.js

const config={
   // 登录校验
   doLoginConfig:{
       method:'post',
       url:'/user/login',
       port:8080,
   },
   // 登录状态验证
   loginStateConfig:{
       method:'get',
       url:'/user/loginState',
       proxy:{
           port:8080,
       }
   },
   // 退出登录
   loginOutConfig:{
       method:'get',
       url:'/user/loginOut',
       proxy:{
           port:8080,
       }
   },
    // 测试请求
    testConfig:{
        method:'get',
        url:'/api/testController',
        proxy:{
            port:8080,
        }
    }
}

export default config