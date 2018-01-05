import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
const messages = {
    en: require('./en-US.json'),
    vi: require('./vi-VN.json')
}
export function createI18n() {
    return new VueI18n({
        locale: 'vi',
        messages
    });
}