import Sidebar from "./Sidebar";

export default function Header() {
  return (
    <>
      {/* Header (Homepage 4) */}
      <header className="transparent header-light clone nav-up">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="header-inner">
                <div className="de-flex sm-pt10">
                  <div className="de-flex-col">
                    {/* logo begin */}
                    <div id="logo">
                      <a href="/">
                        <img
                          className="logo-main"
                          src="/assets/seoly/seo-logo.png"
                          height={48}
                          style={{ height: "auto", width: "180px" }}
                          alt="SEO Company in Christchurch"
                        />
                        <img
                          className="logo-scroll"
                          src="/assets/seoly/seo-logo.png"
                          height={40}
                          style={{ height: "auto", width: "180px" }}
                          alt="SEO Company in Christchurch"
                        />
                        <img
                          className="logo-mobile"
                          src="/assets/seoly/seo-logo.png"
                          height={40}
                          style={{ height: "auto", width: "180px" }}
                          alt="SEO Company in Christchurch"
                        />
                      </a>
                    </div>
                    {/* logo close */}
                  </div>

                  <div className="de-flex-col header-col-mid">
                    <ul id="mainmenu">
                      <li className="menu-item-has-children">
                        <a className="menu-item" href="#">Home </a>
                      </li>

                      <li>
                        <a className="menu-item" href="#about">About Us</a>
                      </li>

                      <li className="menu-item-has-children">
                        <a className="menu-item" href="#services">Services </a>
                      </li>

                      <li>
                        <a className="menu-item" href="#features">Features</a>
                      </li>

                      <li className="menu-item-has-children">
                        <a className="menu-item" href="#faq">FAQ's </a>
                      </li>

                      <li>
                        <a className="menu-item" href="#contact">Contact</a>
                      </li>
                    </ul>
                  </div>

                  <div className="de-flex-col">
                    <div className="menu_side_area">
                      <a className="btn-main fx-slide" href="#contact" data-hover="Get Free Proposal">
                        <span>Get Free Proposal</span>
                      </a>
                      <span id="menu-btn"></span>
                    </div>

                    <div id="btn-extra" className="img">
                      <img src="/assets/seoly/dots.svg" alt="extra" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar />
    </>
  );
}
