import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'OpenClaw 7天PM速读指南',
  description: '从PM视角快速建立对OpenClaw的认知框架',
  base: '/openclaw-7day-series/',
  head: [
    ['meta', { name: 'author', content: 'ElbertQian' }],
    ['meta', { property: 'og:title', content: 'OpenClaw 7天PM速读指南' }],
    ['meta', { property: 'og:description', content: 'PM视角的速读指南：7天快速建立对OpenClaw的认知框架' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '开始阅读', link: '/day01' },
      { text: 'GitHub', link: 'https://github.com/lanzhizhuxia/openclaw-7day-series' }
    ],
    sidebar: [
      {
        text: '📚 系列文章',
        items: [
          { text: 'Day 1 · 全景：Gateway架构与产品视角', link: '/day01' },
          { text: 'Day 2 · 三大支柱：渠道×Agent×记忆', link: '/day02' },
          { text: 'Day 3 · 部署实战：从零到日常', link: '/day03' },
          { text: 'Day 4 · 竞品全景：12×8矩阵与生态定位', link: '/day04' },
          { text: 'Day 5 · 安全、信任与主动服务', link: '/day05' },
          { text: 'Day 6 · 成本模型与商业逻辑', link: '/day06' },
          { text: 'Day 7 · 云托管决策指南（终章）', link: '/day07' },
        ]
      },
      {
        text: '📋 快速导航',
        items: [
          { text: '关于本系列', link: '/about' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lanzhizhuxia/openclaw-7day-series' }
    ],
    footer: {
      message: 'Released under CC BY-SA 4.0 License',
      copyright: '© 2026 ElbertQian'
    },
    outline: {
      level: [2, 3],
      label: '目录'
    },
    search: {
      provider: 'local'
    },
    lastUpdated: {
      text: '最后更新'
    }
  },
  markdown: {
    lineNumbers: false
  }
})
