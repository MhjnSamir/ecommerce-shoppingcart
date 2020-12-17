import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// english translation files
import translationEn from './locale/common/en.json';
// nepali translation files
import translationNe from './locale/common/ne.json';

export const i18nLanguages = ["en", "ne"];

// the translation resources
const resources = {
    en: {
        common: translationEn
    },
    ne: {
        common: translationNe
    }
};

i18n
    // .use(Backend)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        lng: 'ne',
        fallbackLng: 'ne',
        whitelist: ['ne', 'en'],
        ns: ['common'],
        resources,
        defaultNS: "common",
        fallbackNS: "common",
        // backend: {
        //     loadPath: process.env.REACT_APP_IAS_ENDPOINT + '/config/i18n/res/{{lng}}/{{ns}}',
        //     crossDomain: true
        // },

        keySeparator: ".", // we do use keys in form {t('messages.welcome')}
        // keySeparator: false, // we do not use keys in form {t('messages.welcome')}

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export const getTextByLanguage = (textEn: any, textNe: any): any => {
    switch (i18n.language) {
        case 'ne': return textNe;
        default: return textEn;
    }
}

export const timeoutLanguage = () => {
    switch (i18n.language) {
        case 'ne': return "अनुरोधको समय सकियो!";
        default: return "Request timed out!";
    }
}

export const noConnectionLanguage = () => {
    switch (i18n.language) {
        case 'ne': return "इन्टरनेट जडान छैन!";
        default: return "No Internet Connection!";
    }
}

export const noServerConnectionLanguage = () => {
    switch (i18n.language) {
        case 'ne': return "सर्भरसम्म पुग्न सकेन!";
        default: return "Server could not be reached!";
    }
}

const nepaliCount = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
export const getNumberByLanguage = (enNumber: any) => {
    if (enNumber === null || enNumber === undefined) {
        return enNumber;
    }
    switch (i18n.language) {
        case 'ne': return enNumber.toLocaleString('hi').toString().split("").map((number: string) => nepaliCount[+number] ? nepaliCount[+number] : number);
        default: return enNumber.toLocaleString('hi');
    }
}

export const convertEngToNepNumber = (number: any) => {
    return number ? number.toString().split("").map((number: number) => nepaliCount[number] ? nepaliCount[+number] : number).join("") : number;
}
export const convertNepToEngNumber = (number: any) => {
    return number ? number.toString().split("").map((number: string) => nepaliCount.indexOf(number) > -1 ? nepaliCount.indexOf(number) : number).join("") : number;
}
export default i18n;