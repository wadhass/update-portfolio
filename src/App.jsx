import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  return (
  <Router>
  {/* {  Navbar} */}
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="NotFound" element={<NotFound />} />
    
    </Routes>
    {/* {Footer} */}
    <Footer />
  </Router>
  )
}

export default App