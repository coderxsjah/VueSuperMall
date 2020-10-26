/*
      *防抖函数
       */
export function  debounce(func,delay){
  let timer = null;
  return function(...args){
    if(timer){
      //清除定时器
      clearTimeout(timer)
    }
    timer = setTimeout(()=>{
      func.apply(this,args);//调用传入的函数
    },delay)
  }
}
