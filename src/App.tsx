import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Men from './pages/Men'
import Children from './pages/Children'

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/children" element={<Children />} />
      </Routes>
    </Router>
  )
}

export default App
