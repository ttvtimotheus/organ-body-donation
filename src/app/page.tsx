"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

// UI Components
import Navigation from "@/components/ui-custom/Navigation";
import Footer from "@/components/ui-custom/Footer";
import OrganVisualization from "@/components/ui-custom/OrganVisualization";

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

// Interactive Components
import DecisionQuiz from "@/components/ui-custom/DecisionQuiz";
import Testimonials from "@/components/ui-custom/Testimonials";
import ScrollSection from "@/components/ui-custom/ScrollSection";

export default function Home() {
  // Track the currently visible section for navigation highlighting
  const [activeSection, setActiveSection] = useState("organ-intro");
  // Control which tab (organ or body donation) is currently active
  const [activeTab, setActiveTab] = useState("organ");
  // Prevent hydration issues by only rendering after component is mounted
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  /**
   * Toggles between light and dark theme
   */
  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  /**
   * Changes the active tab and scrolls to the appropriate section
   */
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value === "organ") {
      scrollToSection("organ-intro");
    } else {
      scrollToSection("body-intro");
    }
  };

  /**
   * Scrolls to a specific section and updates the active section state
   * Also updates the active tab based on the section prefix
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
    
    // Update active tab based on section prefix
    if (sectionId.startsWith("organ")) {
      setActiveTab("organ");
    } else if (sectionId.startsWith("body")) {
      setActiveTab("body");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMounted(true);
      
      // Set up IntersectionObserver to detect which section is currently visible
      // This enables automatic navigation highlighting as the user scrolls
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
              
              // Update the active tab based on which section type is visible
              if (entry.target.id.startsWith("organ")) {
                setActiveTab("organ");
              } else if (entry.target.id.startsWith("body")) {
                setActiveTab("body");
              }
            }
          });
        },
        { threshold: 0.5 } // Element must be 50% visible to trigger
      );

      // Observe all sections with IDs
      document.querySelectorAll("section[id]").forEach((section) => {
        observer.observe(section);
      });

      // Cleanup observer on component unmount
      return () => {
        document.querySelectorAll("section[id]").forEach((section) => {
          observer.unobserve(section);
        });
      };
    }
  }, [mounted]);

  // Prevent hydration mismatch by not rendering until client-side
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

      {/* Animated tab content with smooth transitions between organ and body donation sections */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsContent value="organ" className="space-y-16 mt-8">
              <ScrollSection id="organ-intro" onVisible={() => setActiveSection("organ-intro")}>
                <OrganDonationIntro />
              </ScrollSection>

              <ScrollSection id="organ-what" onVisible={() => setActiveSection("organ-what")}>
                <OrganDonationWhat />
              </ScrollSection>
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

      {/* Interactive quiz to help users decide between organ and body donation */}
      <ScrollSection id="decision-quiz" variant="neutral" className="bg-gradient-to-b from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
            Welche Option passt zu Ihnen?
          </h2>
          <p className="text-lg text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Beantworten Sie einige Fragen, um herauszufinden, ob Organspende oder Körperspende besser zu Ihren persönlichen Werten und Vorstellungen passt.
          </p>
          <DecisionQuiz />
        </div>
      </ScrollSection>

      {/* Personal stories and testimonials section */}
      <ScrollSection id="testimonials" variant="neutral" className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
            Erfahrungsberichte
          </h2>
          <p className="text-lg text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Lesen Sie, was Empfänger, Angehörige und Mediziner über Organ- und Körperspende berichten.
          </p>
          <Testimonials />
        </div>
      </ScrollSection>

      {/* Common sections for both donation types */}
      <FAQ />
      <CallToAction />
      
      <Footer />
    </main>
  );
}
