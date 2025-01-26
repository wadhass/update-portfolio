import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import NewPage from "./pages/NewPage"
import ProjectPage from "./pages/ProjectPage"
import Services from "./section/Services"
import ContactMe from "./section/ContactMe"
const App = () => {
  return (
  <Router>
  {/* {  Navbar} */}
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-page" element={<NewPage />} />
      <Route path="NotFound" element={<NotFound />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<ProjectPage />} />
      <Route path="contactme" element={<ContactMe />} />
    </Routes>
    {/* {Footer} */}
    <Footer />
  </Router>
  )
}

export default App