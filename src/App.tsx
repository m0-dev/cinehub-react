import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Favorite from './pages/Favorites'

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/favorites" element={<Favorite />}></Route>
      </Routes>
    </main>
  )
}

export default App
