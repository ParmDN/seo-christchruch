"use client";
import { useEffect, useMemo, useState } from "react";

type Testimonial = {
  quote: string;
  author: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Impressive Performance! We've seen a remarkable increase in organic traffic since engaging SEO Company in New Zealand. Their team's dedication and strategic approach have exceeded our expectations.",
    author: "Fredric Helweg, Marketing Director",
  },
  {
    quote:
      "Impressive Performance! We've seen a remarkable increase in organic traffic since engaging SEO Company in New Zealand. Their team's dedication and strategic approach have exceeded our expectations.",
    author: "Emily Grace Johnson, Business Owner",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  // Prevent StrictMode double intervals by memoizing key and clearing on unmount
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 5000);
    return () => clearInterval(id);
  }, [total]);

  const current = useMemo(() => testimonials[index], [index]);

  return (
    <section id="testimonials" className="mx-4">
      <div className="testimonials-panel">
        <div className="row g-4 align-items-center">
          {/* Left: testimonial carousel */}
          <div className="col-lg-8">
            <div className="testimonial-copy">
              <i className="icofont-quote-left quote-icon" />
              <h3 className="fs-28 mb-4">{current.quote}</h3>
              <span className="author">{current.author}</span>
              <div className="dots" aria-label="testimonial pagination">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`dot ${i === index ? "active" : ""}`}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: ratings (Trustpilot & Google) */}
          <div className="col-lg-4" style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div className="relative text-center" style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
              {/* Trustpilot */}
              <div className="d-inline-block text-center m-4 wow fadeInRight" data-wow-delay=".2s" style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <h4 className="fw-bold mb-1 fs-24">Excellent</h4>
                <div className="de-rating-ext fs-18" style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                  <span className="d-stars">
                    <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                  </span>
                  <div className="fs-14 mb-0" style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>Based on <span className="fw-bold">185 reviews</span></div>
                  <img src="/assets/seoly/trustpilot-invert.webp" className="w-100px" alt="Trustpilot" />
                </div>
              </div>

              {/* Google */}
              <div className="d-inline-block text-center m-4 wow fadeInRight" data-wow-delay=".4s" style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <h4 className="fw-bold mb-1 fs-24">4.8 out of 5</h4>
                <div className="de-rating-ext fs-18" style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                  <span className="d-stars">
                    <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                  </span>
                  <div className="fs-14 mb-0" style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>Based on <span className="fw-bold">200 reviews</span></div>
                  <img src="/assets/seoly/google.webp" className="w-100px" alt="Google" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
