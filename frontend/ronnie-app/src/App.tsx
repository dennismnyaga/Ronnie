/* eslint-disable prettier/prettier */
import "./App.css"
import AboutPage from "./components/AboutPage"
import HomePage from "./components/HomePage"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
   <div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about/" element={<AboutPage />} />
      </Routes>
    </Router>
   </div>
  )
}

export default App
