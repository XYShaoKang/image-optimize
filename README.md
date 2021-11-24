# 图片优化演示

查看配套文章 [渐进式图片加载](https://juejin.cn/post/7033780851053690894/)

## 使用本仓库

```sh
git clone https://github.com/XYShaoKang/image-optimize.git
cd image-optimize
pnpm install # 可以替换成 npm install 或者 yarn
```

## TODO

- [x] 生成不同尺寸的图片
  - 通过 sharp 来生成预设尺寸的图片
- [x] 通过 picture 设置多个 source 来根据不同的屏幕匹配对应大小的图片
- [x] 渐进式加载
  - 生成小图片用作占位符
  - 糢糊图片 blur

---

> 本仓库展示图片来自 https://www.hippopx.com/
