import React, { useEffect, useState } from "react";
import logo from "../../../../salif-portfolio/salif.png";
import { Link } from "react-scroll";

const menuList = [
  {
    id: 2,
    path: "about",
    label: "Home",
  },
  {
    id: 3,
    path: "portfolio",
    label: "Projects",
  },
  {
    id: 4,
    path: "contact",
    label: "Contact",
  },
];
const Header = () => {
  const [isSticky, setisSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);
    return () => window.removeEventListener("scroll", stickyHeader);
  }, []);

  const stickyHeader = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 85) {
      setisSticky(true);
    } else {
      setisSticky(false);
    }
  };
  return (
    <header className={`main-header ${isSticky ? "fixed-header" : ""}`}>
      <div className="header-upper">
        <div className="container">
          <div className="header-inner d-flex align-items-center">
            {/* START LOGO DESIGN AREA */}
            <div className="logo-outer">
              <div className="logo"></div>
            </div>
            {/* END LOGO DESIGN AREA */}
            {/* START NAV DESIGN AREA */}
            <div className="nav-outer">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo">
                    <a href="#"></a>
                  </div>
                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="navbar-collapse collapse">
                  <ul className="navigation onepage clearfix">
                    {menuList.map(({ id, label, path }) => (
                      <li key={id}>
                        <Link
                          to={path}
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={500}
                          className="nav-link-click"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
              {/*  END NAV DESIGN AREA */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
