<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>

<template>
    <!-- 牌照介绍 -->
    <div class="license-section">
        <div class="container license-section1">
            <div class="row">
                <div class="col-lg-12">
                    <div class="dreamhub-section-title text-center">
                        <h1> {{ t('security.license_h1') }} </h1>
                    </div>
                </div>
            </div>
            <div class=" license-flex">
                <div class="license-box">
                    <div class="license-box-holder">
                        <div class="license-box-holder-img">
                            <img src="@/assets/images/security/1.jpg" alt="">
                        </div>
                        <p> {{ t('security.license_p1') }} </p>
                    </div>
                </div>
                <div class="license-box">
                    <div class="license-box-holder">
                        <div class="license-box-holder-img">
                            <img src="@/assets/images/security/2.jpg" alt="">
                        </div>
                        <p> {{ t('security.license_p2') }} </p>
                    </div>
                </div>
                <div class="license-box">
                    <div class="license-box-holder">
                        <div class="license-box-holder-img">
                            <img src="@/assets/images/security/3.jpg" alt="">
                        </div>
                        <p> {{ t('security.license_p3') }} </p>
                    </div>
                </div>
                <div class="license-box">
                    <div class="license-box-holder">
                        <div class="license-box-holder-img">
                            <img src="@/assets/images/security/4.jpg" alt="">
                        </div>
                        <p> {{ t('security.license_p4') }} </p>
                    </div>
                </div>
                <div class="license-box">
                    <div class="license-box-holder">
                        <div class="license-box-holder-img">
                            <img src="@/assets/images/security/5.jpg" alt="">
                        </div>
                        <p> {{ t('security.license_p5') }} </p>
                    </div>
                </div>
                <div class="license-box">
                    <div class="license-box-holder">
                        <div class="license-box-holder-img">
                            <img src="@/assets/images/security/6.jpg" alt="">
                        </div>
                        <p> {{ t('security.license_p6') }} </p>
                    </div>
                </div>
                <div class="license-box">
                    <div class="license-box-holder">
                        <div class="license-box-holder-img">
                            <img src="@/assets/images/security/7.jpg" alt="">
                        </div>
                        <p> {{ t('security.license_p7') }} </p>
                    </div>
                </div>
                <div class="license-box">
                    <div class="license-box-holder">
                        <div class="license-box-holder-content">
                            <span>{{ t('security.license_p8_1') }}</span>
                            <br>
                            <span>{{ t('security.license_p8_2') }}</span>
                            <br>
                            <span>{{ t('security.license_p8_3') }}</span>
                            <br>
                            <span>...</span>
                        </div>
                        <p>{{ t('security.license_p8') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 牌照介绍 */
.license-section1 {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.license-flex {
    width: 1120px;
    height: 560px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.license-box {
    margin-top: 40px;
    width: 256px;
    height: 236px;
    background-color: #f9f9f9;
}

.license-box-holder {
    height: 236px;
    text-align: center;
}

.license-box-holder-img {
    background-color: #fff;
    height: 200px;
    border-radius: 16px;
}

.license-box-holder-img img {
    height: 100%;
}

.license-box-holder p {
    margin-top: 15px;
    font-size: 14px;
    margin-bottom: 0px;
}

.license-box-holder-content {
    height: 200px;
    background-color: #fff;
    padding-top: 40px;
    /* text-align: justify;
	padding-left: 105px; */
}

.license-box-holder-content span {
    display: inline-block;
    margin-bottom: 5px;
}

.global_show {
    font-size: 14px;
}
</style>