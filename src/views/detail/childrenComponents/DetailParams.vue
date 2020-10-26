<template>
  <div class="detail-params">
    <table class="params-sizes">
      <tr v-for="(row,index) in params.sizes" :key="index">
        <td v-for="(item,ind) in row" :key="ind">{{item}}</td>
      </tr>
    </table>
    <table class="params-infos">
      <tr v-for="col in params.infos" :key="col">
        <td class="infos-key">{{col.key}}</td>
        <td class="infos-val">{{col.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="params.image">
      <img :src="params.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParams",
    props:{
      params:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .params-sizes,.params-infos{
    width: 100%;
    color: #666666;
    padding: 5px;
    text-align: center;
  }
  tr{
    line-height: 30px;
  }
  tr td{
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .params-infos tr .infos-key{
    width: 95px;
  }
  .params-infos tr .infos-val{
    color: #ff8198;
  }

  .info-img img{
    width: 100%;
    border-radius: 5%;
    padding: 3px;
  }
</style>
