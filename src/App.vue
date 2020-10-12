<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <MainTab/>
  </div>
</template>

<script>
  import MainTab from "./components/content/maintab/MainTab";
  export default {
    name:'app',
    components: {
      MainTab
    }
  }
</script>

<style>
</style>
