<script setup>
import Footer from '@/components/Footer/index.vue'
import SecurityCover from '@/views/Security/components/SecurityCover.vue'
import SecurityCompliance from '@/views/Security/components/SecurityCompliance.vue'
import SecurityRisk from '@/views/Security/components/SecurityRisk.vue'
import SecurityGroup from '@/views/Security/components/SecurityGroup.vue'
import SecurityLicense from '@/views/Security/components/SecurityLicense.vue'

</script>

<template>
	<!-- 展示面 -->
	<!-- <div class="product-section d-flex align-items-center security-section">
		<div class="container">
			<div class="row hero-bg align-items-center">
				<div class="col-lg-6">
					<div class="hero-content">
						<h1>{{ t('security.security_h1') }}</h1>
					</div>
					<div class="hero-description">
						<p>
							{{ t('security.security_p') }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div> -->
	<SecurityCover/>

	<!-- 合规理念 -->
	<SecurityCompliance/>

	<!-- 收单风险解决方案 -->
	<SecurityRisk/>

	<!-- 合作团队 -->
	<SecurityGroup/>

	<!-- 牌照介绍 -->
	<SecurityLicense/>

	<!-- 底部 -->
	<Footer/>
</template>

<style scoped>
</style>