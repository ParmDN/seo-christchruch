export default function Sidebar() {
  return (
    <>
      {/* Sidebar Overlay (nine dots) */}
      <div id="extra-wrap" className="" suppressHydrationWarning>
        <div id="btn-close">
          <span></span>
          <span></span>
        </div>

        <div id="extra-content" className="wow fadeInRight" suppressHydrationWarning>
          <img
            src="/assets/seoly/seo-logo.jpg"
            className="w-150px"
            alt="SEO Company in Christchurch"
          />

          <div className="spacer-30-line"></div>

          <h5 className="mb-3">Our Services</h5>

          <ul className="ul-check">
            <li>
              <a href="#services">Keyword Research</a>
            </li>
            <li>
              <a href="#services">On-Page SEO</a>
            </li>
            <li>
              <a href="#services">Off-Page SEO</a>
            </li>
            <li>
              <a href="#services">Technical SEO</a>
            </li>
            <li>
              <a href="#services">Local SEO</a>
            </li>
            <li>
              <a href="#services">Content Marketing</a>
            </li>
          </ul>

          <div className="spacer-30-line"></div>

          <h5>Contact Us</h5>
          <div>
            <i className="icofont-clock-time me-2"></i>Monday - Saturday 08.00 - 18.00
          </div>
          <div>
            <i className="icofont-location-pin me-2"></i>Christchurch, New Zealand
          </div>
          <div>
            <i className="icofont-envelope me-2"></i>
            <a href="mailto:info@seocompanychristchurch.co.nz">info@seocompanychristchurch.co.nz</a>
          </div>
          <div>
            <i className="icofont-phone me-2"></i>
            <a href="tel:+64212124483">+64 21 212 4483</a>
          </div>

          <div className="spacer-30-line"></div>

          <div className="d-flex flex-wrap gap-2">
            <a className="btn-main" href="#contact"><span>Contact Us</span></a>
            <a className="btn-main btn-light-trans" href="tel:+64212124483"><span>Call Now</span></a>
            <a className="btn-main btn-light-trans" href="mailto:info@seocompanychristchurch.co.nz"><span>Email Us</span></a>
          </div>
        </div>
      </div>
    </>
  );
}
