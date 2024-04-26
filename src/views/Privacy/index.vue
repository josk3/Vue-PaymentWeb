<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import Footer from '@/components/Footer/index.vue'


const { t, rt, tm } = useI18n()

// 变量
const banner = ref({
    item: [t('rules.banner_button1'), t('rules.banner_button2')],
    itemName: ['first', 'second'],
    tag: t('rules.banner_tag'),
    title: t('rules.banner_title'),
    content: t('rules.banner_content'),
})
const index = ref(0)

// 函数
const TabsItem = () => {
    let list = {
        item: [t('rules.banner_button1'), t('rules.banner_button2')],
        itemName: ['first', 'second'],
        tag: t('rules.banner_tag'),
        title: t('rules.banner_title'),
        content: t('rules.banner_content'),
    }
    banner.value = list
}
</script>

<template>
    <div class="breatcam-section d-flex align-items-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breatcam-content text-center">
                        <div class="breatcam-title">
                            <h1> {{ t('privacy') }} </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="rule">
        <div class="container">
            <!-- 隐私 -->
            <div class="row my-5 " v-show="index == 0">
                <h2 class="col-12">{{ t('rules.title') }}</h2>
                <p class="col-12 rule_b_subtitle">{{ t('rules.subtitle') }}</p>
                <p class="col-lg-9 col-12 label rule_b_content rule_content">{{ t('rules.content') }}</p>
                <p class="col-12 rule_b_subtitle">{{ t('rules.subtitle2') }}</p>
                <ul class="col-lg-9 col-12 label rule_b_content">
                    <div class="rule_content">{{ t('rules.content2') }}</div>
                    <li class="li" v-for="(item, index) in tm('rules.content2_li')" :key="index">{{ rt(item) }}</li>
                </ul>
                <p class="col-12 rule_b_subtitle">{{ t('rules.subtitle3') }}</p>
                <ul class="col-lg-9 col-12 label rule_b_content">
                    <div class="rule_content">{{ t('rules.content3') }}</div>
                    <li class="li" v-show="index <= 8" v-for="(item, index) in tm('rules.content3_li')">{{ rt(item) }}</li>
                    <li class="li2 " v-show="index > 8" v-for="(item, index) in tm('rules.content3_li')">{{ rt(item) }}</li>
                </ul>
                <p class="col-12 rule_b_subtitle">{{ t('rules.subtitle4') }}</p>
                <ul class="col-lg-9 col-12 label rule_b_content">
                    <div class="rule_content">{{ t('rules.content4') }}</div>
                    <li class="li" v-show="index <= 7" v-for="(item, index) in tm('rules.content4_li')">{{ rt(item) }}</li>
                    <div class="rule_content">{{ t('rules.content4_li[8]') }}</div>
                    <li class="li2 " v-show="index == 9" v-for="(item, index) in tm('rules.content4_li')">{{ rt(item) }}
                    </li>
                    <li class="li" v-show="index > 9" v-for="(item, index) in tm('rules.content4_li')">{{ rt(item) }}</li>
                </ul>
                <p class="col-12 rule_b_subtitle">{{ t('rules.subtitle5') }}</p>
                <ul class="col-lg-9 col-12 label rule_b_content">
                    <div class="rule_content" v-for="item in tm('rules.content5')">{{ rt(item) }}</div>
                </ul>

                <p class="col-12 rule_b_subtitle">{{ t('rules.subtitle6') }}</p>
                <ul class="col-lg-9 col-12 label rule_b_content">
                    <div class="rule_content" v-for="item in tm('rules.content6')">{{ rt(item) }}</div>
                </ul>

                <p class="col-12 rule_b_subtitle">{{ t('rules.subtitle7') }}</p>
                <ul class="col-lg-9 col-12 label rule_b_content">
                    <div class="rule_content" v-for="item in tm('rules.content7')">{{ rt(item) }}</div>
                    <li class="li" v-for="(item, index) in tm('rules.content7_li')">{{ rt(item) }}</li>
                </ul>
                <p class="col-12 rule_b_subtitle">{{ t('rules.subtitle8') }}</p>
                <ul class="col-lg-9 col-12 label rule_b_content">
                    <div class="rule_content" v-for="item in tm('rules.content8')">{{ rt(item) }}</div>
                </ul>
                <p class="col-12 rule_b_subtitle">{{ t('rules.subtitle9') }}</p>
                <ul class="col-lg-9 col-12 label rule_b_content">
                    <div class="rule_content" v-for="item in tm('rules.content9')">{{ rt(item) }}</div>
                </ul>
                <p class="col-12 rule_b_subtitle">{{ t('rules.subtitle10') }}</p>
                <ul class="col-lg-9 col-12 label rule_b_content">
                    <div class="rule_content" v-for="item in tm('rules.content10')">{{ rt(item) }}</div>
                </ul>
                <p class="col-12 rule_b_subtitle">{{ t('rules.subtitle11') }}</p>
                <ul class="col-lg-9 col-12 label rule_b_content">
                    <div class="rule_content">{{ t('rules.content11[0]') }}<span style="color: #FF9200;">{{
                        t('rules.specialContent11[0]') }}</span></div>
                </ul>
            </div>

            <!-- 条例 -->
            <div class="row my-5 " v-if="index == 1">
                <h2 class="col-12">{{ t('rules.banner_button2') }}</h2>
                <p class="col-12 rule_b_subtitle">{{ t('Terms.subtitle') }}</p>
                <p class="col-lg-9 col-12  label rule_b_content rule_content">{{ t('Terms.content') }}</p>
                <p class="col-12 rule_b_subtitle">{{ t('Terms.subtitle2') }}</p>
                <p class="col-lg-9 col-12 label rule_b_content rule_content">{{ t('Terms.content2') }}</p>
                <p class="col-12 rule_b_subtitle">{{ t('Terms.subtitle3') }}</p>
                <p class="col-lg-9 col-12 label rule_b_content rule_content">{{ t('Terms.content3') }}</p>
                <p class="col-12 rule_b_subtitle">{{ t('Terms.subtitle4') }}</p>
                <p class="col-lg-9 col-12 label rule_b_content rule_content">{{ t('Terms.content4') }}</p>
                <p class="col-12 rule_b_subtitle">{{ t('Terms.subtitle5') }}</p>
                <p class="col-lg-9 col-12 label rule_b_content rule_content">{{ t('Terms.content5') }}</p>
                <p class="col-12 rule_b_subtitle">{{ t('Terms.subtitle6') }}</p>
                <p class="col-lg-9 col-12 label rule_b_content rule_content">{{ t('Terms.content6') }}</p>
                <p class="col-12 rule_b_subtitle">{{ t('Terms.subtitle7') }}</p>
                <p class="col-lg-9 col-12 label rule_b_content rule_content">{{ t('Terms.content7') }}</p>
                <p class="col-12 rule_b_subtitle">{{ t('Terms.subtitle8') }}</p>
                <p class="col-lg-9 col-12 label rule_b_content rule_content">{{ t('Terms.content8') }}</p>
            </div>
            <hr class="w-100" style="margin-top: 90px;">
        </div>

    </div>

    <!-- 底部 -->
    <Footer/>
</template>

<style scoped>
.rule_content {
    color: #17294D;
    margin-top: 12px;
}

.li {
    /* list-style: none; */
    color: #17294D;
    padding-left: 14px;
    margin-top: 12px;
    margin-left: 15px;
    margin-right: 15px;
}

.li::marker {
    content: '—';
    color: #003088;
}

.li2 {
    list-style: none;
    color: #17294D;
    padding-left: 14px;
    margin-top: 12px;
    margin-left: 15px;
    margin-right: 15px;
}



span {
    margin-left: 14px;
}

.rule:deep(.ba_bgC) {
    background-color: #E9EAF8;
}

.rule:deep(.el-tabs__item) {
    padding: 0 10px;
}

.rule:deep(.el-tabs__nav-wrap::after) {
    background-color: unset;
}

.rule:deep(.el-tabs__item) {
    color: #455980;
    font-size: 18px;
    height: 50px;
}

.rule:deep(.el-tabs__item.is-active) {
    color: #17294D;
}

.rule:deep(.el-tabs__item:hover) {
    color: #17294D;
}

.rule:deep(.el-tabs__active-bar) {
    background-color: #003088;
    width: 50px;
}

.rule:deep(.el-tabs__header) {
    margin: 0;
}

.rule:deep(.roundCorner) {
    background-color: #D0E0FC !important;
}

.rule_b_p {
    margin-top: 70px;
    margin-bottom: 60px;
}

.rule_b_subtitle {
    margin-top: 30px;
    font-weight: bold;
    font-size: 18px;
}

.rule_b_content {
    margin-top: 26px;
    white-space: pre-wrap;
    line-height: 24px;
}

@media (min-width:768px) {
    .rule_b_p {
        margin-top: 74px;
        margin-bottom: 66px;
    }

    .rule_b_subtitle {
        margin-top: 30px;
        font-weight: bold;
        font-size: 18px;
    }

    .rule_b_content {
        margin-top: 26px;
        white-space: pre-wrap;
        line-height: 24px;
    }

}


@media (min-width:992px) {
    .rule_b_p {
        margin-top: 96px;
        margin-bottom: 86px;
    }

    .rule_b_subtitle {
        margin-top: 38px;
        font-weight: bold;
        font-size: 20px;
    }

    .rule_b_content {
        margin-top: 32px;
        white-space: pre-wrap;
        line-height: 30px;
    }

    .rule:deep(.el-tabs__item) {
        color: #455980;
        font-size: 24px;
        height: 50px;
    }
}


@media (min-width:1200px) {
    .rule_b_p {
        margin-top: 116px;
        margin-bottom: 104px;
    }

    .rule_b_subtitle {
        margin-top: 46px;
        font-weight: bold;
        font-size: 24px;
    }

    .rule_b_content {
        margin-top: 40px;
        white-space: pre-wrap;
        line-height: 36px;
    }

}
</style>