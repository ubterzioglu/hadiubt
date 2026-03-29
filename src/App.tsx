import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import CorporateProjects from "./pages/CorporateProjects.tsx";
import PrivateProjects from "./pages/PrivateProjects.tsx";
import TechStack from "./pages/TechStack.tsx";
import Experience from "./pages/Experience.tsx";
import AboutMe from "./pages/AboutMe.tsx";
import MyCv from "./pages/MyCv.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/corporate-projects" element={<CorporateProjects />} />
          <Route path="/private-projects" element={<PrivateProjects />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/my-cv" element={<MyCv />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
