<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>

<template>
    <!-- 轻松触达全球 -->
    <div class="subscribe-section">
        <div class="container">
            <div class="row subscribe-bg">
                <div class="col-lg-12">
                    <div class="dreamhub-section-title text-center">
                        <h1> {{ t('home.subscribe_h1') }}</h1>
                        <p :class="{ global_show: locale === 'zh' }">{{ t('home.subscribe_p') }}</p>
                    </div>
                    <div class="subscribe-mail-box">
                        <div class="row scrb-bg picture1">
                            <!-- 1 -->
                            <div class="col-lg-4 col-md-6">
                                <div class="single-counter-box">
                                    <div class="counter-title">
                                        <h4 :class="{ global_show: locale === 'zh' }" class="Submit">{{
                                            t('home.subscribe1_h4') }}</h4>
                                    </div>
                                </div>
                            </div>
                            <!-- 2 -->
                            <div class="col-lg-4 col-md-6">
                                <div class="single-counter-box">
                                    <div class="counter-title">
                                        <h4 :class="{ global_show: locale === 'zh' }" class="Contract">{{
                                            t('home.subscribe2_h4') }}</h4>
                                    </div>
                                </div>
                            </div>
                            <!-- 3 -->
                            <div class="col-lg-4 col-md-6">
                                <div class="single-counter-box">
                                    <div class="counter-title">
                                        <h4 :class="{ global_show: locale === 'zh' }" class="Docking">{{
                                            t('home.subscribe3_h4') }}</h4>
                                    </div>
                                </div>
                            </div>
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
}</style>