
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

import IndexPage from "@/pages/index";
import Joke from "./pages/Joke";
import AboutPage from "@/pages/about";
import Topics from "./pages/topics";
import Puzzel from "./pages/Puzzle";
import Entertainment from "./pages/Entertainment";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    // کل صفحه یک صفحه کامل با حداقل ارتفاع صفحه نمایش
    <div className="flex flex-col min-h-screen">
      {/* نوبار */}
      <Navbar />

      {/* محتوا */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/puzzel" element={<Puzzel />} />
          <Route path="/joke" element={<Joke />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/topics" element={<Topics />} />
        </Routes>
      </main>
      <div className="fixed bottom-0 left-0 w-full  text-center p-4">
        <Footer />
      </div>
      
      
    </div>
    
  );
}

export default App;
