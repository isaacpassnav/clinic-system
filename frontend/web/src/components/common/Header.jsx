import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.webp";
function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark fixed-top bg-transparent py-2">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center text-white" to="/">
          <img src={logo} alt="Logo" width="60" className="me-2" />
          <span className="fw-bold">Enfer-tech-cap</span>
        </Link>

        <div className="d-flex ms-auto">
          <a href="/signup" className="btn btn-primary me-2">
            <i className="fa-solid fa-user-plus"></i> Sign Up
          </a>
          <a href="/login" className="btn btn-outline-light">
            <i className="fa-solid fa-right-to-bracket"></i> Login
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;