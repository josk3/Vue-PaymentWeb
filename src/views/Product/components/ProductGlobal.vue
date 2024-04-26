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
                        <h1>{{ t('product.platforms_title') }}</h1>
                        <p :class="{global_show : locale === 'zh'}">{{ t('product.platforms_content') }}</p>
                    </div>
                </div>
            </div>

            <div class="product-flex align-items-center">
                <div class="product-flex-son"><img class="img1" src="@/assets/svg/bank/1.svg" alt=""></div>
                <div class="product-flex-son"><img src="@/assets/svg/bank/2.svg" alt=""></div>
                <div class="product-flex-son"><img src="@/assets/svg/bank/3.svg" alt=""></div>
                <div class="product-flex-son"><img class="img4" src="@/assets/svg/bank/4.svg" alt=""></div>
                <div class="product-flex-son"><img src="@/assets/svg/bank/5.svg" alt=""></div>
                <div class="product-flex-son"><img src="@/assets/svg/bank/6.svg" alt=""></div>

                <div class="product-flex-son"><img src="@/assets/svg/bank/7.svg" alt=""></div>
                <div class="product-flex-son"><img src="@/assets/svg/bank/8.svg" alt=""></div>
                <div class="product-flex-son"><img src="@/assets/svg/bank/9.svg" alt=""></div>
                <div class="product-flex-son"><img src="@/assets/svg/bank/10.svg" alt=""></div>
                <div class="product-flex-son"><img src="@/assets/svg/bank/11.svg" alt=""></div>
                <div class="product-flex-son"><img src="@/assets/svg/bank/12.svg" alt=""></div>

                <div class="product-flex-son"><img src="@/assets/svg/bank/13.svg" alt=""></div>
                <div class="product-flex-son"><img src="@/assets/svg/bank/14.svg" alt=""></div>
                <div class="product-flex-son"><img src="@/assets/svg/bank/15.svg" alt=""></div>
                <div class="product-flex-son"><img class="img16" src="@/assets/svg/bank/16.svg" alt=""></div>
                <div class="product-flex-son"><img class="img17" src="@/assets/svg/bank/17.svg" alt=""></div>
                <div class="product-flex-son"><img src="@/assets/svg/bank/18.svg" alt=""></div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.product-flex-son .img16 {
    position: relative;
    left: 10px;
}


.product-flex-son img {
    width: 80%;
}

.product-flex-son .img1 {
    width: 70%;
}

.product-flex-son .img4 {
    width: 70%;
}

.product-flex-son .img17 {
    width: 70%;
}

.global_show {
	font-size: 14px;
}
</style>