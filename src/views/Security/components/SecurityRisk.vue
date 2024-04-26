<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>

<template>
    <!-- 收单风险解决方案 -->
    <div class="about-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="dreamhub-section-title col-lg-6 col-md-12">
                    <div class="about-items">
                        <h1> {{ t('security.about_h1') }} </h1>
                        <p :class="{ global_show: locale === 'zh' }">
                            <i class="bi bi-check-lg"></i><strong>
                                {{ t('security.about_p_strong1') }}
                            </strong>
                            <br>
                            {{ t('security.about_p_content1') }}
                        </p>
                        <p :class="{ global_show: locale === 'zh' }">
                            <i class="bi bi-check-lg"></i><strong>
                                {{ t('security.about_p_strong2') }}
                            </strong>
                            <br>
                            {{ t('security.about_p_content2') }}
                        </p>
                        <p :class="{ global_show: locale === 'zh' }">
                            <i class="bi bi-check-lg"></i><strong>
                                {{ t('security.about_p_strong3') }}
                            </strong>
                            <br>
                            {{ t('security.about_p_content3[0]') }}
                            <br><span>1)</span>
                            {{ t('security.about_p_content3[1]') }}
                            <br><span>2)</span>
                            {{ t('security.about_p_content3[2]') }}
                        </p>
                    </div>

                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="dreamit-about-thumb2">
                        <img class="risk-img" src="@/assets/images/resource/about8.png" alt="">
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
.risk-img {
    width: 625px;
    position: relative;
    top: 60px;
    left: 60px;
}

.global_show {
    font-size: 14px;
}
</style>