// src/App.tsx
import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/navbar";
import { AuthProvider } from "@/contexts/AuthContext";
import { Footer } from "./components/footer";
import IndexPage from "@/pages/index";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Dashboard from "@/pages/Dashboard";
import Topics from "@/pages/topics";
import AboutPage from "@/pages/about";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <NavbarComponent />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
