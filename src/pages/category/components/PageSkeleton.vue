<!--
此文件为开发者工具生成，生成时间: 2025/1/21上午10:41:22
使用方法：
在 D:\JavaProject\uniapp\shop\dist\dev\mp-weixin\pages\category\category.wxml 引入模板

```
<import src="category.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\JavaProject\uniapp\shop\dist\dev\mp-weixin\pages\category\category.wxss 中引入样式
```
@import "./category.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
    <view class="sk-container">
        <view class="viewport viewport">
            <view class="search search">
                <view class="input input">
                    <text
                        class="icon-search sk-transparent sk-text-14-2857-565 sk-text sk-pseudo sk-pseudo-circle">女靴</text>
                </view>
            </view>
            <view class="categories categories">
                <scroll-view :scroll-y="true" class="primary primary">
                    <view class="item active sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-593 sk-text">居家</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-96 sk-text">美食</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-748 sk-text">服饰</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-155 sk-text">母婴</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-280 sk-text">个护</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-199 sk-text">严选</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-482 sk-text">数码</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-413 sk-text">运动</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-78 sk-text">杂项</text>
                    </view>
                </scroll-view>
                <scroll-view :scroll-y="true" class="secondary secondary">
                    <view is="components/XtxSwiper" class="banner banner">
                        <view class="carousel XtxSwiper--carousel">
                            <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
                                <swiper-item
                                    style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
                                    <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                                        <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                                    </navigator>
                                </swiper-item>
                                <swiper-item
                                    style="position: absolute; width: 100%; height: 100%; transform: translate(100%, 0px) translateZ(0px);">
                                    <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                                        <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                                    </navigator>
                                </swiper-item>
                            </swiper>
                            <view class="indicator XtxSwiper--indicator">
                                <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
                                <text class="dot XtxSwiper--dot"></text>
                                <text class="dot XtxSwiper--dot"></text>
                                <text class="dot XtxSwiper--dot"></text>
                                <text class="dot XtxSwiper--dot"></text>
                            </view>
                        </view>
                    </view>
                    <view class="panel panel">
                        <view class="title title">
                            <text class="name sk-transparent sk-text-26-6667-207 sk-text">居家生活用品</text>
                            <navigator
                                class="more sk-transparent sk-text-30-0000-511 sk-text sk-pseudo sk-pseudo-circle"
                                hover-class="none">全部</navigator>
                        </view>
                        <view class="section section">
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-334 sk-text">极光限定 珠光蓝珐琅锅
                                </view>
                                <view class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-204 sk-text">199.00</text>
                                </view>
                            </navigator>
                        </view>
                    </view>
                    <view class="panel panel">
                        <view class="title title">
                            <text class="name sk-transparent sk-text-26-6667-235 sk-text">收纳</text>
                            <navigator
                                class="more sk-transparent sk-text-30-0000-413 sk-text sk-pseudo sk-pseudo-circle"
                                hover-class="none">全部</navigator>
                        </view>
                        <view class="section section">
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-853 sk-text">给衣柜减减肥，真空防潮压缩袋
                                </view>
                                <view class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-617 sk-text">79.00</text>
                                </view>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-681 sk-text">爆款明星好物，抽屉式透明储物柜
                                </view>
                                <view class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-914 sk-text">129.00</text>
                                </view>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-522 sk-text">衣柜省空间神器，棉麻涤·收纳挂袋
                                </view>
                                <view class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-753 sk-text">55.00</text>
                                </view>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-976 sk-text">换季好帮手，大容量防尘衣物收纳袋
                                </view>
                                <view class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-52 sk-text">69.00</text>
                                </view>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-690 sk-text">可水洗的布艺收纳盒</view>
                                <view class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-239 sk-text">29.90</text>
                                </view>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-426 sk-text">开发员自留款，带滚轮双层脏衣篓
                                </view>
                                <view class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-464 sk-text">125.00</text>
                                </view>
                            </navigator>
                        </view>
                    </view>
                </scroll-view>
            </view>
        </view>
    </view>
</template>

<style>
/*
此文件为开发者工具生成，生成时间: 2025/1/21上午10:41:22

在 D:\JavaProject\uniapp\shop\dist\dev\mp-weixin\pages\category\category.wxss 中引入样式
```
@import "./category.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
    color: transparent !important;
}

.sk-text-14-2857-565 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 39.2000rpx;
    position: relative !important;
}

.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
}

.sk-text-14-2857-593 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-96 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-748 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-155 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-280 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-199 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-482 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-413 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-78 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-26-6667-207 {
    background-image: linear-gradient(transparent 26.6667%, #EEEEEE 0%, #EEEEEE 73.3333%, transparent 0%) !important;
    background-size: 100% 60.0000rpx;
    position: relative !important;
}

.sk-text-30-0000-511 {
    background-image: linear-gradient(transparent 30.0000%, #EEEEEE 0%, #EEEEEE 70.0000%, transparent 0%) !important;
    background-size: 100% 60.0000rpx;
    position: relative !important;
}

.sk-text-14-2857-334 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-opacity {
    opacity: 0 !important;
}

.sk-text-14-2857-204 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-26-6667-235 {
    background-image: linear-gradient(transparent 26.6667%, #EEEEEE 0%, #EEEEEE 73.3333%, transparent 0%) !important;
    background-size: 100% 60.0000rpx;
    position: relative !important;
}

.sk-text-30-0000-413 {
    background-image: linear-gradient(transparent 30.0000%, #EEEEEE 0%, #EEEEEE 70.0000%, transparent 0%) !important;
    background-size: 100% 60.0000rpx;
    position: relative !important;
}

.sk-text-14-2857-853 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-617 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-681 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-914 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-522 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-753 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-976 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-52 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-690 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-239 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-426 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-464 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-image {
    background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
    background: #EFEFEF !important;
    background-image: none !important;
    color: transparent !important;
    border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
    border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
    border-radius: 50% !important;
}

.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
}
</style>