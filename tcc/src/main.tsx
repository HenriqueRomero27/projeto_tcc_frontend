import React from 'react'
import ReactDOM from 'react-dom/client'
// import Login from './pages/Login.tsx'
// import './index.css'
import "./root.css"
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
