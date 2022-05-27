import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container d-flex justify-content-between">
        <ul className="social-icons text-white" href="#">
          <li><a href="#"><img src="/images/icons/akar-icons_discord-fill.png" alt="" /></a></li>
          <li><a href="#"><img src="/images/icons/akar-icons_twitter-fill.png" alt="" /></a></li>
          <li><a href="#"><img src="/images/icons/bxl_spotify.png" alt="" /></a></li>
          <li><a href="#"><img src="/images/icons/bxl_youtube.png" alt="" /></a></li>
          <li><a href="#"><img src="/images/icons/Frame 100.png" alt="" /></a></li>
          <li><a href="#"><img src="/images/icons/InstagramLogo.png" alt="" /></a></li>
          <li><a href="#"><img src="/images/icons/Logomark-Transparent White 1.png" alt="" /></a></li>
        </ul>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
              Buy now
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              Info
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              Pack a Kick
              </a>
            </li>
            <li className="nav-item dropdown">
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
