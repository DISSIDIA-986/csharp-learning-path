import ProjectShowcase from '@/components/ProjectShowcase'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: '项目展示 - C# 学习平台',
  description: '通过真实项目学习 C#/.NET 开发，包含 Web API、桌面应用、微服务等完整示例'
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="pt-8 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </Link>
        </div>
        <ProjectShowcase />
      </div>
    </div>
  )
}
