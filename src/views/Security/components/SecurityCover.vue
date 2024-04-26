<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

</script>

<template>
    <!-- 封面 -->
    <div class="about-us-section">
        <img src="@/assets/images/resource/header4.jpg" alt="">
        <div class="about-us-box">
            <h1 class="about-us-h1">{{ t('security.security_h1') }}</h1>
            <p class="about-us-p" :class="{ global_show: locale === 'zh' }">
                {{ t('security.security_p') }}
            </p>
        </div>
    </div>
</template>

<style scoped>
/* 展示面 */
.about-us-section {
    position: relative;
}

.about-us-section img {
    width: 100%;
}

.about-us-box {
    width: 636px;
    position: absolute;
    color: #fff;
    top: 305px;
    left: 33%;
    transform: translate(-50%, -50%);
}

.about-us-h1 {
    font-size: 60px;
    line-height: 70px;
    font-weight: 700;
    color: #fdeaa8;
}

.about-us-p {
    padding: 26px 0 26px;
    color: #fff;
    font-size: 17px;
}

@media (min-width: 1300px) and (max-width: 1700px) {
    .about-us-box {
        left: 29%;
    }
}

@media (min-width: 1300px) and (max-width: 1499px) {
    .about-us-box {
        top: 50%;
    }
}
</style>