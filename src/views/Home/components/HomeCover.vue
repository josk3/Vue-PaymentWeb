<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>

<template>
    <!-- 展示面 -->
    <div class="hero-section d-flex align-items-center">
        <div class="container">
            <div class="row hero-bg align-items-center">
                <div class="col-lg-6">
                    <!-- hero content -->

                    <div class="hero-content">
                        <h1>{{ t("home.hero_title") }}</h1>
                    </div>
                    <!-- hero description -->
                    <div class="hero-description">
                        <p :class="{ global_show: locale === 'zh' }">{{ t("home.hero_content") }}
                        </p>
                    </div>

                    <!-- hero button -->
                    <div class="hero-button">
                        <RouterLink to="/contact">
                            {{ t("nav.contact") }}
                        </RouterLink>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="hero-thumb">
                        <img src="@/assets/images/slider/hero.png" alt="">
                    </div>
                </div>
                <div class="hero-shape">
                    <img src="@/assets/images/slider/hero-shp.png" alt="">
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