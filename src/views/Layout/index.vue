<script setup>
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
import LayoutFixed from '@/views/Layout/components/LayoutFixed.vue'

import {ref, onMounted} from 'vue'

const totop = ref();
 
const scrollToTop = () => {
  window.scrollTo({
    // top: document.documentElement.offsetHeight, //回到底部
    top: 0, //回到顶部
    left: 0,
    behavior: "smooth", //smooth 平滑；auto:瞬间
  });
};
 
onMounted(() => {
  // 页面滚动窗口监听事件
  window.onscroll = function () {
    // 获取浏览器卷去的高度
    let high = document.documentElement.scrollTop || document.body.scrollTop; //兼容各浏览器
    if (high >= 400) {
      totop.value.style.display = "block";
    } else {
      totop.value.style.display = "none";
    }
  }
}
)
</script>

<template>
    <div>
        <LayoutFixed />
        <LayoutHeader />
        <router-view />

        <div ref="totop" class="totop" @click="scrollToTop"><i class="iconfont icon-dingbu"></i></div>
    </div>
</template>

<style scoped>

.totop {
    cursor: pointer;
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: none;
    position: fixed;
    bottom: 100px;
    right: 50px;
    background-color: #fdeaa8;
}

.totop:hover {
    transition: 1s all linear;
    background-color: #FF9200;
}

.totop i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
}

</style>