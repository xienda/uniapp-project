<script setup lang="ts">
//

import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';


import { getHomeBannerAPI } from '@/services/home'
import { getHomeCategoryAPI } from '@/services/home'
import { getHomeHotAPI } from '@/services/home'

import CustomNavbar from './Compoents/CustomNavbar.vue';
import CategoryPanel from './Compoents/CategoryPanel.vue';
import HotPanel from './Compoents/HotPanel.vue';
import XtxGuess from '@/components/XtxGuess.vue';

import type { BannerItem, CategoryItem, HotItem } from '@/types/home';
import type { XtxGuessInstance } from '@/types/component'


// 获取轮播图数据
const bannerList = ref<BannerItem[]>([]) // 存取获取的数据
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  //console.log(res)
  bannerList.value = res.result
}
// 获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// 获取热门推荐数据
const hotlist = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotlist.value = res.result
}



// 页面加载
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})

// 获取猜你喜欢组件实例
const guessRef = ref<XtxGuessInstance>()

// 滚动触底
const onScrolltolower = () => {
  guessRef.value?.getMore()
}

</script>

<template>
  <!--自定义导航栏-->
  <CustomNavbar />
  <!--滚动容器-->
  <scroll-view @scrolltolower="onScrolltolower" class="scroll-view" scroll-y>
    <!--自定义轮播图-->
    <XtxSwiper :list="bannerList" />
    <!--分类面板-->
    <CategoryPanel :list="categoryList" />
    <!--热门推荐-->
    <HotPanel :list="hotlist" />
    <!--猜你喜欢-->
    <XtxGuess ref="guessRef" />
  </scroll-view>

</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1
}
</style>
