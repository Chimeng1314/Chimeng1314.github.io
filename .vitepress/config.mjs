import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    // 站点的大标题
    title: "咸鱼的终极梦想之地",
    // 站点的描述信息
    description: "相当一条咸鱼吗？想要获得力量吗？那就快来加入我们吧！",
    // 站点的导航栏配置信息
    themeConfig: {

        // 站点 logo
        logo: './static/logo/星星.svg',
        // https://vitepress.dev/reference/default-theme-config

        // 是否显示当前的站点标题 false 隐藏 不写默认展示
        // siteTitle: false,

        // 导航栏跳转
        nav: [
            {
                text: 'Python',
                items: [
                    {text: 'Item A', link: '/item-1'},
                    {text: 'Item B', link: '/item-2'},
                    {text: 'Item C', link: '/item-3'}
                ]
            },
            {
                text: 'Go',
                items: [
                    {text: 'Item A', link: '/item-1'},
                    {text: 'Item B', link: '/item-2'},
                    {text: 'Item C', link: '/item-3'}
                ]
            }

        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],

        // 页脚配置信息
        footer: {
            message: '咸鱼人版权所有 © 2018-2025 创作不易请尊重他人劳动成果，未经授权禁止转载！',
            // copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>'
        },

        // 支持使用浏览器内索引进行模糊全文搜索
        search: {
            provider: 'local'
        }
    }
})
