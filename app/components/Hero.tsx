export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bgcustom "
      id="hero"
      style={{
        backgroundImage: "url(/assets/seoly/backgrounds/bg.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100% top",
      }}
    >
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <h1 className="mb-3">Enhance Your Brand Visibility with AI-Driven SEO Platform</h1>
            <p className="col-lg-10">
              We deliver tailored SEO strategies that improve your search rankings, drive qualified traffic, and
              convert visitors into loyal customers. From audits to content, we’ve got you covered.
            </p>
            <div className="d-flex flex-wrap gap-2 mb-3">
              <a className="btn-main" href="#contact"><span>Get Free Proposal</span></a>
              <a className="btn-main btn-light-trans" href="tel:+64212124483"><span>Call Now</span></a>
              
            </div>

            <div className="d-lg-flex relative">
              <div className="d-lg-flex align-items-center lh-1-5 me-4">
                <h3 className="fs-48 id-color mb-0 me-2">23K+</h3>
                Keywords<br />Ranked
              </div>
              <div className="d-lg-flex align-items-center lh-1-5">
                <h3 className="fs-48 id-color mb-0 me-2">16+</h3>
                Years<br />Experience
              </div>
              <img src="/assets/seoly/arrow-black.webp" className="absolute w-40 end-0 top-0 sm-hide anim-left-right" alt="Arrow" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="relative" suppressHydrationWarning>
              <div className="bg-white shadow-soft abs abs-middle end-0 px-4 py-3 mt-4 rounded-pill overflow-hidden z-2 wow fadeInLeft" data-wow-delay=".7s">
                <div className="d-flex align-items-center justify-content-start">
                  <div className="relative d-flex me-4">
                    <img src="/assets/seoly/1.webp" className="w-50px circle ms-min-10 border border-3 border-white" alt="Avatar 1" />
                    <img src="/assets/seoly/2.webp" className="w-50px circle ms-min-10 border border-3 border-white" alt="Avatar 2" />
                    <img src="/assets/seoly/3.webp" className="w-50px circle ms-min-10 border border-3 border-white" alt="Avatar 3" />
                  </div>
                  <div className="lh-1-5">
                    <div className="fs-18 fw-bold text-dark mb-0">23k</div>
                    <div className="fs-14 text-muted">Happy Customers</div>
                  </div>
                </div>
              </div>
              <img src="/assets/seoly/c8.webp" className="w-100 pe-3 wow fadeInUp" data-wow-delay=".3s" alt="Hero" />
            </div>
          </div>
        </div>
      </div>
      <div className="gradient-edge-bottom light" />
    </section>
  );
}
