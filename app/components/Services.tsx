export default function Services() {
  return (
    <section id="services" className="pt-5 pb-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5">
            <div className="subtitle id-color wow fadeInUp">Our Services</div>
            <h2 className="mb-0 wow fadeInUp">Grow Traffic & Increase Revenue</h2>
          </div>
          <div className="col-lg-4 offset-lg-3">
            <div className="spacer-single"></div>
            <p className="wow fadeInUp">We stay ahead with the latest SEO trends, tools, and best practices to ensure your business remains competitive in the ever-changing digital landscape.</p>
          </div>
        </div>

        <div className="spacer-single"></div>

        <div className="row g-4">
          <div className="col-lg-4 wow fadeInRight" data-wow-delay=".2s">
            <div className="bg-color-op-2 relative h-100 p-40 rounded-1">
              <img src="/assets/seoly/search.png" className="w-90px bg-color text-light p-3 rounded-10px fs-56 mb-4" alt="Keyword Research" />
              <h3>Keyword Research</h3>
              <p>Discover high-impact keywords your target audience is searching for. This process helps align your content and SEO strategy to improve visibility and attract qualified traffic.</p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInRight" data-wow-delay=".4s">
            <div className="bg-color-op-2 relative h-100 p-40 rounded-1">
              <img src="/assets/seoly/network.png" className="w-90px bg-color text-light p-3 rounded-10px fs-56 mb-4" alt="On-Page SEO" />
              <h3>On-Page SEO</h3>
              <p>Optimize website elements like titles, meta descriptions, headers, images, and URLs to improve relevance and user experience for both search engines and visitors.</p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInRight" data-wow-delay=".6s">
            <div className="bg-color-op-2 relative h-100 p-40 rounded-1">
              <img src="/assets/seoly/chart.png" className="w-90px bg-color text-light p-3 rounded-10px fs-56 mb-4" alt="Off-Page SEO" />
              <h3>Off-Page SEO</h3>
              <p>Build domain authority through external efforts like backlink acquisition, digital PR, and brand mentions to boost your rankings and trust in search engines.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
