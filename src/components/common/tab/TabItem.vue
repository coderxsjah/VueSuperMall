<template>
  <div id="tab-item" @click="itemClick">
    <div class="item-icon" v-show="!isActive"><slot name="icon"></slot></div>
    <div class="item-active-icon" v-show="isActive"><slot name="active-icon"></slot></div>
    <div class="item-text" :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabItem",
    props: {
      link: {
        type: String,
        required: true
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.link) !== -1
      },
      activeStyle() {
        return this.isActive ? {'color': 'red'} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.link)
      }
    }
  }
</script>

<style scoped>
  #tab-item {
    flex: 1;
  }

  .item-text {
    font-size: 12px;
    margin-top: 3px;
    color: #333;
  }
</style>
