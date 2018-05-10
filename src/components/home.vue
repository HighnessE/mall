<template>
  <div class="home">
    <div class="search">
      <search></search>
    </div>
    <div class="carousel">
      <swiper :options="swiperOption" ref="mySwiper" class="carouselHeight">
        <swiper-slide v-for="(item,index) in banner" :key="index">
          <img v-lazy="item.imageUrl" alt="banner">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <div class="category">

    </div>     
  </div>
</template>

<script>
import { getMockList,getMockBanner,getMockMilk,getMockFruit } from '../api'
import { Search } from 'vux'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { fail } from 'assert';
export default {
  name: 'HelloWorld',
  components:{
    swiper,
    swiperSlide,
    Search
  },
  created () {
    this.$vux.loading.show({
      title:'玩命加载中'
    })
    this.getData()
  },
  data () {
    return {
      listArray: [],
      banner:[],
      loading:true,
      swiperOption: {
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: true,
        loop:true,
        direction : 'horizontal',
        pagination : {
          el:'.swiper-pagination',
          clickable:true
        }
      }
    }
  },
  methods : {
    async getData () {
      let { listArray } = await getMockList();
      let { banner } = await getMockBanner();
      this.listArray = listArray;
      this.banner = banner;
      this.$vux.loading.hide();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '~vux/src/styles/close';
  .home {
    .search {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
    .carousel {
      height: 334px;
      margin-top: 88px;
      .carouselHeight {
        height: 100%;
      }
    }
    .category {
      width: 728px;
      height: 160px;
      margin: 20px auto;
      background: #fff;
      border-radius: 24px;
    }
  }
</style>
