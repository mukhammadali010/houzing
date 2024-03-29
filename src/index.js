import React from "react";
import ReactDOM from "react-dom/client";
import RootContext from "./context";
import "./index.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Root from "./root";
import { QueryClient, QueryClientProvider } from 'react-query'


const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <RootContext>
    <QueryClientProvider client={queryClient}>
      <Root />
      </QueryClientProvider>
    </RootContext>
  </React.StrictMode>
);
