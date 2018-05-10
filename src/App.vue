<template>
  <div id="app">
    <transition enter-active-class="fadeInRight" leave-active-class="fadeOutLeft" mode="out-in">
      <router-view class="animated"></router-view>
    </transition>
    <bottom></bottom>
  </div>
</template>

<script>
import Bottom from './common/bottom/bottom'
export default {
  name: 'app',
  components :{
    Bottom
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import url('../static/css/animate.css');
body {
  background-color:#F7F7F7;
}
</style>
