<script setup>
import { useWindowScroll } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { Check } from '@element-plus/icons-vue'

const { t, locale } = useI18n()
const { y } = useWindowScroll()
const changeLocal = () => {
	locale.value = locale.value === 'zh' ? 'en' : 'zh'
}
</script>

<template>
	<!-- 吸顶导航 和 头部 -->
	<div id="sticky-header" class="dreamhub_nav_manu header-sticky " :class="{ show: y > 78 }">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-3">
					<div class="logo">
						<a class="logo_img">
							<RouterLink to="/"><img src="@/assets/images/logo3.png" alt="" /></RouterLink>
						</a>
					</div>
				</div>
				<div class="col-lg-8 pl-0 pr-0">
					
					<nav class="dreamhub_menu">
						<ul class="nav_scroll">
							<li>
								<RouterLink to="/">{{ t("nav.home") }}</RouterLink>
							</li>
							<li>
								<RouterLink to="/product">{{ t("nav.product") }}</RouterLink>
							</li>
							<li>
								<RouterLink to="/security">{{ t("nav.security") }}</RouterLink>
							</li>
							<li>
								<RouterLink to="/about">{{ t("nav.about") }}</RouterLink>
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
					<!-- <i class="iconfont icon-guojihua1" @click="changeLocal" style="font-size: 20px; margin-left: 20px;"></i> -->
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
										<el-dropdown-item :icon="locale === 'en' ? Check : '一个占位符哦'" command="en">English
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
</template>

<style scoped>
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

.header-sticky {
	width: 100%;
	height: 80px;
	position: fixed;
	background-color: #00295a;
	top: 0;
	left: 0;
	z-index: 999;
	transform: translateY(-100%);
	opacity: 0;
}

.show {
	transition: all 0.3s linear;
	transform: none;
	opacity: 1;
}
</style>