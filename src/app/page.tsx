"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

// Navigation
import Navigation from "@/components/ui-custom/Navigation";
import Footer from "@/components/ui-custom/Footer";

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
  const [activeTab, setActiveTab] = useState("organ");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Handle theme toggle
  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value === "organ") {
      scrollToSection("organ-intro");
    } else {
      scrollToSection("body-intro");
    }
  };

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
    
    // Update active tab based on section
    if (sectionId.startsWith("organ")) {
      setActiveTab("organ");
    } else if (sectionId.startsWith("body")) {
      setActiveTab("body");
    }
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
              
              // Update active tab based on section
              if (entry.target.id.startsWith("organ")) {
                setActiveTab("organ");
              } else if (entry.target.id.startsWith("body")) {
                setActiveTab("body");
              }
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
    <main className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 min-h-screen">
      <Navigation 
        activeSection={activeSection}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onSectionChange={scrollToSection} 
        onThemeToggle={handleThemeToggle} 
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsContent value="organ" className="mt-0 pt-16">
              <OrganDonationIntro />
              <OrganDonationWhat />
              <OrganDonationProcess />
              <OrganDonationLegal />
              <OrganDonationRequirements />
              <OrganDonationEthics />
              <OrganDonationProsCons />
            </TabsContent>

            <TabsContent value="body" className="mt-0 pt-16">
              <BodyDonationIntro />
              <BodyDonationWhat />
              <BodyDonationProcess />
              <BodyDonationRequirements />
              <BodyDonationEthics />
              <BodyDonationScience />
            </TabsContent>
          </Tabs>
        </motion.div>
      </AnimatePresence>

      {/* Shared sections */}
      <FAQ />
      <CallToAction />
      
      {/* Footer mit Quellenlinks */}
      <Footer />
    </main>
  );
}
