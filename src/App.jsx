import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, Register  } from './pages/index';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
