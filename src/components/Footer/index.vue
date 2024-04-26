<script setup>
import { useI18n } from 'vue-i18n'
import Footer_comm from '@/components/Footer/Footer-comm.vue'

const { t, locale } = useI18n()
</script>

<template>
    <!-- 底部 -->
    <div class="footer-section">
        <!-- 第一部分 -->
        <div class="container">
            <div class="row footer-product-head">
                <div class="dreamhub-section-title footer-product-head-h1">
                    <h1>{{ t('footer.footer_h1') }}</h1>
                    <h1>{{ t('footer.footer_h11') }}</h1>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <p :class="{global_show : locale === 'zh'}">{{ t('footer.footer_p') }}
                        </p>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="header-button">
                            <RouterLink to="/contact">
                                {{ t("nav.contact") }} <i class="bi bi-arrow-right"></i>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 底部 -->
        <Footer_comm />
    </div>
</template>

<style scoped>
.global_show {
	font-size: 14px;
}
</style>