import './Features.scss';
import MessagesImage from './../../img/messages.avif';
import PhoneSearch from './../../img/phone-search.avif';
import InboxImage from './../../img/inbox.avif';
import { useRef } from 'react';
import { getThreshold } from '../../constants/layout';
import { useVisibility } from '../../hooks/useVisibility';

export const Features = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const textVisible = useVisibility(textRef, getThreshold(window.innerWidth));
  const cardsVisible = useVisibility(cardsRef, getThreshold(window.innerWidth));

  return (
    <section className="features">
      <div className="container">
        <div ref={textRef} className="features__text">
          <div className={`badge text-appear ${textVisible ? 'text-appear-active' : ''}`}>Statistics</div>
          <h2 className={`section-title text-appear ${textVisible ? 'text-appear-active' : ''}`}>
            Performance Highlights of Alter
          </h2>
          <div className={`section-text text-appear ${textVisible ? 'text-appear-active' : ''}`}>
            Our platform delivers measurable results, streamlining operations and boosting engagement with every interaction. See how Subway transforms your workflows and drives real, sustainable growth.
          </div>
        </div>
        <div className="features__cards" ref={cardsRef}>
          <div className="card">
            <div className="card__image">
              <img src={MessagesImage} alt="messages-image" />
            </div>
            <div className="card__description">
              <div className={`card__title text-appear ${cardsVisible ? 'text-appear-active' : ''}`}>
                40% Increase in Cart Recovery Rates
              </div>
              <div className={`card__text text-appear ${cardsVisible ? 'text-appear-active' : ''}`}>
                Instant AI follow-ups turn missed checkouts into sales—automatically.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img src={PhoneSearch} alt="phone-search-image" />
            </div>
            <div className="card__description">
              <div className={`card__title text-appear ${cardsVisible ? 'text-appear-active' : ''}`}>
                70% Faster Customer Response Times
              </div>
              <div className={`card__text text-appear ${cardsVisible ? 'text-appear-active' : ''}`}>
                Real-time voice & SMS agents handle customer queries instantly.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img src={InboxImage} alt="inbox-image" />
            </div>
            <div className="card__description">
              <div className={`card__title text-appear ${cardsVisible ? 'text-appear-active' : ''}`}>
                3x Higher Conversion from SMS Campaigns
              </div>
              <div className={`card__text text-appear ${cardsVisible ? 'text-appear-active' : ''}`}>
                Personalized, well-timed messages crafted by AI deliver better engagement.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};