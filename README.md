# Build With Quartz v4

> “[One] who works with the door open gets all kinds of interruptions, but [they] also occasionally gets clues as to what the world is and what might be important.” — Richard Hamming

Quartz is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.
Quartz v4 features a from-the-ground rewrite focusing on end-user extensibility and ease-of-use.

🔗 Read the documentation and get started: <https://quartz.jzhao.xyz/>

[Join the Discord Community](https://discord.gg/cRFFHYye7t)

## 请使用 VScode 编辑项目并配合 Git 上传

请及时配置 user.email 和 user.name

## 请使用 Obsidian 编辑 content 笔记内容

如需重新创建，建议删除 content 文件夹，并重新使用 Obsidian 在根路径创建一个同名仓库

## 本地演示命令

```powershell
npm i
npx quartz build --serve
# 参考 https://quartz.jzhao.xyz/build
```

## 远程推送

请修改[配置文件](./quartz.config.ts) 下面几项

```ts
const config: QuartzConfig = {
  configuration: {
    pageTitle: "星空笔记",
    analytics: {
      provider: "umami",
      host: "https://umami-gojalfqv.bja.sealos.run",
      websiteId: "fd9f1b57-2870-4a6d-8b14-30ca508ac523"
    },
    locale: "zh-CN",
    baseUrl: "obsidian-note-five.vercel.app",
    },
  }
// ...
```

## Quartz v4 Sponsors

<p align="center">
  <a href="https://github.com/sponsors/jackyzha0">
    <img src="https://cdn.jsdelivr.net/gh/jackyzha0/jackyzha0/sponsorkit/sponsors.svg" />
  </a>
</p>
