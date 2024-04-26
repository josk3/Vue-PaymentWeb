<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>

<template>
    <div class="container">
        <div class="row footer-bg">
            <div class="col-lg-3 col-md-6">
                <div class="widget widgets-company-info">
                    <div class="dreamhub-logo">
                        <a class="logo_img" href="index.html" title="dreamhub">
                            <img src="@/assets/images/logo3.png" alt="" />
                        </a>
                    </div>
                    <div class="company-info-desc">
                        <p>{{ t("footer.footer_contact1") }}</p>
                    </div>
                    <div class="follow-company-icon">
                        <a href="#"> <img src="@/assets/images/bank_svg/1.svg" alt=""> </a>
                        <a href="#"> <img src="@/assets/images/bank_svg/2.svg" alt=""> </a>
                        <a href="#"> <img src="@/assets/images/bank_svg/3.svg" alt=""> </a>
                        <a href="#"> <img src="@/assets/images/bank_svg/4.svg" alt=""> </a>
                        <a href="#"> <img src="@/assets/images/bank_svg/5.svg" alt=""> </a>
                        <a href="#"> <img src="@/assets/images/bank_svg/6.svg" alt=""> </a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 pl-40">
                <div class="widget widget-nav-menu">
                    <h4 class="widget-title">{{ t("nav.product") }}</h4>
                    <div class="menu-quick-link-content">
                        <ul class="footer-menu">
                            <li>
                                <RouterLink to="/product">
                                    <i class="bi bi-arrow-right"></i> <span :class="{ global_show: locale === 'zh' }">{{
                                        t("nav.product") }}</span>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/privacy">
                                    <i class="bi bi-arrow-right"></i><span :class="{ global_show: locale === 'zh' }">{{
                                        t("nav.privacy") }}</span>
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="widget widget-nav-menu">
                    <h4 class="widget-title"> {{ t("nav.security") }} </h4>
                    <div class="menu-quick-link-content">
                        <ul class="footer-menu">
                            <li>
                                <RouterLink to="/security">
                                    <i class="bi bi-arrow-right"></i><span :class="{ global_show: locale === 'zh' }"> {{
                                        t("nav.security") }}</span>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/contact">
                                    <i class="bi bi-arrow-right"></i><span :class="{ global_show: locale === 'zh' }">{{
                                        t("nav.contact") }}</span>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/about">
                                    <i class="bi bi-arrow-right"></i> <span :class="{ global_show: locale === 'zh' }">{{
                                        t("nav.about") }}</span>
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 ">
                <div class="menu-quick-link-contact">
                    <h4 class="widget-title"> {{ t("nav.contact") }} </h4>
                    <div class="company-contact-info">
                        <p>
                            <i style="font-size: 16px;" class="iconfont icon-tel-s"></i>
                            <span :class="{ global_show: locale === 'zh' }">{{ t("nav.phone[0]") }}{{ t("nav.phone[1]")
                            }}</span>

                        </p>
                        <p>
                            <i class="iconfont icon-youxiang5"></i>
                            <span :class="{ global_show: locale === 'zh' }">{{ t("nav.email") }}:
                                <br>alsotrans_business@fosun.com</span>

                        </p>
                        <p>
                            <i class="iconfont icon-dizhi4"></i>
                            <span :class="{ global_show: locale === 'zh' }">
                                {{ t("nav.address") }}: <br>{{
                                    t("nav.address_content1") }}
                            </span>

                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 版权 -->
        <div class="row footer-bottom">
            <div class="col-lg-12">
                <div class="footer-bottom-content">
                    <div class="footer-bottom-content-copy">
                        <p>{{ t("footer.footer_copyright1") }} <span>Alsotrans</span>{{ t("footer.footer_copyright2") }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>.global_show {
    font-size: 14px;
}</style>