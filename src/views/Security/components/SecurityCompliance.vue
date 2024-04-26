<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>

<template>
    	<!-- 合规理念 -->
	<div class="pricing-section">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="dreamhub-section-title text-center">
						<h1> {{ t('security.pricing_h1') }}</h1>
						<p :class="{global_show : locale === 'zh'}">{{ t('security.pricing_p') }}</p>
					</div>
				</div>
			</div>
			<div class="row align-items-center">
				<!-- 1 -->
				<div class="col-md-6 col-lg-4 ">
					<div class="pricing-single-items">
						<!-- pricing head -->
						<div class="pricing-head">
							<div class="price-icon">
								<img style="width: 88px;" src="@/assets/svg/security/1.svg" alt="">
							</div>
							<div class="pricing-item-text">
								<h2 class="service-title">{{ t('security.pricing1_h1') }} </h2>
							</div>
						</div>
						<!-- pricing boody -->
						<div class="pricing-body">
							<div class="pricing-item-list">
								<p :class="{global_show : locale === 'zh'}">{{ t('security.pricing1_p') }} </p>
							</div>
						</div>
					</div>
				</div>
				<!-- 2 -->
				<div class="col-md-6 col-lg-4 ">
					<div class="pricing-single-items">
						<!-- pricing head -->
						<div class="pricing-head">
							<div class="price-icon">
								<img style="width: 88px;" src="@/assets/svg/security/2.svg" alt="">
							</div>
							<div class="pricing-item-text">
								<h2 class="service-title">{{ t('security.pricing2_h1') }}</h2>
							</div>
						</div>
						<!-- pricing boody -->
						<div class="pricing-body">
							<div class="pricing-item-list">
								<p :class="{global_show : locale === 'zh'}">{{ t('security.pricing2_p') }}</p>
							</div>
						</div>
					</div>
				</div>
				<!-- 3 -->
				<div class="col-md-6 col-lg-4 ">
					<div class="pricing-single-items">
						<!-- pricing head -->
						<div class="pricing-head">
							<div class="price-icon">
								<img style="width: 88px;" src="@/assets/svg/security/3.svg" alt="">
							</div>
							<div class="pricing-item-text">
								<h2 class="service-title">{{ t('security.pricing3_h1') }}</h2>
							</div>
						</div>
						<!-- pricing boody -->
						<div class="pricing-body">
							<div class="pricing-item-list">
								<p :class="{global_show : locale === 'zh'}">{{ t('security.pricing3_p') }}</p>
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
}
</style>