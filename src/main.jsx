import * as React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import AuthProvider from "./provider/AuthProvider";
import router from "./Routes/Router";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ToastContainer></ToastContainer>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </HelmetProvider>
    </QueryClientProvider>
  </AuthProvider>
);
