import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Gallery from "@/pages/Gallery";
import Enquiry from "@/pages/Enquiry";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Switch key={location}>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/enquiry" component={Enquiry} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/20 flex flex-col">
          <ScrollToTop />
          <Navbar />
          <main className="grow">
            <Router />
          </main>
          <Footer />
          <FloatingActionButtons />
          <Toaster />
        </div>
      </QueryClientProvider>
  );
}

export default App;
