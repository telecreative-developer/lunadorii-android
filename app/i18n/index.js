import I18n from 'react-native-i18n'
import en from './locales/en'
import id from './locales/id'

I18n.fallbacks = true

I18n.translations = {
  en,
  id
}

export default I18n