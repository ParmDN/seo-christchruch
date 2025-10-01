export default function Partners() {
  return (
    <section>
      <div className="container">
        <div className="row g-4 gx-5">
          <div className="col-lg-4">
            <div className="subtitle id-color mb-3">Why Choose Us</div>
            <h2>Boost Your Online Visibility</h2>
            <div className="relative">
              <a href="#contact" className="btn-main fx-slide btn-light-trans" data-hover="Get Free Proposal"><span>Get Free Proposal</span></a>
              <img src="/assets/seoly/arrow-black.webp" className="absolute w-50 end-0 top-0 sm-hide anim-left-right" alt="arrow" />
            </div>
          </div>
          <div className="col-lg-4">
            <h4 className="mb-4">Why choose us</h4>
            <ol className="ol-style-1">
              <li>We have specialized knowledge and experience in optimizing websites.</li>
              <li>We have access to professional tools for research, analytics and more.</li>
              <li>As reputable SEO agency, we can help improve a website’s rankings</li>
            </ol>
          </div>
          <div className="col-lg-4">
            <h4 className="mb-4">Benefits for you</h4>
            <ol className="ol-style-1">
              <li>Attracts more targeted traffic by optimizing your keywords.</li>
              <li>Increase visit, lower bounce rates, and higher customer satisfaction.</li>
              <li>Higher search engine rankings can enhance your brand’s credibility.</li>
            </ol>
          </div>
          <div className="spacer-half" />
          <div className="col-lg-12">
            <div className="row g-4 gx-lg-5 align-items-center">
              <div className="col-md-3 col-6">
                <div className="text-center">
                  <img src="/assets/seoly/google-partner.webp" className="w-50" alt="Google Partner" />
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="text-center">
                  <img src="/assets/seoly/meta-business-partner.webp" className="w-50" alt="Meta Partner" />
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="text-center">
                  <img src="/assets/seoly/hubspot-certified-partner.webp" className="w-50" alt="Hubspot Partner" />
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="text-center">
                  <img src="/assets/seoly/tiktok-marketing-partners.webp" className="w-50" alt="TikTok Partner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
