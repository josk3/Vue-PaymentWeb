<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

</script>

<template>
    <div class="service-section style-two upp">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="dreamhub-section-title text-center">
                        <h1>{{ t('product.service_h1') }} </h1>
                        <p :class="{global_show : locale === 'zh'}">{{ t('product.service_p') }}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <!-- 1 -->
                <div class="col-lg-4 col-md-6">
                    <div class="dreamit-service-box">
                        <div class="service-icon">
                            <img class="service-icon2" src="@/assets/images/resource/srvc-icon5.svg" alt="">
                        </div>
                        <div class="service-content">
                            <h2 class="service-title">{{ t('product.service1_h2') }} </h2>
                            <p :class="{global_show : locale === 'zh'}" class="service-desctiption"> {{ t('product.service1_p') }} </p>
                        </div>
                    </div>
                </div>

                <!-- 2 -->
                <div class="col-lg-4 col-md-6">
                    <div class="dreamit-service-box">
                        <div class="service-icon">
                            <img src="@/assets/images/resource/sr-icon.png" alt="">
                        </div>
                        <div class="service-content">
                            <h2 class="service-title"> {{ t('product.service2_h2') }} </h2>
                            <p :class="{global_show : locale === 'zh'}" class="service-desctiption">{{ t('product.service2_p') }}</p>
                        </div>
                    </div>
                </div>

                <!-- 3 -->
                <div class="col-lg-4 col-md-6">
                    <div class="dreamit-service-box">
                        <div class="service-icon">
                            <img class="service-icon2" src="@/assets/images/resource/srvc-icon6.svg" alt="">
                        </div>
                        <div class="service-content">
                            <h2 class="service-title"> {{ t('product.service3_h2') }}</h2>
                            <p :class="{global_show : locale === 'zh'}" class="service-desctiption"> {{ t('product.service3_p') }} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.service-icon2 {
	width: 50px;
	height: 50px;
}

.global_show {
	font-size: 14px;
}

</style>