export default function Features() {
  return (
    <section id="features" className="pt-5 pb-5">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-5">
            <div className="d-inline-flex align-items-center gap-2 bg-white rounded-pill px-3 py-2 soft-shadow-sm mb-3">
              <span className="icon-badge bg-gradient" aria-hidden>
                <i className="fa-solid fa-rocket"></i>
              </span>
              <span className="fw-600 text-muted">Features</span>
            </div>
            <h2 className="display-6 fw-bold mb-3">
              Unlock Sales and Conversions with SEO in New Zealand, Showcasing our Proven Expertise
            </h2>
            <p className="text-muted mb-4">
              Supercharge your business with our effective <strong>SEO Services in New Zealand</strong>.
              Increase sales with strategic online visibility and optimisation.
            </p>
            <a href="#contact" className="btn-main"><span>Contact us</span></a>
          </div>

          <div className="col-lg-7">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="feature-item">
                  <div className="icon-circle icon-blue"><i className="fa-solid fa-fire"></i></div>
                  <h4>Increased Visibility</h4>
                  <span className="color-underline color-blue" />
                  <p>Enhanced online visibility attracts more potential customers, increasing website traffic and sales opportunities.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-item">
                  <div className="icon-circle icon-orange"><i className="fa-solid fa-bullseye"></i></div>
                  <h4>Precision Targeting</h4>
                  <span className="color-underline color-orange" />
                  <p>Strategic keyword targeting ensures your products or services reach the right audience, boosting conversion rates.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-item">
                  <div className="icon-circle icon-green"><i className="fa-solid fa-chart-line"></i></div>
                  <h4>Increased Sales</h4>
                  <span className="color-underline color-green" />
                  <p>Engaging content not only attracts but persuades visitors, turning them into customers and driving sales.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-item">
                  <div className="icon-circle icon-purple"><i className="fa-solid fa-user-check"></i></div>
                  <h4>User Satisfaction</h4>
                  <span className="color-underline color-purple" />
                  <p>A seamless website experience, optimised through on-page and technical SEO, increases user satisfaction and encourages more sales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
