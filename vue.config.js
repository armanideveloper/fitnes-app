const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import '@/assets/styles/vars/_colors.scss';
          @import '@/assets/styles/vars/_mixins.scss';
        `,
      },
    },
  },
});
