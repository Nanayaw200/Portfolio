import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import navLinks from "../../data/navLinks";
import siteContent from "../../data/siteContent";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="brand" aria-label="Go to homepage">
          <div className="brand__logo">{siteContent.brand.logoText}</div>
          <span className="brand__text">
            {siteContent.brand.shortName || siteContent.brand.name}
          </span>
        </Link>

        <nav className="nav nav--desktop" aria-label="Primary navigation">
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

        <Link to="/contact" className="nav-cta nav-cta--desktop">
          Let&apos;s Talk
        </Link>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={menuOpen ? "mobile-menu mobile-menu--open" : "mobile-menu"}
      >
        <div
          className="mobile-menu__backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        <div className="mobile-menu__panel">
          <div className="mobile-menu__header">
            <div className="mobile-menu__brand">
              <div className="brand__logo">{siteContent.brand.logoText}</div>
              <span className="brand__text">
                {siteContent.brand.name}
              </span>
            </div>

            <button
              className="mobile-menu__close"
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <HiOutlineX />
            </button>
          </div>

          <nav className="mobile-menu__nav" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "mobile-menu__link mobile-menu__link--active"
                    : "mobile-menu__link"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/contact" className="nav-cta mobile-menu__cta">
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;