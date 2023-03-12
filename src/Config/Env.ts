import Config from 'react-native-config'

export type EnvKeyName = 'Dev' | 'Staging' | 'Prod'
export interface ENVFields {
  API_URL: string
  APP_ENV: EnvKeyName
  CODE_PUSH_KEY_ANDROID: string
  CODE_PUSH_KEY_IOS: string
}

export const initEnv = Config.APP_ENV as EnvKeyName

const EnvConfig: Record<EnvKeyName, ENVFields> = {
  Dev: {
    APP_ENV: 'Dev',
    API_URL: 'https://jsonplaceholder.typicode.com/',
    CODE_PUSH_KEY_ANDROID: 'pqLav-DRi09JToaVLG1QdQeW4kPpIEVcOWju3',
    CODE_PUSH_KEY_IOS: 'o4-twUG_M8qf8x5OdWMO6Q6-5aXuK1G7ueIVS',
  },
  Staging: {
    APP_ENV: 'Staging',
    API_URL: 'https://jsonplaceholder.typicode.com/',
    CODE_PUSH_KEY_ANDROID: 'zzvbzKGMnLUzkXJJb7Q5BgqFAtyuaaBDc3SQS',
    CODE_PUSH_KEY_IOS: 'KQVKfLkW7S8tgrLvSDTg6WZvRTA8otu9hmzRv',
  },
  Prod: {
    APP_ENV: 'Prod',
    API_URL: 'https://jsonplaceholder.typicode.com/',
    CODE_PUSH_KEY_ANDROID: 'an3tYVXXj09Xv531ubRtbjeJldoWJEPkq9KWY',
    CODE_PUSH_KEY_IOS: 'F_D52pIoaOfxjkFc14GeP1vh5-Je51Ge8sXJ4',
  },
}

export const ENVDynamic = (env: EnvKeyName): ENVFields => {
  return EnvConfig[env]
}

export default EnvConfig[initEnv || 'Dev']
