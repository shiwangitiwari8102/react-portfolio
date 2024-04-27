import React, { useRef } from "react";
import Slider from "react-slick";
import { noxfolioSlider } from "../utility/sliderProps";

const Testimonial = ({ testimonials }) => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  if (!testimonials) return <p></p>;

  return (
    <section className="testimonials-area relative z-10" id="testimonial">
      <div className="for-bgc-black py-32 md:py-40 lg:py-52">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-1">
              <div className="testimonials-content-part relative z-2 mb-32 md:mb-40 lg:mb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-8 md:mb-15">
                  <span className="sub-title mb-2 md:mb-4">
                    Clients Testimonials
                  </span>
                  <h2>
                    I’ve 1253+ Clients <span>Feedback</span>
                  </h2>
                  <p className="mb-0">
                    Sed ut perspiciatis unde omnin natus totam rem aperiam
                    eaque inventore veritatis
                  </p>
                </div>
                <div className="slider-arrows flex justify-between">
                  <button
                    className="testimonial-prev slick-arrow"
                    onClick={previous}
                  >
                    <i className="fal fa-arrow-left" />
                  </button>
                  <button
                    className="testimonial-next slick-arrow"
                    onClick={next}
                  >
                    <i className="fal fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <Slider
                ref={sliderRef}
                {...noxfolioSlider.testimonials}
                className="testimonials-wrap"
              >
                {testimonials.map((item, index) => (
                  <div
                    key={index}
                    className="testimonial-item wow fadeInUp delay-0-3s"
                  >
                    <div className="author">
                      <img src={item.image.url} alt="Author" />
                    </div>
                    <div className="text text-ellipsis">{item.review}</div>
                    <div className="testi-des">
                      <h5>{item.name}</h5>
                      <span>{item.position}</span>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        {[...Array(10)].map((_, index) => (
          <span key={index} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
