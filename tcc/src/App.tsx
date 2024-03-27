import './root.css'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Marketplace from './pages/Marketplace'

export default function App() {
  return (
    <div className="page">
      <header>
        <Header />
      </header>
      <main>
        <Marketplace />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}