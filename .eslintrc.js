module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "plugin:vue/vue3-essential",
    "overrides": [
    ],
    "parserOptions": {
        "sourceType": "module",
        "allowImportExportEverywhere": true,
        ecmaFeatures: {
            modules: true,
            legacyDecorators: true
          }
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "vue/multi-word-component-names": 0,
        "vue/no-deprecated-destroyed-lifecycle": 0
    }
}
