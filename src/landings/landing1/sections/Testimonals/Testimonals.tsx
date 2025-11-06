import './Testimonals.scss';
import { useEffect, useRef } from 'react';
import { useVisibility } from '../../hooks/useVisibility';
import { testimonials } from '../../constants/testimonals';

export const Testimonals = () => {
  const rowRef1 = useRef<HTMLDivElement>(null);
  const rowRef2 = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const textVisible = useVisibility(textRef, 1);

  useEffect(() => {
    if (rowRef1.current) {
      const width1 = rowRef1.current.scrollWidth / 2;
      rowRef1.current.style.animation = `scroll-left ${width1 / 50}s linear infinite`;
    }
    if (rowRef2.current) {
      const width2 = rowRef2.current.scrollWidth / 2;
      rowRef2.current.style.animation = `scroll-right ${width2 / 50}s linear infinite`;
    }
  }, []);

  return (
    <section className="testimonals">
      <div className="container">
        <div ref={textRef} className="testimonals__text">
          <div className={`badge text-appear ${textVisible ? 'text-appear-active' : ''}`}>Testimonal</div>
          <h2 className={`section-title text-appear ${textVisible ? 'text-appear-active' : ''}`}>Just hear what they're saying about us</h2>
          <div className={`section-text text-appear ${textVisible ? 'text-appear-active' : ''}`}>Discover how Subway's AI-driven automation has recovered lost sales, boosted conversions, and simplified customer engagement for eCommerce brands.</div>
        </div>
        <div className="testimonals__wrapper">
          <div className="testimonals__row" ref={rowRef1}>
            {[...testimonials, ...testimonials].map((item, index) => (
              <div className="testimonal" key={index}>
                <div className="testimonal__wrapper">
                  <div className="testimonal__wrapper-col">
                    <div className="testimonal__image">
                      <img src={item.image} alt="client-photo" />
                    </div>
                  </div>
                  <div className="testimonal__wrapper-col">
                    <div className="testimonal__name">{item.name}</div>
                    <div className="testimonal__position">{item.position}</div>
                  </div>
                </div>
                <div className="testimonal__text">{item.text}</div>
              </div>
            ))}
          </div>
          <div className="testimonals__row" ref={rowRef2}>
            {[...testimonials, ...testimonials].map((item, index) => (
              <div className="testimonal" key={index}>
                <div className="testimonal__wrapper">
                  <div className="testimonal__wrapper-col">
                    <div className="testimonal__image">
                      <img src={item.image} alt="client-photo" />
                    </div>
                  </div>
                  <div className="testimonal__wrapper-col">
                    <div className="testimonal__name">{item.name}</div>
                    <div className="testimonal__position">{item.position}</div>
                  </div>
                </div>
                <div className="testimonal__text">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};