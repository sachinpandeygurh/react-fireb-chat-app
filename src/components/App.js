import React from "react"

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "../context/AuthContext"


import Login from "./Login"
import Chats from "./Chats";

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/chats" element={<Chats/>} />
            <Route path="/" element={<Login/>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
