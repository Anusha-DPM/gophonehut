import HeroSection from '@/components/HeroSection'
import RepairSection from '@/components/RepairSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <RepairSection />
      <WhyChooseUsSection />
    </main>
  )
}
