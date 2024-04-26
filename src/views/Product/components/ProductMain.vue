<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

</script>

<template>
    <!-- 产品1 -->
    <div class="about-section pt-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="dreamit-about-thumb left">
                        <img src="@/assets/images/resource/about5.png" alt="">
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 ">
                    <div class="dreamhub-section-title about-items">
                        <h1>{{ t('product.about1_h1') }}</h1>
                        <p :class="{global_show : locale === 'zh'}">
                            <i class="bi bi-check-lg"></i> <strong>{{ t('product.about1_p1_strong') }}</strong>{{
                                t('product.about1_p1') }}
                        </p>
                        <p :class="{global_show : locale === 'zh'}">
                            <i class="bi bi-check-lg"></i> <strong>{{ t('product.about1_p2_strong') }} </strong> {{
                                t('product.about1_p2') }}
                        </p>
                        <p :class="{global_show : locale === 'zh'}">
                            <i class="bi bi-check-lg"></i> <strong>{{ t('product.about1_p3_strong') }} </strong> {{
                                t('product.about1_p3') }}
                        </p>
                        <p :class="{global_show : locale === 'zh'}">
                            <i class="bi bi-check-lg"></i> <strong>{{ t('product.about1_p4_strong') }} </strong> {{
                                t('product.about1_p4') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 产品2 -->
    <div class="about-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">

                    <div class="dreamhub-section-title about-items">
                        <h1> {{ t('product.about2_h1') }} </h1>
                        <p :class="{global_show : locale === 'zh'}">
                            <i class="bi bi-check-lg"></i> <strong>{{ t('product.about2_p1_strong') }} </strong> {{
                                t('product.about2_p1') }}
                        </p>
                        <p :class="{global_show : locale === 'zh'}">
                            <i class="bi bi-check-lg"></i> <strong>{{ t('product.about2_p2_strong') }} </strong> {{
                                t('product.about2_p2') }}
                        </p>
                        <p :class="{global_show : locale === 'zh'}">
                            <i class="bi bi-check-lg"></i> <strong>{{ t('product.about2_p3_strong') }} </strong> {{
                                t('product.about2_p3') }}
                        </p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="dreamit-about-thumb2">
                        <img src="@/assets/images/resource/about6.png" alt="">
                        <div class="about-shape">
                            <img src="@/assets/images/resource/ab-shap.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 产品3 -->
    <div class="about-section pt-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="dreamit-about-thumb left">
                        <img :class="{img_show : locale === 'en'}"  class="about-section3" src="@/assets/images/resource/about7.png" alt="">
                        <img :class="{img_show : locale === 'zh'}" class="about-section3" src="@/assets/images/resource/about10.png" alt="">
                        <!-- <img class="about-section3" :src="locale === 'en' ? '@/assets/images/resource/about10.png' : '@/assets/images/resource/about7.png'" alt="ddd"> -->

                    </div>
                </div>
                <div class="col-lg-6 col-md-12 ">
                    <div class="dreamhub-section-title about-items">
                        <h1> {{ t('product.about3_h1') }} </h1>
                        <p :class="{global_show : locale === 'zh'}"> <i class="bi bi-check-lg"></i> <strong> {{ t('product.about3_p2_strong') }} </strong> {{
                            t('product.about3_p2') }} </p>
                        <p :class="{global_show : locale === 'zh'}"> <i class="bi bi-check-lg"></i> <strong> {{ t('product.about3_p3_strong') }} </strong> {{
                            t('product.about3_p3') }} </p>
                        <p :class="{global_show : locale === 'zh'}"> <i class="bi bi-check-lg"></i> <strong> {{ t('product.about3_p4_strong') }} </strong> {{
                            t('product.about3_p4') }} </p>
                        <!-- <p> <i class="bi bi-check-lg"></i> <strong> {{ t('product.about3_p5_strong') }} </strong> {{
                            t('product.about3_p5') }} </p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.img_show {
    display: none;
}
.about-section3 {
    width: 500px;
}

.global_show {
	font-size: 14px;
}
</style>