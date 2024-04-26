<script setup>
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'
const { t, locale } = useI18n()


const currentIndex = ref(0)
const isDisabledRight = computed(() => currentIndex.value === 2)
const isDisabledLeft = computed(() => currentIndex.value === 0)
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    // alert("你好")
    if (index < 0) {
        currentIndex.value = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex.value = 0;
    }
    const offset = -currentIndex.value * 25; // 根据slide宽度调整
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
    console.log(currentIndex.value);
}

function prevSlide() {
    currentIndex.value--;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex.value++;
    showSlide(currentIndex);
}
</script>

<template>
    <div class="testimonial-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="dreamhub-section-title text-center about-section-flex">
                        <h1 style="
                        margin-bottom: 30px;
                        width: 700px;
                        "> {{ t('home.testimonial_h1') }} </h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="slider-container">
            <div class="slider">
                <!-- 1 -->
                <div class="slide">
                    <div class="testimonial-single-box">
                        <!-- testi thumb -->
                        <div class="testi-thumb">
                            <img src="@/assets/images/touxiang/1.png" alt="">
                        </div>
                        <!-- testi title -->
                        <div class="testi-title">
                            <h4> {{ t('home.testimonial1_h4') }} </h4>
                            <span :class="{ global_show: locale === 'zh' }">{{ t('home.testimonial1_span') }}</span>
                        </div>
                        <!-- testi icon -->
                        <div class="testimonial-icon">
                            <i class="bi bi-quote"></i>
                        </div>
                        <!-- testi description -->
                        <div class="testimonial-desc">
                            <p :class="{ global_show: locale === 'zh' }">{{ t('home.testimonial1_p') }}</p>
                        </div>
                        <!-- testi star -->
                        <div class="testi-star-list">
                            <ul>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- 2 -->
                <div class="slide">
                    <div class="testimonial-single-box">
                        <!-- testi thumb -->
                        <div class="testi-thumb">
                            <img src="@/assets/images/touxiang/2.png" alt="">
                        </div>
                        <!-- testi title -->
                        <div class="testi-title">
                            <h4> {{ t('home.testimonial2_h4') }} </h4>
                            <span :class="{ global_show: locale === 'zh' }">{{ t('home.testimonial2_span') }}</span>
                        </div>
                        <!-- testi icon -->
                        <div class="testimonial-icon">
                            <i class="bi bi-quote"></i>
                        </div>
                        <!-- testi description -->
                        <div class="testimonial-desc">
                            <p :class="{ global_show: locale === 'zh' }">{{ t('home.testimonial2_p') }}</p>
                        </div>
                        <!-- testi star -->
                        <div class="testi-star-list">
                            <ul>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- 3 -->
                <div class="slide">
                    <div class="testimonial-single-box">
                        <!-- testi thumb -->
                        <div class="testi-thumb">
                            <img src="@/assets/images/touxiang/3.png" alt="">
                        </div>
                        <!-- testi title -->
                        <div class="testi-title">
                            <h4> {{ t('home.testimonial3_h4') }} </h4>
                            <span :class="{ global_show: locale === 'zh' }">{{ t('home.testimonial3_span') }}</span>
                        </div>
                        <!-- testi icon -->
                        <div class="testimonial-icon">
                            <i class="bi bi-quote"></i>
                        </div>
                        <!-- testi description -->
                        <div class="testimonial-desc">
                            <p :class="{ global_show: locale === 'zh' }">{{ t('home.testimonial3_p') }}</p>
                        </div>
                        <!-- testi star -->
                        <div class="testi-star-list">
                            <ul>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- 4 -->
                <div class="slide">
                    <div class="testimonial-single-box">
                        <!-- testi thumb -->
                        <div class="testi-thumb">
                            <img src="@/assets/images/touxiang/4.png" alt="">
                        </div>
                        <!-- testi title -->
                        <div class="testi-title">
                            <h4> {{ t('home.testimonial4_h4') }} </h4>
                            <span :class="{ global_show: locale === 'zh' }">{{ t('home.testimonial4_span') }}</span>
                        </div>
                        <!-- testi icon -->
                        <div class="testimonial-icon">
                            <i class="bi bi-quote"></i>
                        </div>
                        <!-- testi description -->
                        <div class="testimonial-desc">
                            <p :class="{ global_show: locale === 'zh' }">{{ t('home.testimonial4_p') }}
                            </p>
                        </div>
                        <!-- testi star -->
                        <div class="testi-star-list">
                            <ul>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                                <li><i class="bi bi-star-fill"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn-container-home">
                <button class="btn" :disabled="isDisabledLeft" @click="prevSlide"><i class="iconfont icon-zuo"></i></button>
                <button class="btn" :disabled="isDisabledRight" @click="nextSlide"><i
                        class="iconfont icon-you"></i></button>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (min-width: 1600px){
    .btn-container-home {
    position: absolute;
    top: 150px;
    /* 调整到顶部 */
    right: 290px;
    /* 调整到右边 */
}
}


.testimonial-section {
    position: relative;
}

.slider-container {
    display: flex;
    overflow: hidden;
    width: 1312px;
    margin: 0 auto;
}

.slider {
    height: 340px;
    display: flex;
    transition: transform 0.5s ease;
}

.slide {
    /* 每个轮播图占据的宽度 */
    width: 650px;
    margin-right: 24px;
    /* padding: 2rem; */

    background-color: #FFFFFF;
    /* height: 340px; */
    border-radius: 12px;
}

.btn {
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    background-color: #fff;
    font-size: 16px;
}


.global_show {
    font-size: 14px;
}
</style>