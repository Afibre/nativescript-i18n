import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'org.nativescript.plugindemo.i18n',
  appPath: 'app',
  appResourcesPath: 'app/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  },
} as NativeScriptConfig
