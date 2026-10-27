import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tools from './pages/Tools';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './revamp.css';

export default function App() {
  return <BrowserRouter basename={import.meta.env.BASE_URL}><div className="site-shell"><Navbar /><Routes><Route path="/" element={<Home />} /><Route path="/tools" element={<Tools />} /><Route path="*" element={<Home />} /></Routes><Footer /></div></BrowserRouter>;
}