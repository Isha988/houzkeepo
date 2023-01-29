import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav>
        <div>logo</div>
        <Link to="/signin"> signin </Link>
    </nav>
  )
}

export default Navbar
