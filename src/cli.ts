import sharp from 'sharp'
import path from 'path'
import sizeOf from 'image-size'
import fs from 'fs'

import source from './image-source.json'

const widths = [40, 200, 400, 800, 1200, 1600]

const root = path.join(__dirname, '../public/')
const outRoot = path.join(__dirname, '../dist/image')

/**
 * 生成指定宽度的图片
 * @param input 原图路径
 * @param output 目标路径
 * @param width 目标宽度
 * @returns
 */
function resizeImage(input: string, output: string, width: number) {
  return sharp(input).resize(width).toFile(output)
}

async function generaterImage(imagePath: string) {
  const { width } = sizeOf(imagePath)
  const { name, ext } = path.parse(imagePath)
  if (!width) throw new Error('获取长宽失败')

  if (!fs.existsSync(outRoot)) fs.mkdirSync(outRoot, { recursive: true })

  fs.writeFileSync(path.join(outRoot, name + ext), fs.readFileSync(imagePath))

  for (const newWidth of widths) {
    const output = path.join(outRoot, `./${name}-${newWidth}${ext}`)
    await resizeImage(imagePath, output, newWidth)
  }
}

void (async function run() {
  for (const imagePath of source) {
    await generaterImage(path.join(root, imagePath))
  }
})()
