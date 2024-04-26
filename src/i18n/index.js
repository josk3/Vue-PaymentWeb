import { createI18n } from "vue-i18n";
import zh from '@/i18n/lang/zh.json'
import en from '@/i18n/lang/en.json'

const i18n = new createI18n({
    legacy : false,
    locale : 'en',
    messages: {
        zh,
        en
    }
})

export default i18n