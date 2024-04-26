<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>

<template>
    <!-- 产品1 -->
    <div class="about-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="dreamhub-section-title text-center about-section-flex">
                        <h1 style="width: 700px;"> {{ t('home.products1_h1') }} </h1>
                        <p :class="{ global_show: locale === 'zh' }" style="width: 700px;">{{ t('home.products1_p1') }}</p>
                    </div>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="dreamit-about-thumb left">
                        <img src="@/assets/images/resource/about4.png" alt="">
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 ">
                    <div class="dreamhub-section-title">
                        <h1> {{ t('home.products1_h1_h1') }}</h1>
                        <p :class="{ global_show: locale === 'zh' }"> {{ t('home.products1_p1_p2') }}</p>
                    </div>
                    <div class="payment-button">
                        <RouterLink to="/product">
                            {{ t('home.products_Started') }} <i class="bi bi-arrow-right"></i>
                        </RouterLink>
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
                    <div class="dreamhub-section-title">
                        <h1> {{ t('home.products2_h1') }} </h1>
                        <p :class="{ global_show: locale === 'zh' }">{{ t('home.products2_p1') }}</p>
                        <p :class="{ global_show: locale === 'zh' }" class="section">{{ t('home.products2_p2') }}</p>
                    </div>
                    <div class="payment-button">
                        <RouterLink to="/product">
                            {{ t('home.products_Started') }} <i class="bi bi-arrow-right"></i>
                        </RouterLink>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="dreamit-about-thumb2">
                        <img src="@/assets/images/resource/about2.png" alt="">
                        <div class="about-shape">
                            <img src="@/assets/images/resource/ab-shap.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.global_show {
    font-size: 14px;
}
</style>