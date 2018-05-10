<template>
  <div class="bottom">
    <router-link to="/home"><i class="iconfont icon-shouye"></i>商城</router-link>
    <router-link to="/classify"><i class="iconfont icon-leimupinleifenleileibie"></i>分类</router-link>
    <router-link to="/cart"><i class="iconfont icon-gouwuche"></i>购物车</router-link>
    <router-link to="/center"><i class="iconfont icon-huiyuanzhongxin"></i>会员中心</router-link>
  </div>
</template>
<script>
  export default {
    name: 'bottom'
  }
</script>
<style lang="less" scoped>
  .bottom {
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background: rgba(247, 248, 250, 0.6);
    border-top: 1px solid #d3d3d3;
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      width: 20%;
      height: 100px;
      color: #333;
      .iconfont {
        font-size: 32px;
      }
    }
    .router-link-active {
      color: #EC8AC1;
    }
  }
</style>
