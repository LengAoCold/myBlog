import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "LengAo's Notes",
    description: "A VitePress Notes Site",
    base: '/docs',
    lang: 'zh-CN',
    themeConfig: {
        lastUpdated: {
            text: '最后更新',
            formatOptions: {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            },
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Notes', link: '/notes'}
        ],

        sidebar: [
            {
                text: 'Git',
                items: [
                    {text: 'Git基础命令', link: '/notes/git/git-basic-commands'},
                    {text: 'Git-cicd', link: '/notes/git/git-cicd'},
                ]
            },
            {
                text: 'Next',
                items: [
                    {text: 'Next', link: '/notes/next/next'},
                ]
            },
            {
                text: 'NPM',
                items: [
                    {text: 'NPM 镜像源', link: '/notes/npm/npm-source'},
                    {text: 'NPM 发布私包', link: '/notes/npm/npm-publish-private'},
                    {text: 'PNPM 命令', link: '/notes/npm/pnpm-commands'},
                ]
            },
            {
                text: 'Python',
                items: [
                    {text: 'Python 打包', link: '/notes/python/build'},
                ]
            },
            {
                text: 'C Sharp',
                items: [
                    {text: 'C Sharp端口开放', link: '/notes/csharp/port'},
                ]
            },
            {
                text: 'flutter',
                items: [
                    {text: 'Dart', link: '/notes/flutter/dart'},
                    {text: 'flutter', link: '/notes/flutter/flutter'},
                ]
            },
            {
                text: 'Database',
                items: [
                    {text: 'mongodb', link: '/notes/database/mongodb/mongodb'},
                    {text: 'postgres', link: '/notes/database/postgres/postgres'},
                    {text: 'oracle', link: '/notes/database/oracle/oracle'},
                ]
            },
            {
                text: 'Mac',
                items: [
                    {text: 'Mac 命令', link: '/notes/mac/commands'},
                ]
            },
            {
                text: 'Shell',
                items: [
                    {text: 'Shell', link: '/notes/shell/shell'},
                ]
            },
            {
                text: 'Markdown',
                items: [
                    {text: 'Markdown', link: '/notes/markdown/markdown'},
                ]
            },
            {
                text: 'Nssm',
                items: [
                    {text: 'Nssm', link: '/notes/nssm/nssm'},
                ]
            },
            {
                text: 'Other',
                items: [
                    {text: '周易', link: '/notes/zhouyi/zhouyibazi'},
                ]
            },
            {
                text: 'Development language',
                items: [
                    {text: 'Notes', link: '/notes'},
                    {text: 'Markdown Notes', link: '/markdown-examples'},
                    {text: 'Runtime API Notes', link: '/api-examples'}
                ]
            },
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/LengAoCold/myBolg'}
        ]
    }
})
