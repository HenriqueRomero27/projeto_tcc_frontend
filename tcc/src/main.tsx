import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import Login from './pages/Login.tsx'
// import './index.css'
import "./root.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Login />
  </React.StrictMode>,
)
