<script setup>
import FooterHome from '@/components/FooterHome/index.vue'
import HomeScroll from '@/views/Home/components/HomeScroll.vue'
import HomeAdvantage from '@/views/Home/components/HomeAdvantage.vue'
import HomeProduct from '@/views/Home/components/HomeProduct.vue'
import HomeFeedback from '@/views/Home/components/HomeFeedback.vue'
import HomeGlobal from '@/views/Home/components/HomeGlobal.vue'
import HomeCover from '@/views/Home/components/HomeCover.vue'

</script>

<template>
    <!-- 展示面 -->
    <HomeCover/>

    <!-- 图片无限滚动 -->
    <HomeScroll/>

    <!-- 行业优势 -->
    <HomeAdvantage/>

    <!-- 产品 -->
    <HomeProduct/>

    <!-- 用户反馈 -->
    <HomeFeedback/>

    <!-- 轻松触达全球 -->
    <HomeGlobal/>

    <!-- 底部 -->
    <FooterHome/>
</template>

<style scoped>

</style>