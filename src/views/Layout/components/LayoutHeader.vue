<script setup>
import { useI18n } from 'vue-i18n'
import { Check } from '@element-plus/icons-vue'
import LayoutSmall from '@/views/Layout/components/LayoutSmall.vue';
const { t, locale } = useI18n()

const changeLocal = () => {
	locale.value = locale.value === 'zh' ? 'en' : 'zh'
}

</script>

<template>
	<div id="sticky-header" class="dreamhub_nav_manu">
		<div class="container">
			<div class="row align-items-center">

				<!-- logo -->
				<div class="col-lg-3">
					<div class="logo">
						<a class="logo_img">
							<RouterLink to="/"><img src="@/assets/images/logo3.png" alt="" /></RouterLink>
						</a>

					</div>
				</div>

				<!-- nav -->
				<div class="col-lg-8 pl-0 pr-0">
					<nav class="dreamhub_menu">
						<ul class="nav_scroll">
							<li>
								<RouterLink to="/">{{ t("nav.home") }}</RouterLink>
							</li>
							
							<li>
								<RouterLink active-class="active" to="/product">{{ t("nav.product") }}</RouterLink>
							</li>
							<li>
								<RouterLink active-class="active" to="/security">{{ t("nav.security") }}</RouterLink>
							</li>
							<li>
								<RouterLink active-class="active" to="/about">{{ t("nav.about") }}</RouterLink>
							</li>
							<li>
								<div class="header-button">
									<RouterLink to="/contact">
										{{ t("nav.contact") }} <i class="bi bi-arrow-right"></i>
									</RouterLink>
								</div>
							</li>
						</ul>
					</nav>
				</div>

				<!-- 中英文切换 -->
				<div class="col-lg-1">
				<!-- <div class="zh-en"> -->
					<ul class="nav_scroll">
						<li class="nav_scroll_li">
							<el-dropdown trigger="click" @command="changeLocal">
								<span class="el-dropdown-link">

									<i class="iconfont icon-guojihua1" style="font-size: 20px; margin-left: 20px;"></i>
									<span class="icon-span">{{ locale === 'en' ? "En" : "中" }}</span>
									<i class="dropdown-toggle" style="font-size: 25px; margin-left: 4px;"></i>
								</span>	
								<template #dropdown>
									<el-dropdown-menu>
										<el-dropdown-item
											:icon="locale === 'en' ? Check : '一个占位符哦'" command="en">English
										</el-dropdown-item>
										<el-dropdown-item class="language lang-dropdown"
											:icon="locale === 'zh' ? Check : '一个占位符哦'" command="zh">简体中文
										</el-dropdown-item>
									</el-dropdown-menu>
								</template>
							</el-dropdown>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<!-- 小尺寸展示头部 -->
	<LayoutSmall/>
</template>

<style scoped>
.zh-en {
	position: fixed;
	left: 200px;
}
.active {
	/* color: #fdeaa8;
	border-bottom: 1px solid #fdeaa8; */
}
.el-dropdown-link {
	display: flex;
	color: #ffffff;
	align-items: center;
	justify-content: center;
}
.icon-span {
	text-align: center;
	display: inline-block;
	width: 30px;
	margin: 0 8px 0 10px;
	font-size: 16px;
}
.el-dropdown-link {
	cursor: pointer;
	float: right;
	width: 50px;
	height: 22px;
	padding: 3px 18px 0;
	/* top: 5px; */
	right: 0;
}

</style>