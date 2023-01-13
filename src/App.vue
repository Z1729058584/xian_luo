<template>
  <div id="app">
    <!-- 路由视图，显示路由组件 -->

    <HeaderGuide></HeaderGuide>
    <router-view />
  </div>
</template>

<script>
// 引入头部文件

import HeaderGuide from './components/HeaderGuide/HeaderGuide'

export default {
  name: 'app',
  components: {
    HeaderGuide
  }
}
</script>

<style>
</style>
