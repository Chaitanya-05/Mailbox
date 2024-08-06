import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login'
import { Inbox } from './pages/inbox/inbox';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inbox" element={<Inbox />} />
        {/* <Route path="/Other" element={<Underdev />} /> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
