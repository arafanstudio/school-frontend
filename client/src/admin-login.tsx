import { createRoot } from "react-dom/client";
import AdminLogin from "./pages/AdminLogin";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";

// This is the dedicated entry point for the non-SPA admin login page
createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <ThemeProvider defaultTheme="light">
      <Toaster />
      <AdminLogin isNonSPA={true} />
    </ThemeProvider>
  </ErrorBoundary>
);
