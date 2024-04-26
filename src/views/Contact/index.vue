<script setup>
import Footer_comm from '@/components/Footer/Footer-comm.vue'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

</script>

<template>
	<div class="product-section d-flex align-items-center contact1-section">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="breatcam-content text-center">
						<!-- breadcumb title -->
						<div class="breatcam-title">
							<h1 style="color: #fdeaa8;">{{ t('nav.contact') }}</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


	<div class="contact-section">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="dreamhub-section-title text-center">
						<h1> {{ t('contact.contact_h1') }}</h1>
						<p :class="{ global_show: locale === 'zh' }">{{ t('contact.contact_p') }}</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-8 col-md-12">
					<!-- contact form box -->
					<div class="contact-form-box">
						<form action="https://formspree.io/f/myyleorq" method="POST" id="dreamit-form">
							<div class="row">
								<div class="col-lg-6 col-md-6">
									<div class="form-box">
										<input type="text" :placeholder="t('contact.contact_name')">
									</div>
								</div>
								<div class="col-lg-6 col-md-6">
									<div class="form-box">
										<input type="text" :placeholder="t('contact.contact_email')">
									</div>
								</div>
								<div class="col-lg-6 col-md-6">
									<div class="form-box">
										<input type="text" :placeholder="t('contact.contact_subject')">
									</div>
								</div>
								<div class="col-lg-6 col-md-6">
									<div class="form-box">
										<input type="text" :placeholder="t('contact.contact_phone')">
									</div>
								</div>
								<div class="col-lg-12">
									<div class="form-box">
										<textarea name="massage" id="massage" cols="30" rows="10"
											:placeholder="t('contact.contact_comment')"></textarea>
									</div>
								</div>
								<div class="col-lg-12">
									<div class="contact-form">
										<button type="submit"> {{ t('contact.contact_submit') }} </button>
									</div>
								</div>
							</div>
						</form>
						<div id="status"></div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="row">
						<div class="col-lg-12">
							<div class="contact-information2">
								<div class="contacts-icon">
									<i class="bi bi-telephone"></i>
								</div>
								<div class="contacts-title">
									<h5>{{ t('nav.phone[0]') }}</h5>
									<h6>{{ t('nav.phone[1]') }}</h6>
								</div>
							</div>
						</div>
						<div class="col-lg-12">
							<div class="contact-information2">
								<div class="contacts-icon upper">
									<i class="bi bi-envelope-fill"></i>
								</div>
								<div class="contacts-title">
									<h5>{{ t('nav.email') }}:</h5>
									<h6>{{ t('nav.email_content') }}</h6>
								</div>
							</div>
						</div>
						<div class="col-lg-12">
							<div class="contact-information2">
								<div class="contacts-icon upper2">
									<i class="bi bi-geo-alt-fill"></i>
								</div>
								<div class="contacts-title">
									<h5> {{ t('nav.address') }}:</h5>
									<h6>{{ t('nav.address_content1') }}{{ t('nav.address_content2') }}</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- 底部 -->
	<div class="footer-section">
		<div class="footer-index-head1"></div>

		<Footer_comm />
	</div>
</template>

<style scoped>
.footer-index-head1 {
	height: 120px;
}
.contact1-section {
	background-size: cover;
	background-repeat: no-repeat;
	background-image: url(@/assets/images/resource/header3.jpg);
}

.global_show {
	font-size: 14px;
}
</style>