export default function About() {
  return (
    <section id="about"
      className="p-0 relative bgcustom"
      style={{
        backgroundImage: "url(/assets/seoly/backgrounds/bg-2.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100% top",
      }}
    >
      <div className="container relative z-2">
        <div className="row g-4 gx-5 align-items-center">
          <div className="col-lg-6">
            <div className="relative">
              <img src="/assets/seoly/8.webp" className="w-100 px-3" alt="About image" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="subtitle id-color">About Us</div>
            <h2>Elevate Your Brand’s Online Presence with Expert SEO for Sustainable Growth</h2>
            <p>At our SEO Company in New Zealand, we understand the importance of a strong online presence for businesses looking to thrive in today’s digital landscape.</p>
            <ul className="ul-check">
              <li>We have specialized knowledge and experience in optimizing websites.</li>
              <li>As reputable SEO agency, we can help improve a website’s rankings</li>
              <li>We have access to professional tools for research, analytics and more.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="gradient-edge-top light" />
      <div className="gradient-edge-bottom light" />
    </section>
  );
}
