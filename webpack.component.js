const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')
const glob = require('glob')
const list = {}

async function makeList (dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`)
  for (const file of files) {
    const component = file.split(/[/.]/)[2]
    list[component] = `./${file}`
  }
}

makeList('components/lib', list)

module.exports = {
  entry: list,
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'lib'),
    library: 'cong-ui',
    libraryTarget: 'umd'
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  },
  externals: {
    vue: {
      root: 'Vue', // 通过 script 标签引入，此时全局变量中可以访问的是 Vue
      commonjs: 'vue', // 可以将vue作为一个 CommonJS 模块访问
      commonjs2: 'vue', // 和上面的类似，但导出的是 module.exports.default
      amd: 'vue' // 类似于 commonjs，但使用 AMD 模块系统
    }
  }

}
