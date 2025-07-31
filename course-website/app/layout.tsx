import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '从Java到C# - .NET后端学习指南',
  description: '为资深Java开发者量身定制的C#/.NET后端学习蓝图与实践指南',
  keywords: 'C#, .NET, Java转C#, ASP.NET Core, Entity Framework, 编程教程',
  authors: [{ name: 'C# Learning Path' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-white text-secondary-900 antialiased">
        {children}
      </body>
    </html>
  )
}
