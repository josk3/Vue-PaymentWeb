<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>

<template>
    <!-- 行业优势 -->
    <div class="service-section">
        <div class="container">
            <div class="row align-items-center">

            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="dreamhub-section-title text-center">
                        <h1> {{ t('home.service_h1') }} </h1>
                        <p :class="{ global_show: locale === 'zh' }">{{ t('home.service_p') }}</p>
                    </div>
                </div>
            </div>
            <div class="row">

                <!-- 安全 -->
                <div class="col-lg-6 col-md-6">
                    <div class="dreamit-service-box">
                        <div class="service-icon">
                            <img src="@/assets/images/resource/srvc-icon.svg" alt="">
                        </div>
                        <div class="service-content">
                            <h2 class="service-title"> {{ t('home.service1_h2') }} </h2>
                            <p :class="{ global_show: locale === 'zh' }" class="service-desctiption">{{ t('home.service1_p')
                            }}</p>
                        </div>
                    </div>
                </div>

                <!-- 便捷  -->
                <div class="col-lg-6 col-md-6">
                    <div class="dreamit-service-box">
                        <div class="service-icon">
                            <img src="@/assets/images/resource/srvc-icon2.svg" alt="">
                        </div>
                        <div class="service-content">
                            <h2 class="service-title"> {{ t('home.service2_h2') }} </h2>
                            <p :class="{ global_show: locale === 'zh' }" class="service-desctiption">{{ t('home.service2_p')
                            }}</p>
                        </div>
                    </div>
                </div>

                <!-- 省心  -->
                <div class="col-lg-6 col-md-6">
                    <div class="dreamit-service-box">
                        <div class="service-icon">
                            <img src="@/assets/images/resource/srvc-icon3.svg" alt="">
                        </div>
                        <div class="service-content">
                            <h2 class="service-title"> {{ t('home.service3_h2') }} </h2>
                            <p :class="{ global_show: locale === 'zh' }" class="service-desctiption">{{ t('home.service3_p')
                            }}</p>
                        </div>
                    </div>
                </div>

                <!-- 值得信赖  -->
                <div class="col-lg-6 col-md-6">
                    <div class="dreamit-service-box">
                        <div class="service-icon">
                            <img src="@/assets/images/resource/srvc-icon4.svg" alt="">
                        </div>
                        <div class="service-content">
                            <h2 class="service-title"> {{ t('home.service4_h2') }} </h2>
                            <p :class="{ global_show: locale === 'zh' }" class="service-desctiption">{{ t('home.service4_p')
                            }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.service-icon {
    width: 40px;
    height: 43px;
}

.global_show {
    font-size: 14px;
}</style>