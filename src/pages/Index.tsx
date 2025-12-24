import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ExtracurricularSection from "@/components/ExtracurricularSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mohanraj A | AI & Data Science Undergraduate</title>
        <meta
          name="description"
          content="Portfolio of Mohanraj A, an Artificial Intelligence and Data Science undergraduate focused on ethical AI solutions and logical problem solving."
        />
        <meta
          name="keywords"
          content="Mohanraj A, AI, Data Science, Portfolio, Student, Machine Learning"
        />
        <link rel="canonical" href="https://mohanraj-portfolio.lovable.app" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
          <ExtracurricularSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
