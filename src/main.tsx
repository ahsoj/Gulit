import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import eruda from "eruda";

import WebApp from "@twa-dev/sdk";

const availablePlatform = ["android", "android_x", "ios"]

WebApp.isVersionAtLeast('6.1') && WebApp.ready();
WebApp.enableClosingConfirmation();
WebApp.setHeaderColor("#0094FF");

eruda.init()

if (availablePlatform.map((platform) => WebApp.platform === platform)) {
  console.log("Luckily You have access to this app")
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
