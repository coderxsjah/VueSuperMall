import axios from "axios"

export function request(config){
  //创建axios实例
  const instance = axios.create({
    baseURL:'http://152.136.185.210:8000',
    timeout:10 * 1000,
  })
  //请求拦截器
  instance.interceptors.request.use(config=>{
    return config
  },err=>{
    console.log("请求出错:")
    console.log(err)
  })
  //响应拦截器
  instance.interceptors.response.use(res=>{
    return res.data;
  },err=>{
    console.log("响应出错:")
    console.log(err);
  });
  //返回真正的请求
  return instance(config);
}
