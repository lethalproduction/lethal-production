import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Thumbnails from "@/pages/Thumbnails";
import MinecraftAnimations from "@/pages/MinecraftAnimations";
import VideoEditing from "@/pages/VideoEditing";
import BrandAmbassadors from "@/pages/BrandAmbassadors";
import Contact from "@/pages/Contact";
import Navbar from "@/components/Navbar";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/thumbnails" component={Thumbnails} />
        <Route path="/minecraft-animations" component={MinecraftAnimations} />
        <Route path="/video-editing" component={VideoEditing} />
        <Route path="/brand-ambassadors" component={BrandAmbassadors} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider delayDuration={0}>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
