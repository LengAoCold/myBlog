import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "LengAo's Notes",
    description: "A VitePress Notes Site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Notes', link: '/notes'},
            {text: 'Example', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: 'Notes',
                items: [
                    {text: 'Notes', link: '/notes'},
                    {text: 'Markdown Notes', link: '/markdown-examples'},
                    {text: 'Runtime API Notes', link: '/api-examples'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/lengaocold'}
        ]
    }
})
