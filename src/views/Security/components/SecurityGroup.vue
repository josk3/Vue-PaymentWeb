<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>

<template>
    <!-- 合作团队 -->
    <div class="group-section">
        <div class="container">
            <div class="group-row">
                <div class="h-p dreamhub-section-title col-lg-12 clo-md-4">
                    <h1>{{ t('security.group_h1') }}</h1>
                    <p :class="{ global_show: locale === 'zh' }">{{ t('security.group_p') }}</p>
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