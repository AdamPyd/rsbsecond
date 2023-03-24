//axiosUtil.js

import axios from 'axios'

const axiosUtil ={
    axiosMethod: (config:any) => {
        console.log(config);
        let proxyPort = config?.proxy?.port;
        let proxy = {
            host: "www.baidu.com",
            port: 80,
            auth: {
                username: "test",
                password:"test",
            },
            protocol: "https",
        };
        axios({
            method: config.method,
            url: config.url,
            params: config.params ? config.params : null,
            data: config.data ? config.data : null,
            proxy,
        }).then(config.callback).catch(config.catch ? config.catch : () => {})
    }
};

export default axiosUtil;