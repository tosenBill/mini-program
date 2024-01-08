import Components from 'unplugin-vue-components/webpack';
import NutUIResolver from '@nutui/nutui-taro/dist/resolver';
import path from 'path';

const config = {
  projectName: 'taro-vue3-framwork',
  date: '2024-1-4',
  designWidth (input) {
    // 因为 nutui 的设计稿是 375 的 所以将框架的设计尺寸调整为 375
    if (input?.file?.replace(/\\+/g, '/').indexOf('@nutui') > -1) {
      return 375
    }
    return 750
  },
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: ['@tarojs/plugin-html'],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'vue3',
  compiler: {
    type: 'webpack5',
    prebundle: { enable: false }
  },
  sass:{
    data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`
  },
  alias: {
    '@': path.resolve(__dirname, "..", 'src'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    '@/http': path.resolve(__dirname, '..', 'src/http'),
    '@/api': path.resolve(__dirname, '..', 'src/api'),
    '@/store': path.resolve(__dirname, '..', 'src/store'),
    '@/hooks': path.resolve(__dirname, '..', 'src/hooks'),
    '@/components': path.resolve(__dirname, '..', 'src/components')
  },
  caches: {
    enable: true
  },
  mini: {
    webpackChain(chain) {
      chain.plugin('unplugin-vue-components').use(Components({
        resolvers: [NutUIResolver({taro: true})]
      }))
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          // selectorBlackList: ['nut-']
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    webpackChain(chain) {
      chain.plugin('unplugin-vue-components').use(Components({
        resolvers: [NutUIResolver({taro: true})]
      }))
    },
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['nutui-taro', 'icons-vue-taro'],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
