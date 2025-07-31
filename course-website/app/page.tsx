import Hero from '@/components/Hero'
import TableOfContents from '@/components/TableOfContents'
import CourseContent from '@/components/CourseContent'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TableOfContents />
      <CourseContent />
      <Footer />
    </main>
  )
}
