export default function Footer() {
  return (
    <footer className="footer-light mt-5">
      <div className="container">
        <div className="row gx-5">
          {/* Left: About + socials */}
          <div className="col-lg-5 col-sm-6">
            <img src="/assets/seoly/seo-logo.png" alt="SEO Company in Christchurch" style={{height: 90, width: 'auto'}} />
            <div className="spacer-20"></div>
            <p>
              Unlock the full potential of your online presence with Seoly, where innovation meets optimization. In today's
              digital landscape, visibility is paramount, and our tailored SEO solutions are crafted to ensure your brand
              shines brightly amidst the competition.
            </p>

            {/* <div className="social-icons mb-sm-30">
              <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="Twitter / X"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
              <a href="#" aria-label="TikTok"><i className="fa-brands fa-tiktok"></i></a>
            </div> */}
          </div>

          {/* Middle: Company + Services widgets */}
          <div className="col-lg-3 col-sm-12 order-lg-1 order-sm-2">
            <div className="row">
             
              <div className="col-lg-12 col-sm-12">
                <div className="widget">
                  <h5>Important Links</h5>
                  <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#services">Our Services</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact info */}
          <div className="col-lg-4 col-sm-6 order-lg-2 order-sm-1">
            <div className="widget">
              <div className="fw-bold text-dark"><i className="icofont-location-pin me-2 id-color"></i>Office Location</div>
              Christchurch, Central City

              <div className="spacer-20"></div>

              <div className="fw-bold text-dark"><i className="icofont-envelope me-2 id-color"></i>Send a Message</div>
              <a href="mailto:info@seocompanychristchurch.co.nz">info@seocompanychristchurch.co.nz</a>

              <div className="spacer-20"></div>

              <div className="fw-bold text-dark"><i className="icofont-envelope me-2 id-color"></i>Make a Phone Call</div>
              <a href="tel:+64212124483">+64 21 212 4483</a>

              <div className="spacer-20"></div>

             
            </div>
          </div>
        </div>
      </div>

      {/* Subfooter */}
      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex align-items-center justify-content-center py-3">
                <div className="de-flex-col" suppressHydrationWarning>
                ⓒ {new Date().getFullYear()} - SEO Company in New Zealand
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
