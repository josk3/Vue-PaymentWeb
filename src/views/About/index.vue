<script setup>
import { computed } from 'vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'
import Footer from '@/components/Footer/index.vue'
const { t, locale } = useI18n()


// 
const currentIndex = ref(0)
const isDisabledRight = computed(() => currentIndex.value === (6 - 3))
const isDisabledLeft = computed(() => currentIndex.value === 0)
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
	// alert("你好")
	if (index < 0) {
		currentIndex.value = slides.length - 1;
	} else if (index >= slides.length) {
		currentIndex.value = 0;
	}
	const offset = -currentIndex.value * (100 / 6); // 根据slide宽度调整
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
	<!-- 展示面 -->
	<!-- <div class="product-section d-flex align-items-center about1-section">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="breatcam-content text-center">
						<div class="breatcam-title">
							<h1> {{ t("about.breatcam") }} </h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div> -->
	<div class="about-us-section">
		<img src="@/assets/images/resource/header5.jpg" alt="">
		<div class="about-us-box">
			<h1 class="about-us-h1" style="color: #fdeaa8;">{{ t("about.breatcam") }}</h1>
		</div>
	</div>


	<!-- 关于我们 -->
	<div class="about-section upper2 about-section2 responsive">
		<div class="container">
			<div class="row align-items-center">
				<!-- 左边 -->
				<div class="col-lg-6 col-md-12">
					<div class="dreamit-about-thumb upper">
						<img src="@/assets/images/resource/about3.png" alt="">
					</div>
				</div>
				<!-- 右边 -->
				<div class="col-lg-6 col-md-12 ">
					<div class="dreamhub-section-title">
						<h1> {{ t("about.about_title") }} </h1>
						<!-- <p> {{ t("about.about_content") }}</p> -->
						<p :class="{global_show : locale === 'zh'}"> {{ t("about.about_content1") }}</p>
						<p :class="{global_show : locale === 'zh'}"> {{ t("about.about_content2") }}</p>
						<p :class="{global_show : locale === 'zh'}"> {{ t("about.about_content3") }}</p>
					</div>

					<div class="row cntr-bg">
						<!-- 1 -->
						<div class="col-lg-4 col-md-6">
							<div class="single-counter-box">
								<div class="counter-title">
									<h2 class="counter">7</h2>
									<h2 class="counter_small">{{ t("about.right1_h2") }}</h2>
								</div>
								<div class="counter-text">
									<p :class="{global_show : locale === 'zh'}">{{ t("about.right1_p") }}</p>
								</div>
							</div>
						</div>
						<!-- 2 -->
						<div class="col-lg-4 col-md-6">
							<div class="single-counter-box">
								<div class="counter-title">
									<h2 class="counter">200</h2>
									<h2 class="counter_small">+</h2>
								</div>
								<div class="counter-text">
									<p :class="{global_show : locale === 'zh'}">{{ t("about.right2_p") }}</p>
								</div>
							</div>
						</div>
						<!-- 3 -->
						<div class="col-lg-4 col-md-6">
							<div class="single-counter-box">
								<div class="counter-title">
									<h2 class="counter">30</h2>
									<h2 class="counter_small">+</h2>
								</div>
								<div class="counter-text">
									<p :class="{global_show : locale === 'zh'}">{{ t("about.right3_p") }}</p>
								</div>
							</div>
						</div>
						<!-- 4 -->
						<div class="col-lg-4 col-md-6">
							<div class="single-counter-box">
								<div class="counter-title">
									<h2 class="counter counter4">10</h2>
									<!-- <h2 class="counter_small">{{ t("about.right4_h2") }}+</h2> -->
									<h2 class="counter_small">+</h2>
								</div>
								<div class="counter-text">
									<p>{{ t("about.right4_p") }}</p>
								</div>
							</div>
						</div>
						<!-- 5 -->
						<div class="col-lg-4 col-md-6">
							<div class="single-counter-box">
								<div class="counter-title">
									<h2 class="counter">90</h2>
									<h2 class="counter_small">%+</h2>
								</div>
								<div class="counter-text">
									<p :class="{global_show : locale === 'zh'}">{{ t("about.right5_p") }}</p>
								</div>
							</div>
						</div>
						<!-- 6 -->
						<div class="col-lg-4 col-md-6">
							<div class="single-counter-box">
								<div class="counter-title">
									<h2 class="counter">99</h2>
									<h2 class="counter_small">%</h2>
								</div>
								<div class="counter-text">
									<p :class="{global_show : locale === 'zh'}">{{ t("about.right6_p") }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- 价值观 -->
	<div class="values-section upp">
		<div class="container">
			<!-- title -->
			<div class="row">
				<div class="col-lg-12">
					<div class="dreamhub-section-title values-title text-center">
						<h1> {{ t("about.values_h1") }} </h1>
						<!-- <p> {{ t("about.values_p1") }} <br> {{ t("about.values_p2") }}</p> -->
						<p :class="{global_show : locale === 'zh'}"> {{ t("about.values_p1") }}</p>
					</div>
				</div>
			</div>

			<div class="values-flex">
				<!-- 1 -->
				<div class="col-lg-4 col-md-6 values-text-flex dreamit-service-box">
					<div class="service-icon">
						<img class="service-icon2" src="@/assets/svg/about/1.svg" alt="">
					</div>
					<h2 class="service-title">
						{{ t("about.values1_h2") }}
					</h2>
					<p :class="{global_show : locale === 'zh'}" class="service-desctiption">
						{{ t("about.values1_p") }}
					</p>
				</div>
				<!-- 2 -->
				<div class="col-lg-4 col-md-6 values-text-flex dreamit-service-box">
					<div class="service-icon">
						<img class="service-icon2" src="@/assets/svg/about/2.svg" alt="">
					</div>
					<h2 class="service-title">
						{{ t("about.values2_h2") }}
					</h2>
					<p :class="{global_show : locale === 'zh'}" class="service-desctiption">
						{{ t("about.values2_p") }}
					</p>
				</div>
				<!-- 3 -->
				<div class="col-lg-4 col-md-6 values-text-flex dreamit-service-box">
					<div class="service-icon">
						<img class="service-icon2" src="@/assets/svg/about/3.svg" alt="">
					</div>
					<h2 class="service-title">
						{{ t("about.values3_h2") }}
					</h2>
					<p :class="{global_show : locale === 'zh'}" class="service-desctiption">
						{{ t("about.values3_p") }}
					</p>
				</div>
				<!-- 4 -->
				<div class="col-lg-4 col-md-6 values-text-flex dreamit-service-box">
					<div class="service-icon">
						<img class="service-icon2" src="@/assets/svg/about/4.svg" alt="">
					</div>
					<h2 class="service-title">
						{{ t("about.values4_h2") }}
					</h2>
					<p :class="{global_show : locale === 'zh'}" class="service-desctiption">
						{{ t("about.values4_p") }}
					</p>
				</div>
				<!-- 5 -->
				<div class="col-lg-4 col-md-6 values-text-flex dreamit-service-box">
					<div class="service-icon">
						<img class="service-icon2" src="@/assets/svg/about/5.svg" alt="">
					</div>
					<h2 class="service-title">
						{{ t("about.values5_h2") }}
					</h2>
					<p :class="{global_show : locale === 'zh'}" class="service-desctiption">
						{{ t("about.values5_p") }}
					</p>
				</div>
				<!-- 6 -->
				<div class="col-lg-4 col-md-6 values-text-flex dreamit-service-box">
					<div class="service-icon">
						<img class="service-icon2" src="@/assets/svg/about/6.svg" alt="">
					</div>
					<h2 class="service-title">
						{{ t("about.values6_h2") }}
					</h2>
					<p :class="{global_show : locale === 'zh'}" class="service-desctiption">
						{{ t("about.values6_p") }}
					</p>
				</div>
			</div>

		</div>
	</div>

	<!-- 发展历史 -->
	<div class="develop-section">
		<div class="container develop-section-container">
			<div class="dreamhub-section-title develop-history">
				<h1>{{ t('about.develop_title') }}</h1>
				<p :class="{global_show : locale === 'zh'}">{{ t('about.develop_p') }}</p>
			</div>
			<div class="slider-container">
				<div class="slider">
					<!-- 1 -->
					<div class="slide">
						<div class="slide-content">
							<h2 class="slide-content-h2">{{ t('about.develop1_h2') }}</h2>
							<ul class="develop-banner">
								<li>
									<i class="iconfont icon-xiaofangkuai "></i><span :class="{global_show : locale === 'zh'}">{{ t('about.develop1_li1') }}</span>
								</li>
								<li>
									<i class="iconfont icon-xiaofangkuai "></i><span :class="{global_show : locale === 'zh'}">{{ t('about.develop1_li2') }}</span>
								</li>
							</ul>
						</div>
					</div>
					<!-- 2 -->
					<div class="slide">
						<div class="slide-content">
							<h2 class="slide-content-h2">{{ t('about.develop2_h2') }}</h2>
							<ul class="develop-banner">
								<li>
									<i class="iconfont icon-xiaofangkuai "></i>
									<span :class="{global_show : locale === 'zh'}">{{ t('about.develop2_li1') }}</span>
								</li>
							</ul>
						</div>
					</div>
					<!-- 3 -->
					<div class="slide">
						<div class="slide-content">
							<h2 class="slide-content-h2">{{ t('about.develop3_h2') }}</h2>
							<ul class="develop-banner">
								<li>
									<i class="iconfont icon-xiaofangkuai "></i><span :class="{global_show : locale === 'zh'}">{{ t('about.develop3_li') }}</span>
								</li>
							</ul>
						</div>
					</div>
					<!-- 4 -->
					<div class="slide">
						<div class="slide-content">
							<h2 class="slide-content-h2">{{ t('about.develop4_h2') }}</h2>
							<ul class="develop-banner">
								<li>
									<i class="iconfont icon-xiaofangkuai "></i><span :class="{global_show : locale === 'zh'}">{{ t('about.develop4_li1') }}</span>
								</li>
								<li>
									<i class="iconfont icon-xiaofangkuai "></i><span :class="{global_show : locale === 'zh'}">{{ t('about.develop4_li2') }}</span>
								</li>
								<li>
									<i class="iconfont icon-xiaofangkuai "></i><span :class="{global_show : locale === 'zh'}">{{ t('about.develop4_li3') }}</span>
								</li>
							</ul>
						</div>
					</div>
					<!-- 5 -->
					<div class="slide">
						<div class="slide-content">
							<h2 class="slide-content-h2">{{ t('about.develop5_h2') }}</h2>
							<ul class="develop-banner">
								<li>
									<i class="iconfont icon-xiaofangkuai "></i><span :class="{global_show : locale === 'zh'}">{{ t('about.develop5_li1') }}</span>
								</li>
								<li>
									<i class="iconfont icon-xiaofangkuai "></i><span :class="{global_show : locale === 'zh'}">{{ t('about.develop5_li2') }}</span>
								</li>
								<li>
									<i class="iconfont icon-xiaofangkuai "></i><span :class="{global_show : locale === 'zh'}">{{ t('about.develop5_li3') }}</span>
								</li>
							</ul>
						</div>
					</div>
					<!-- 6 -->
					<div class="slide">
						<div class="slide-content">
							<h2 class="slide-content-h2">{{ t('about.develop6_h2') }}</h2>
							<ul class="develop-banner">
								<li>
									<i class="iconfont icon-xiaofangkuai "></i><span :class="{global_show : locale === 'zh'}">{{ t('about.develop6_li1') }}</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="btn-container">
					<button class="btn" :disabled="isDisabledLeft" @click="prevSlide"><i
							class="iconfont icon-zuo"></i></button>
					<button class="btn" :disabled="isDisabledRight" @click="nextSlide"><i
							class="iconfont icon-you"></i></button>
				</div>
			</div>
		</div>
	</div>

	<!-- 城市 -->
	<div class="team-section">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="dreamhub-section-title text-center">
						<h1> {{ t("about.team_h1") }} </h1>
						<p :class="{global_show : locale === 'zh'}"> {{ t("about.team_p") }}</p>
					</div>
				</div>
			</div>
			<div class="row">
				<!-- 4 -->
				<div class="col-lg-3 col-md-6">
					<div class="single_team_box">
						<!-- team thumb -->
						<div class="single_team_thumb">
							<img src="@/assets/images/resource/team8.jpg" alt="" />
							<!-- social icon -->
							<div class="single_team_icon2">
								<a href="#"> <i class="fab fa-facebook-f"></i> </a>
								<a href="#"> <i class="fab fa-twitter"></i> </a>
								<a href=""><i class="fab fa-linkedin-in"></i></a>
								<a href="#"> <i class="fab fa-pinterest-p"> </i> </a>
							</div>
						</div>
						<!-- team content -->
						<div class="single_team_content">
							<div class="team-title">
								<h4>{{ t("about.team4") }}</h4>
								<span :class="{global_show : locale === 'zh'}">{{ t("about.team4_span") }}</span>
							</div>
						</div>
					</div>
				</div>
				<!-- 1 -->
				<div class="col-lg-3 col-md-6">
					<div class="single_team_box">
						<!-- team thumb -->
						<div class="single_team_thumb">
							<img src="@/assets/images/resource/team7.jpg" alt="" />
							<!-- social icon -->
							<div class="single_team_icon2">
								<a href="#"> <i class="fab fa-facebook-f"></i> </a>
								<a href="#"> <i class="fab fa-twitter"></i> </a>
								<a href=""><i class="fab fa-linkedin-in"></i></a>
								<a href="#"> <i class="fab fa-pinterest-p"> </i> </a>
							</div>
						</div>
						<!-- team content -->
						<div class="single_team_content">
							<div class="team-title">
								<h4>{{ t("about.team1_h4") }}</h4>
								<span :class="{global_show : locale === 'zh'}">{{ t("about.team1_span") }}</span>
							</div>
						</div>
					</div>
				</div>
				<!-- 2 -->
				<div class="col-lg-3 col-md-6">
					<div class="single_team_box">
						<!-- team thumb -->
						<div class="single_team_thumb">
							<img src="@/assets/images/resource/team6.jpg" alt="" />
							<!-- social icon -->
							<div class="single_team_icon2">
								<a href="#"> <i class="fab fa-facebook-f"></i> </a>
								<a href="#"> <i class="fab fa-twitter"></i> </a>
								<a href=""><i class="fab fa-linkedin-in"></i></a>
								<a href="#"> <i class="fab fa-pinterest-p"> </i> </a>
							</div>
						</div>
						<!-- team content -->
						<div class="single_team_content">
							<div class="team-title">
								<h4>{{ t("about.team2_h4") }}</h4>
								<span :class="{global_show : locale === 'zh'}">{{ t("about.team2_span") }}</span>
							</div>
						</div>
					</div>
				</div>
				<!-- 3 -->
				<div class="col-lg-3 col-md-6">
					<div class="single_team_box">
						<!-- team thumb -->
						<div class="single_team_thumb">
							<img src="@/assets/images/resource/team5.jpg" alt="" />
							<!-- social icon -->
							<div class="single_team_icon2">
								<a href="#"> <i class="fab fa-facebook-f"></i> </a>
								<a href="#"> <i class="fab fa-twitter"></i> </a>
								<a href=""><i class="fab fa-linkedin-in"></i></a>
								<a href="#"> <i class="fab fa-pinterest-p"> </i> </a>
							</div>
						</div>
						<!-- team content -->
						<div class="single_team_content">
							<div class="team-title">
								<h4>{{ t("about.team3_h4") }}</h4>
								<span :class="{global_show : locale === 'zh'}">{{ t("about.team3_span") }}</span>
							</div>
						</div>
					</div>
				</div>
				<!-- 5 -->
				<div style="opacity: 0;" class="col-lg-3 col-md-6">
					<div class="single_team_box">
						<!-- team thumb -->
						<div class="single_team_thumb">
							<img src="@/assets/images/resource/team9.jpg" alt="" />
							<!-- social icon -->
							<div class="single_team_icon2">
								<a href="#"> <i class="fab fa-facebook-f"></i> </a>
								<a href="#"> <i class="fab fa-twitter"></i> </a>
								<a href=""><i class="fab fa-linkedin-in"></i></a>
								<a href="#"> <i class="fab fa-pinterest-p"> </i> </a>
							</div>
						</div>
						<!-- team content -->
						<div class="single_team_content">
							<div class="team-title">
								<h4>{{ t("about.team5_h4") }}</h4>
								<span :class="{global_show : locale === 'zh'}">{{ t("about.team5_span") }}</span>
							</div>
						</div>
					</div>
				</div>
				<!-- 5 -->
				<div class="col-lg-3 col-md-6">
					<div class="single_team_box">
						<!-- team thumb -->
						<div class="single_team_thumb">
							<img src="@/assets/images/resource/team9.jpg" alt="" />
							<!-- social icon -->
							<div class="single_team_icon2">
								<a href="#"> <i class="fab fa-facebook-f"></i> </a>
								<a href="#"> <i class="fab fa-twitter"></i> </a>
								<a href=""><i class="fab fa-linkedin-in"></i></a>
								<a href="#"> <i class="fab fa-pinterest-p"> </i> </a>
							</div>
						</div>
						<!-- team content -->
						<div class="single_team_content">
							<div class="team-title">
								<h4>{{ t("about.team5_h4") }}</h4>
								<span :class="{global_show : locale === 'zh'}">{{ t("about.team5_span") }}</span>
							</div>
						</div>
					</div>
				</div>
				<!-- 6 -->
				<div class="col-lg-3 col-md-6">
					<div class="single_team_box">
						<!-- team thumb -->
						<div class="single_team_thumb">
							<img src="@/assets/images/resource/team10.jpg" alt="" />
							<!-- social icon -->
							<div class="single_team_icon2">
								<a href="#"> <i class="fab fa-facebook-f"></i> </a>
								<a href="#"> <i class="fab fa-twitter"></i> </a>
								<a href=""><i class="fab fa-linkedin-in"></i></a>
								<a href="#"> <i class="fab fa-pinterest-p"> </i> </a>
							</div>
						</div>
						<!-- team content -->
						<div class="single_team_content">
							<div class="team-title">
								<h4>{{ t("about.team6_h4") }}</h4>
								<span :class="{global_show : locale === 'zh'}">{{ t("about.team6_span") }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- 底部 -->
	<Footer></Footer>
</template>

<style scoped>
/* 展示面
====================================================================================
*/
.about-us-section {
	position: relative;
}
.about-us-section img {
	width: 100%;
}
.about-us-box {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.about-us-h1 {
	color: #fff;
}

/* ------------------------------------------------------------------------------------- */
.about1-section {
	/* height: 700px; */
	/* width: 100%; */
	background-size: cover;
	background-repeat: no-repeat;
	background-image: url(@/assets/images/resource/header5.jpg);
	/* background-position: 100%; */
}

/* 关于我们
====================================================================================
*/
.counter {
	color: #FF9200;
}

.counter_small {
	font-size: 14px;
	color: #FF9200;
}

.service-icon2 {
	width: 40px;
	height: 43px;
}

.single-counter-box {
	height: 150px;
}

/* values-section 价值观
====================================================================================
*/

.values-section {
	padding: 50px 0 30px;
	background-color: #f9f9f9;
}

.values-title h1 {
	/* text-align: center; */
	/* margin-bottom: 50px; */
}

.values-title p {
	/* text-align: center; */
	/* margin-bottom: 50px; */
}

.values-flex {
	width: 1320px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}


.values-text-flex {
	width: 416px;
	padding: 45px 30px 10px;
	margin-bottom: 30px;
	height: 350px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	background-color: #fff;
	border-radius: 12px;
}

.values-text-flex h5 {
	line-height: 25px;
	margin: 20px 0;
}

.values-text-flex p {
	line-height: 24px;
}

/* develop-section 发展历史
====================================================================================
*/

.develop-section {
	padding: 35px 0 70px;
	background-color: #f9f9f9;
}

.develop-section-container {
	padding: 50px 15px 100px;
	display: flex;
	flex-direction: column;
	position: relative;
}

.develop-section h1 {
	/* margin-bottom: 50px; */
}

.develop-holder-header {
	width: 400px;
	padding: 2rem;
	border-radius: 1rem;
	background-color: #fff;
}

.develop-flex {
	width: 1220px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}

.develop-text-flex {
	width: 400px;
	/* padding: 45px 30px 10px; */
	margin-bottom: 30px;
	height: 350px;
	/* display: flex; */
	/* flex-direction: column; */
	/* align-items: center;
	justify-content: center;
	text-align: center; */
	background-color: #fff;
	border-radius: 12px;
}


/* 轮播 */

.slider-container {
	display: flex;
	/* overflow: hidden; */
	width: 1312px;
	/* 根据实际需要调整宽度 */
	margin: 0 auto;
	/* position: relative; */
}

.slider {
	display: flex;
	transition: transform 0.5s ease;
}

.slide {
	/* 每个轮播图占据的宽度 */
	width: 410px;
	margin-right: 24px;
	padding: 2rem;

	background-color: #fff;
	height: 260px;
	border-radius: 12px;
}

.btn-container {
	position: absolute;
	top: 60px;
	/* 调整到顶部 */
	right: 0px;
	/* 调整到右边 */
}

.btn {
	cursor: pointer;
	margin: 0 5px;
	padding: 5px 10px;
	border: 1px solid #ccc;
	background-color: #fff;
	font-size: 16px;
}

.btn:hover {
	border-color: #FF9200;
}

.develop-banner i {
	color: #FF9200;
	font-size: 10px;
	margin-right: 20px;
	position: relative;
	top: 1px;
}

.develop-banner li {
	display: flex;
}

.slide-content-h2 {
	margin-bottom: 2.5rem;
	/* text-transform: uppercase; */
	margin-bottom: 2.5rem;
	/* font-family: Checkout Apercu SemiMono,sans-serif; */
	/* font-size: 4rem; */
	/* font-weight: 700; */
	line-height: 1.13em;
}

.develop-banner li {

	font-size: 1rem;
	font-weight: 400;
	line-height: 1.44em;
}

.slide-content-span {
	/* font-size: 15px; */
	/* text-align: left; */
	/* margin-left: 20px; */
}

.slide-content-p {
	/* display: inline-block; */
}

/* 城市
====================================================================================
*/

.single_team_thumb img {
	width: 306px;
}

.global_show {
	font-size: 14px;
}
</style>