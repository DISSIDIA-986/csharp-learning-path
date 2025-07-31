import CodeExamples from '@/components/CodeExamples'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function CodeExamplesPage() {
  return (
    <main className="min-h-screen bg-secondary-50">
      {/* 页头 */}
      <header className="bg-white border-b border-secondary-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center">
            <Link 
              href="/"
              className="flex items-center text-secondary-600 hover:text-secondary-900 transition-colors mr-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回课程首页
            </Link>
            <h1 className="text-2xl font-bold text-secondary-900">
              代码示例库
            </h1>
          </div>
        </div>
      </header>

      {/* 内容区 */}
      <div className="container mx-auto px-6 py-12">
        <CodeExamples />
      </div>
    </main>
  )
}
