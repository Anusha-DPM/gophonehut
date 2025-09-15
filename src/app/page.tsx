import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import RepairSection from '@/components/RepairSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import EasyAs123Section from '@/components/EasyAs123Section'
import ReviewsSection from '@/components/ReviewsSection'
import RepairServicesSection from '@/components/RepairServicesSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <RepairSection />
      <WhyChooseUsSection />
      <EasyAs123Section />
      <ReviewsSection />
      <RepairServicesSection />
      <Footer />
    </main>
  )
}
