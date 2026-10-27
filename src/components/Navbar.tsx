import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const close = () => setOpen(false);
  return <header className="site-header"><nav className="nav-inner" aria-label="Main navigation">
    <Link to="/" className="brand" onClick={close}><span className="brand-mark">NK</span><span>Nayan Kuikel<small>CIVIL ENGINEER</small></span></Link>
    <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'CLOSE −' : 'MENU +'}</button>
    <div className={`nav-links ${open ? 'is-open' : ''}`}>
      <a href={location.pathname === '/' ? '#about' : '/#about'} onClick={close}>About</a><a href={location.pathname === '/' ? '#experience' : '/#experience'} onClick={close}>Experience</a><a href={location.pathname === '/' ? '#projects' : '/#projects'} onClick={close}>Projects</a><Link to="/tools" onClick={close}>Engineering tools</Link><a className="nav-contact" href="mailto:er.nayankuikel@gmail.com" onClick={close}>Contact ↗</a>
    </div>
  </nav></header>;
}
