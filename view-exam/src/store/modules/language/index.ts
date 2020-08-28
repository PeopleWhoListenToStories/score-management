import { observable, action } from 'mobx'
import JP from '../../../langauge/JP'
import zhCN from "../../../langauge/CN"
import enUS from "../../../langauge/US"
const message = {
  'en': enUS,
  'zh': zhCN,
  'jp': JP
}

class Language {
  @observable defaultLanguage = message['zh']
  @observable locale = 'zh'

  @action changeLanguage = (language: string) => {
    this.locale = language;
    this.defaultLanguage = (message  as any)[language];
  }
}

export default Language;