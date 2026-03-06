import fs from 'node:fs'
import path from 'node:path'

interface SidebarDirectoryItem {
  text: string
  items: Array<SidebarDirectoryItem | SidebarFileItem>
}

interface SidebarFileItem {
  text: string
  link: string
}

type SidebarItem = SidebarDirectoryItem | SidebarFileItem

// 添加首字母大写函数
// function capitalizeFirstLetter(str: string): string {
//     return str.charAt(0).toUpperCase() + str.slice(1)
// }
export function generateSidebar(rootDir: string, basePath = ''): SidebarItem[] {
    const fullPath = path.resolve(rootDir)
    const files = fs.readdirSync(fullPath)

    return files
        .filter((name) => !name.startsWith('_')) // 忽略下划线开头
        .map(name => {
            const filePath = path.join(fullPath, name)
            const stat = fs.statSync(filePath)

            const linkPath = path.join(basePath, name)

            if (stat.isDirectory()) {
                return {
                    base: '/',
                    text: name,
                    // text: capitalizeFirstLetter(name), // 首字母大写
                    // collapsible: true,
                    // collapsed: false,
                    items: generateSidebar(filePath, linkPath)
                }
            } else if (name.endsWith('.md')) {
                return {
                    text: name.replace('.md', ''),
                    // text: capitalizeFirstLetter(name.replace('.md', '')), // 首字母大写
                    // collapsible: true,
                    // collapsed: false,
                    link: linkPath.replace('.md', '')
                }
            }
        })
        .filter(Boolean) as SidebarItem[]
}
