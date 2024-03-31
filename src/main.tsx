import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import eruda from "eruda";

import WebApp from "@twa-dev/sdk";

const availablePlatform = ["android", "android_x", "ios"]

WebApp.isVersionAtLeast('6.1')
WebApp.ready();
console.log(WebApp.initData)
WebApp.expand();
WebApp.enableClosingConfirmation();
WebApp.setHeaderColor("#0094FF");

//Main Button
WebApp.MainButton.setText("Browse")
WebApp.MainButton.color = "#000"
WebApp.MainButton.show()
// WebApp.MainButton.hide()


eruda.init()

if (availablePlatform.map((platform) => WebApp.platform === platform)) {
  console.log("Luckily You have access to this app")
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
