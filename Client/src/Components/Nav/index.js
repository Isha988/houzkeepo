import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="top-navbar">
      <div className="top-logo">Houzkeepo</div>
      <div className="nav-link-container">
        <Link to="/signin" className="nav-link">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar
