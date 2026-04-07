declare module "*.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CartProvider } from "./context/CartProvider";
import { Toaster } from "@/components/ui/sonner"


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <Toaster />
      <App />
    </CartProvider>
  </React.StrictMode>
);