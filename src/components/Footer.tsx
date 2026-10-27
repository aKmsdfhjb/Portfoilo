export default function Footer() {
  return <footer className="site-footer"><div className="footer-inner"><span>© {new Date().getFullYear()} Er. Nayan Kuikel ||  Aashutosh Kuikel</span><span>Made by Aashutosh Kuikel</span><span>KATHMANDU, NEPAL · CIVIL ENGINEERING</span><a href="#top" onClick={() => window.scrollTo({top:0,behavior:'smooth'})}>BACK TO TOP ↑</a></div><div className="footer-credit"></div></footer>;
}
