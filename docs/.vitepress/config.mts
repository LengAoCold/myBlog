import {defineConfig, type DefaultTheme} from 'vitepress'
import {generateSidebar} from './sidebar'
// https://vitepress.dev/reference/site-config

export default defineConfig({
    base: '/docs',
    cleanUrls: true,
    title: "LengAo's Notes",
    description: "A VitePress Notes Site",
    ignoreDeadLinks: true, // 忽略死链
    lang: 'zh-CN', // 语言
    // ✏️ 编辑链接
    lastUpdated: true,
    // 📅 最后更新
    markdown: {
        // theme: 'github-light',
        lineNumbers: true,
    },

    themeConfig: {
        // 🔍 全局搜索（local-search 或 algolia）

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        // 📑 Outline 配置
        // 设置侧边栏 Outline 显示 h2 ~ h3
        editLink: editLink(),

        // 全局布局定制（让更新时间靠右）
        lastUpdated: lastUpdated(),

        nav: nav(),

        // 翻页
        outline: {
            level: 'deep',  // 或 [2,3]
            label: '页面导航'
        },

        search: {
            provider: 'local',
            options: searchOptions(),
        },

        sidebar: sidebar(),

        socialLinks: [
            {icon: 'github', link: 'https://github.com/LengAoCold/myBlog'}
        ]
    },
})

function lastUpdated() {
    return {
        text: '最后更新',
        formatOptions: {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        },
    }
}
function nav(){
    return [
        {text: '笔记', link: sidebar()[0].items[0].link, activeMatch: '/notes/'},
    ]
}

function editLink(){
    return {
        pattern: 'https://github.com/LengAoCold/myBlog/edit/master/docs/:path',
        text: '在 GitHub 上编辑此页'
    }
}

function sidebar() {
    return generateSidebar('./docs/notes', 'notes')
}

function searchOptions() {
    return {
        translations: {
            button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
            },
            modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                    selectText: '选择',
                    navigateText: '切换'
                }
            }
        }
    }
}
