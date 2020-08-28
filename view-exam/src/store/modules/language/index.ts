import { observable, action } from 'mobx'

import zhCN from "../../../langauge/CN"
import enUS from "../../../langauge/US"
import krEa from '../../../langauge/KR'

const message = {
  'en': enUS,
  'zh': zhCN,
  'kr': krEa
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