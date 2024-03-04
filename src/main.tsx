import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ResultContextProvider from "./contexts/ResultContextProvider";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <ChakraProvider>
        <ResultContextProvider>
          <App />
        </ResultContextProvider>
      </ChakraProvider>
    </React.StrictMode>
  </BrowserRouter>
);
