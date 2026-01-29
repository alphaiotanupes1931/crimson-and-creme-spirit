import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { BrothersPage } from "./pages/BrothersPage";
import { ServicePage } from "./pages/ServicePage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactPage } from "./pages/ContactPage";
import { JournalPage } from "./pages/JournalPage";
import { LineagePage } from "./pages/LineagePage";
import { CommunityServicePage } from "./pages/CommunityServicePage";
import { EventsPage } from "./pages/EventsPage";
import { RecentGraduatesPage } from "./pages/RecentGraduatesPage";
import { ChapterPortalPage } from "./pages/ChapterPortalPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/brothers" element={<BrothersPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/lineage" element={<LineagePage />} />
            <Route path="/community-service" element={<CommunityServicePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/graduates" element={<RecentGraduatesPage />} />
            <Route path="/portal" element={<ChapterPortalPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;