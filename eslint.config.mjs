import pluginVue from 'eslint-plugin-vue'
export default [
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['*.js', '*.vue', '*.mjs'],
    rules: {
      'vue/no-unused-vars': 'error',
      'vue/no-multiple-template-root': 'off', // Example: if using Vue 3 and the new template syntax
      'vue/no-v-html': 'off', // Example: if you need to use v-html
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  }
]