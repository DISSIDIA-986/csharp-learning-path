import LearningResources from '@/components/LearningResources'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: '学习资源库 - C# 学习平台',
  description: '精选的 C#/.NET 学习资源，包括官方文档、教程、工具和社区资源'
}

export default function ResourcesPage() {
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
        <LearningResources />
      </div>
    </div>
  )
}
