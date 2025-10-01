export default function FAQ() {
  return (
    <section id="faq" className="mx-4">
      <div className="container">
        <div className="faq-panel">
          <div className="row align-items-start mb-3">
            <div className="col-lg-8">
              <div className="subtitle id-color">Do you have</div>
              <h2 className="mb-0">Any questions?</h2>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <a href="#" className="more-link">More questions <i className="fa-solid fa-chevron-right ms-1" /></a>
            </div>
          </div>

          <div className="row g-4">
            {/* Left column */}
            <div className="col-lg-6">
              <details className="faq-item" open>
                <summary>
                  <span>What is SEO and why is it important?</span>
                  <i className="fa-solid fa-chevron-down chev" />
                </summary>
                <div className="content">
                  SEO, or Search Engine Optimization, is the process of improving your website's visibility on search engine results pages (SERPs) to drive organic (non-paid) traffic. It involves optimizing various aspects of your website and content to rank higher in search engine rankings. SEO is important because it helps increase your website's visibility, attract more qualified traffic, and improve your chances of converting visitors into customers.
                </div>
              </details>
              <details className="faq-item">
                <summary>
                  <span>How long does it take to see results from SEO efforts?</span>
                  <i className="fa-solid fa-chevron-down chev" />
                </summary>
              </details>
              <details className="faq-item">
                <summary>
                  <span>What SEO services do you offer?</span>
                  <i className="fa-solid fa-chevron-down chev" />
                </summary>
              </details>
            </div>

            {/* Right column */}
            <div className="col-lg-6">
              <details className="faq-item">
                <summary>
                  <span>Can you guarantee top rankings on search engines?</span>
                  <i className="fa-solid fa-chevron-down chev" />
                </summary>
              </details>
              <details className="faq-item">
                <summary>
                  <span>How do you choose right SEO strategy for my business?</span>
                  <i className="fa-solid fa-chevron-down chev" />
                </summary>
              </details>
              <details className="faq-item">
                <summary>
                  <span>What kind of reporting can I expect to receive?</span>
                  <i className="fa-solid fa-chevron-down chev" />
                </summary>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
