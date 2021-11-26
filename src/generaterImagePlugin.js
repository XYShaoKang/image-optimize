/* eslint-disable @typescript-eslint/no-var-requires */
const sharp = require('sharp')
const path = require('path')
const fsPromises = require('fs/promises')

class GeneraterImagePlugin {
  /**
   * @typedef {{
   *    imageSources: Array<string>,
   *    publicDir: string,
   *    widths: Array<number>,
   *    original: boolean | undefined
   * }} Option
   */

  /**
   * @type {Option} options
   */
  options = {}

  /**
   *
   * @param {Object} options
   * @param {string} options.publicDir public 的绝对路径,默认为项目顶层的 public 文件夹
   * @param {Array<string>} options.imageSources 需要生成的图片相对 public 的路径
   * @param {Array<number> =} options.widths 需要生成的图片的宽度列表,默认为 `[40, 200, 400, 800, 1200, 1600]`
   * @param {boolean =} options.original 是否输出原始图片,默认为 true
   */
  constructor(options = {}) {
    this.options = Object.assign(
      {
        imageSources: [],
        publicDir: path.join(__dirname, '../public/'),
        widths: [40, 200, 400, 800, 1200, 1600],
        original: true,
      },
      options
    )
  }

  /**
   *
   * @param {import('webpack').Compiler} compiler
   */
  apply(compiler) {
    if (!this.options.imageSources || !this.options.imageSources.length) return

    const pluginName = GeneraterImagePlugin.name
    const { imageSources, widths, publicDir, original } = this.options
    const { webpack } = compiler
    const { RawSource } = webpack.sources

    compiler.hooks.thisCompilation.tap(pluginName, compilation => {
      compilation.hooks.processAssets.tapPromise(
        {
          name: 'generater-image-plugin',
          stage: webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
        },
        () => {
          let tasks = imageSources
            .map(img =>
              widths
                .map(async width => {
                  const input = path.join(publicDir, img)
                  const data = await sharp(input).resize(width).toBuffer()
                  const output = img.replace(/(.*)(\.\w+?$)/, `$1-${width}$2`)

                  compilation.emitAsset(output, new RawSource(data))
                })
                .concat(
                  // 根据配置决定是否输出原始文件
                  original &&
                    fsPromises
                      .readFile(path.join(publicDir, img))
                      .then(data =>
                        compilation.emitAsset(img, new RawSource(data))
                      )
                )
            )
            .flat()
            .filter(Boolean)

          return Promise.allSettled(tasks)
        }
      )
    })
  }
}

module.exports = GeneraterImagePlugin
