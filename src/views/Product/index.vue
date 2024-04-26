<script setup>
import Footer from '@/components/Footer/index.vue'
import ProductMain from '@/views/Product/components/ProductMain.vue'
import ProductMore from '@/views/Product/components/ProductMore.vue'
import ProductGlobal from '@/views/Product/components/ProductGlobal.vue'
import ProductCover from '@/views/Product/components/ProductCover.vue'

</script>

<template>
	<!-- 展示面 -->
	<!-- <div class="product-section d-flex align-items-center">
		<div class="container">
			<div class="row hero-bg align-items-center">
				<div class="col-lg-6">
					<div class="hero-content">
						<h1>{{ t('product.hero_h1') }}</h1>
					</div>

					<div class="hero-description">
						<p>
							{{ t('product.hero_p') }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div> -->

	<ProductCover/>

	<!-- 更多功能，优化收单表现 -->
	<ProductMore />

	<!-- 产品 -->
	<ProductMain />

	<!-- 覆盖全球的收单能力 -->
	<ProductGlobal />

	<!-- 底部 -->
	<Footer></Footer>
</template>

<style scoped>

</style>