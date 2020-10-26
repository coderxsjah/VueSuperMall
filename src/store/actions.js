export default  {
  //添加到购物车
  addCart(context,payload){
    let oldProduct  = null;
    // for(let pd of state.cartList){
    //   if(pd.iid === payload.iid){
    //     oldProduct = pd;
    //   }
    // }
    oldProduct = context.state.cartList.find(item=>item.iid === payload.iid)
    if(oldProduct){
      context.commit("addCounter",oldProduct);
    }
    else{
      context.commit("addNewProduct",payload);
    }
  }
}
