import HeroSection from '@/components/HeroSection'
import RepairSection from '@/components/RepairSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import EasyAs123Section from '@/components/EasyAs123Section'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <RepairSection />
      <WhyChooseUsSection />
      <EasyAs123Section />
    </main>
  )
}
