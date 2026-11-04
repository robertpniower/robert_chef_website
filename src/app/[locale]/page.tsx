import { useTranslations } from "next-intl";
import Hero from "@/components/Hero";
import AboutChefSection  from "@/components/AboutChefSection";
import GallerySection from "@/components/GalerySection";
import WhatIsIncludedSection from "@/components/WhatsIncludedSection";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  const t = useTranslations("Dashboard");

  return (
    <div>
      <Hero />
      <AboutChefSection/>
      <GallerySection/>
      <WhatIsIncludedSection/>
      <FaqSection/>
    </div>
  );
}
