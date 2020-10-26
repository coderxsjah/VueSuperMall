<template>
  <div class="detail-comment" v-if="Object.keys(comment).length !== 0">
    <div class="comment-top">
      <div class="comment-top-left">用户评价</div>
      <div class="comment-top-right">更多</div>
    </div>
    <div class="comment-content">
      <div class="user-info">
        <div class="user-img">
          <img :src="comment.user.avatar">
        </div>
        <div class="user-name">{{comment.user.uname}}</div>
      </div>
      <div class="text-comment">
        <div class="text">{{comment.content}}</div>
        <div class="date-info">
          <div class="create-date">{{showDate(comment.created)}}</div>
          <div class="goods-info">{{comment.style}}</div>
        </div>
      </div>
      <div class="comment-img" v-if="comment.images">
        <div v-for="item in comment.images" class="img-div" >
          <img :src="item"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "../../../common/util";

  export default {
    name: "DetailComment",
    props:{
      comment:{
        type:Object,
        default(){
          return {};
        }
      }
    },
    methods: {
      showDate: function (value) {
        let date = new Date(value*1000);
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .comment-top{
    border-top: solid 8px #eeeeee;
    border-bottom: solid 3px #eeeeee;
    line-height: 30px;
    width: 100%;
    display: flex;
  }
  .comment-top-left{
    flex: 1;
    text-align: left;
    padding-left: 10px;
  }
  .comment-top-right{
    flex: 1;
    text-align: right;
    padding-right: 10px;
  }
  .comment-content{
    border-bottom: solid 3px #eee;
  }
  .comment-content .user-info{
    display: flex;
    border-bottom: solid 1px #eee;
  }
  .user-img{
    padding: 10px;
    flex: 1;
  }
  .user-img img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .user-name{
    flex: 4;
    align-items: center;
    padding-top: 20px;
    font-family: "楷体";
  }
  .text{
    padding: 5px;
    border-bottom: solid 1px #eee;
  }
  .date-info{
    display: flex;
    padding: 5px;
  }
  .create-date{
    flex: 2;
  }
  .goods-info{
    flex: 3;
    font-size: 16px;
    color: #999999;
  }
  .comment-img{
    height: 80px;
  }
  .comment-img .img-div img{
    height: 80px;
    float: left;
    padding-left: 3px;
  }
</style>
