<script setup lang="ts">
//
import { getHomeBannerAPI } from '@/services/home'
import CustomNavbar from './Compoents/CustomNavbar.vue';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import type { BannerItem } from '@/types/home';
import CategoryPanel from './Compoents/CategoryPanel.vue';

const bannerList = ref<BannerItem[]>([])

const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  //console.log(res)
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
})

</script>

<template>
  <!--自定义导航栏-->
  <CustomNavbar />
  <!--自定义轮播图-->
  <XtxSwiper :list="bannerList" />
  <!--分类面板-->
  <CategoryPanel />
  <view class="index">index</view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
