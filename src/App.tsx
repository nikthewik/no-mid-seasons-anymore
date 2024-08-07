// Libraries
import React, { createContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// Types
import { MenuContextType, FormContextType } from "./types/ContextTypes";
// Style
import "./index.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/800.css";
// Components
import AppLayout from "./components/AppLayout/AppLayout";
import Home from "./pages/Home";
import Charts from "./pages/Charts";
import PageNotFound from "./pages/PageNotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

// Context
export const MenuContext = createContext<MenuContextType | null>(null);
export const FormContext = createContext<FormContextType | null>(null);

function App(): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("temperature");

  function toggleMenu(): void {
    setIsOpen(!isOpen);
  }

  function setChart(chart: string): void {
    setValue(chart);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <MenuContext.Provider value={{ isOpen, toggleMenu }}>
        <FormContext.Provider value={{ value, setChart }}>
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="home" />} />
                <Route path="home" element={<Home />} />
                <Route path="charts/:chart" element={<Charts />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </FormContext.Provider>
      </MenuContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
