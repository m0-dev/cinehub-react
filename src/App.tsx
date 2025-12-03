import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Favorite from './pages/Favorites'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/favorites" element={<Favorite />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
