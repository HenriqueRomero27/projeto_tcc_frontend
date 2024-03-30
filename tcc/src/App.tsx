import './root.css'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
// import Marketplace from './pages/Marketplace'
import FindPet from './pages/FindPet'

export default function App() {
  return (
    <div className="page">
      <header>
        <Header />
      </header>
      <main>
        <FindPet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}