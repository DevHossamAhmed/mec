import Footer from '@/components/Footer/Page'
import Instructors from '@/components/Instructors/Page'
import OurPrograms from '@/components/OurPrograms/Page'
import Vedios from '@/components/Vedios/Page'
import Courses from '@/components/courses/Page'
import Hero from '@/components/hero/Page'
import Program from '@/components/program/Page'


export default function Home() {
  return (
      <main>
        <Hero/>
        <Program/>
        <Courses/>
        <OurPrograms/>
        <Vedios/>
        <Instructors/>
        <Footer/>
      </main>

  )
}
