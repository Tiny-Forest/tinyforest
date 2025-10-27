import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { VideoSection } from "@/components/VideoSection";
import { WhyChoose } from "@/components/WhyChoose";
import { Testimonials } from "@/components/Testimonials";
import { HighQualityFarms } from "@/components/HighQualityFarms";
import { TreeCarousel } from "@/components/TreeCarousel";
import { ContactForm } from "@/components/ContactForm";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { YouTubeLink } from "@/components/YouTubeLink";

const Index = () => {
  return (
    <div>
      <main>
        <Hero />
        <HowItWorks />
        <VideoSection index={0} />
        <VideoSection index={1} />
        {/* <YouTubeLink/> */}
        <WhyChoose />
        <Testimonials />
        <HighQualityFarms />
        <TreeCarousel />
        <ContactForm />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
