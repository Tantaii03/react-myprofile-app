import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import EduExp from './pages/EduExp'
import Spec from './pages/Spec'
import Projects from './pages/Projects'
import Skill from './pages/Skill'
import Contact from './pages/Contact'

export default function App() {
  // ถ้า main.jsx ครอบ <BrowserRouter> ไว้แล้ว ให้ลบ BrowserRouter ตรงนี้ออก
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/education" element={<EduExp />} />
          <Route path="/specialization" element={<Spec />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}