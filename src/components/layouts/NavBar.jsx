import { NavLink, Link } from "react-router-dom";
import navLinks from "../../data/navLinks";
import siteContent from "../../data/siteContent";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        
        {/* BRAND */}
        <Link to="/" className="brand">
          <div className="brand__logo">
            {siteContent.brand.logoText}
          </div>
          <span className="brand__text">
            {siteContent.brand.name}
          </span>
        </Link>

        {/* NAV LINKS */}
        <nav className="nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "nav__link nav__link--active" : "nav__link"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <Link to="/contact" className="nav-cta">
          Let&apos;s Talk
        </Link>
      </div>
    </header>
  );
}

export default Navbar;