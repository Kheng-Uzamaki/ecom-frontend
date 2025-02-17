
import { FaBeer } from 'react-icons/fa'
import './index.css'
import Products from './components/Products/Products'
import Navbar from '../src/components/shared/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/home/Home'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  )
}

export default App
