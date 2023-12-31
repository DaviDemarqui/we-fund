import React from "react";
import { createRoot } from "react-dom/client";

import { Sepolia } from "@thirdweb-dev/chains"
import { StateContextProvider } from "./context";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import { BrowserRouter } from "react-router-dom";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThirdwebProvider
      clientId={import.meta.env.VITE_CLIENT_ID}
      activeChain={Sepolia}
    >
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </ThirdwebProvider>
    </BrowserRouter>
  </React.StrictMode>
);
