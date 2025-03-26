"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Tabs, TabsContent } from "@/components/ui/tabs";

// Navigation
import Navigation from "@/components/ui-custom/Navigation";

// Organ Donation Sections
import OrganDonationIntro from "@/components/sections/OrganDonationIntro";
import OrganDonationWhat from "@/components/sections/OrganDonationWhat";
import OrganDonationProcess from "@/components/sections/OrganDonationProcess";
import OrganDonationLegal from "@/components/sections/OrganDonationLegal";
import OrganDonationRequirements from "@/components/sections/OrganDonationRequirements";
import OrganDonationEthics from "@/components/sections/OrganDonationEthics";
import OrganDonationProsCons from "@/components/sections/OrganDonationProsCons";

// Body Donation Sections
import BodyDonationIntro from "@/components/sections/BodyDonationIntro";
import BodyDonationWhat from "@/components/sections/BodyDonationWhat";
import BodyDonationProcess from "@/components/sections/BodyDonationProcess";
import BodyDonationRequirements from "@/components/sections/BodyDonationRequirements";
import BodyDonationEthics from "@/components/sections/BodyDonationEthics";
import BodyDonationScience from "@/components/sections/BodyDonationScience";

// Shared Sections
import FAQ from "@/components/sections/FAQ";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  const [activeSection, setActiveSection] = useState("organ-intro");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Handle theme toggle
  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
  };

  // Handle intersection observer for sections
  useEffect(() => {
    if (typeof window !== "undefined") {
      setMounted(true);
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.5 }
      );

      // Observe all sections
      document.querySelectorAll("section[id]").forEach((section) => {
        observer.observe(section);
      });

      return () => {
        document.querySelectorAll("section[id]").forEach((section) => {
          observer.unobserve(section);
        });
      };
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <main className="relative">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={scrollToSection} 
        onThemeToggle={handleThemeToggle} 
      />

      <Tabs defaultValue="organ" className="w-full">
        <TabsContent value="organ" className="mt-0">
          <OrganDonationIntro />
          <OrganDonationWhat />
          <OrganDonationProcess />
          <OrganDonationLegal />
          <OrganDonationRequirements />
          <OrganDonationEthics />
          <OrganDonationProsCons />
        </TabsContent>

        <TabsContent value="body" className="mt-0">
          <BodyDonationIntro />
          <BodyDonationWhat />
          <BodyDonationProcess />
          <BodyDonationRequirements />
          <BodyDonationEthics />
          <BodyDonationScience />
        </TabsContent>
      </Tabs>

      {/* Shared sections */}
      <FAQ />
      <CallToAction />
    </main>
  );
}
