import RNLanguages from 'react-native-languages';
import i18n from 'i18n-js';

import en from './lang/en.json';
import es from './lang/es.json'; 

//RNLanguages.language Toma el idioma del dispositivo
i18n.locale = RNLanguages.language;
i18n.fallbacks = true;
i18n.defaultLocale = 'es';
i18n.translations = { en, es };

export default i18n;