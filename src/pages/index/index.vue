<script setup lang="ts">
//

import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';


import { getHomeBannerAPI } from '@/services/home'
import { getHomeCategoryAPI } from '@/services/home'
import { getHomeHotAPI } from '@/services/home'

import CustomNavbar from './compoents/CustomNavbar.vue';
import CategoryPanel from './compoents/CategoryPanel.vue';
import HotPanel from './compoents/HotPanel.vue';
import XtxGuess from '@/components/XtxGuess.vue';
import PageSkeleton from './compoents/PageSkeleton.vue'

import type { BannerItem, CategoryItem, HotItem } from '@/types/home';

import { useGuessList } from '@/composables';


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
// 是否加载中标记
const isLoading = ref(false)


// 页面加载
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(),
  getHomeCategoryData(),
  getHomeHotData()])

  isLoading.value = false
})

// 猜你喜欢组合式函数调用
const { guessRef, onScrolltolower } = useGuessList()

// 自定义下拉刷新被触发
const isTriggered = ref(false)


const onrefresherrefresh = async () => {
  // 开始动画
  isTriggered.value = true
  // 重置猜你喜欢数据
  guessRef.value?.resetData()
  // 加载数据
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData(), guessRef.value?.getMore()])
  // 关闭动画

  isTriggered.value = false
}
</script>

<template>
  <!--自定义导航栏-->
  <CustomNavbar />
  <!--滚动容器-->
  <scroll-view refresher-enabled @refresherrefresh="onrefresherrefresh" :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower" class="scroll-view" scroll-y>
    <!--骨架屏-->
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!--自定义轮播图-->
      <XtxSwiper :list="bannerList" />
      <!--分类面板-->
      <CategoryPanel :list="categoryList" />
      <!--热门推荐-->
      <HotPanel :list="hotlist" />
      <!--猜你喜欢-->
      <XtxGuess ref="guessRef" />
    </template>

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
