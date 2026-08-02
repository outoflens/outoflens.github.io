import { defineConfig } from 'vitepress'
export default defineConfig({
  base: '/', // Cloudflare Pages固定写/，无需填仓库名/域名
  title: '镜外笔记',
  themeConfig: {
    nav: [{ text: '首页', link: '/' }]
  }
})