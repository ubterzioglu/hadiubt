import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PathCards from "@/components/PathCards";
import UpdatesSection from "@/components/UpdatesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PathCards />
      <UpdatesSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border/30">
        <p className="text-xs text-muted-foreground">
          © 2025 Umut Barış Terzioğlu · ubterzioglu.de
        </p>
      </footer>
    </div>
  );
};

export default Index;
