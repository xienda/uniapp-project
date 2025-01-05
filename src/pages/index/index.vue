<script setup lang="ts">
//
import { getHomeBannerAPI } from '@/services/home'
import { getHomeCategoryAPI } from '@/services/home'
import { getHomeHotAPI } from '@/services/home'

import CustomNavbar from './Compoents/CustomNavbar.vue';
import CategoryPanel from './Compoents/CategoryPanel.vue';
import HotPanel from './Compoents/HotPanel.vue';


import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import type { BannerItem, CategoryItem, HotItem } from '@/types/home';
import { resolveSoa } from 'dns';



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

</script>

<template>
  <!--自定义导航栏-->
  <CustomNavbar />
  <!--自定义轮播图-->
  <XtxSwiper :list="bannerList" />
  <!--分类面板-->
  <CategoryPanel :list="categoryList" />
  <!--热门推荐-->
  <HotPanel :list="hotlist" />

  <view class="index">index</view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
