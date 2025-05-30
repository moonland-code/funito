import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";
import { AuthProvider } from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider> {/* AuthProvider باید در اینجا قرار بگیره */}
        <Provider>
          <App />
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
