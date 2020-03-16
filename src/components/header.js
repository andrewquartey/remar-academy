import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from '../assets/images/logo-img.png'

const Header = ({ siteTitle }) => (
  <header>
     
    <div className="toolbar-wrap">
        <div className="uk-container uk-container-center">
            <div className="tm-toolbar uk-clearfix uk-hidden-small">
                <div className="uk-float-right">
                    <div className="uk-panel">
                        <div className="social-top">
                            <Link to="#"><span className="uk-icon-small uk-icon-hover uk-icon-facebook"></span></Link>
                            <Link to="#"><span className="uk-icon-small uk-icon-hover uk-icon-twitter"></span></Link>
                            <Link to="#"><span className="uk-icon-small uk-icon-hover uk-icon-google"></span></Link>
                            <Link to="#"><span className="uk-icon-small uk-icon-hover uk-icon-pinterest"></span></Link>
                            <Link to="#"><span className="uk-icon-small uk-icon-hover uk-icon-youtube"></span></Link>
                            <Link to="#"><span className="uk-icon-small uk-icon-hover uk-icon-instagram"></span></Link>
                            <Link to="#"><span className="uk-icon-small uk-icon-hover uk-icon-flickr"></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <div className="tm-menu-box">
          <div style={{height: '70px'}} className="uk-sticky-placeholder">
              <nav style={{margin: '0px'}} className="tm-navbar uk-navbar" data-uk-sticky="">
                  <div className="uk-container uk-container-center">
                      <Link className="tm-logo uk-float-left" to="/">
                          <img src={logo} alt="logo" title="logo"/>
                      </Link>

                      <ul className="uk-navbar-nav uk-hidden-small">
                          <li data-uk-dropdown="{'preventflip':'y'}" aria-haspopup="true" aria-expanded="false"><Link to="about.html">Home</Link></li>
                          <li data-uk-dropdown="{'preventflip':'y'}" aria-haspopup="true" aria-expanded="false"><Link to="about.html">About</Link></li>
                          <li className="uk-parent" data-uk-dropdown="{'preventflip':'y'}" aria-haspopup="true" aria-expanded="false"><Link to="#">Pages</Link>
                              <div className="uk-dropdown uk-dropdown-navbar uk-dropdown-width-1">
                                  <div className="uk-grid uk-dropdown-grid">
                                      <div className="uk-width-1-1">
                                          <ul className="uk-nav uk-nav-navbar">
                                              <li><Link to="players.html">Players</Link>
                                              </li>
                                              <li><Link to="gallery.html">Gallery</Link>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li className="uk-parent" data-uk-dropdown="{'preventflip':'y'}" aria-haspopup="true" aria-expanded="false"><Link to="match-list.html">Match</Link>
                              <div className="uk-dropdown uk-dropdown-navbar uk-dropdown-width-1">
                                  <div className="uk-grid uk-dropdown-grid">
                                      <div className="uk-width-1-1">
                                          <ul className="uk-nav uk-nav-navbar">
                                              <li><Link to="results.html">Results</Link>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li><Link to="news.html">News</Link>
                          </li>
                          <li><Link to="category.html">Shop</Link>
                          </li>
                          <li><Link to="contact.html">Contact</Link>
                          </li>
                      </ul>
                      <Link to="#offcanvas" className="uk-navbar-toggle uk-visible-small" data-uk-offcanvas=""></Link>
                  </div>
              </nav>
          </div>

      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
