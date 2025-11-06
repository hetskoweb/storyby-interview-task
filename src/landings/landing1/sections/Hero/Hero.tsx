import './Hero.scss';
import HeroImage from './../../img/hero-image.avif';
import ClientPhotoFirst from './../../img/client-photo1.webp';
import ClientPhotoSecond from './../../img/client-photo2.webp';
import ClientPhotoThird from './../../img/client-photo3.webp';
import ClientPhotoFourth from './../../img/client-photo4.webp';
import ClientPhotoFifth from './../../img/client-photo5.webp';
import StarIcon from './../../img/star-icon.svg';
import { useRef } from 'react';
import { words } from '../../constants/words';
import { useRotatingWords } from '../../hooks/useRotatingWords';
import { useScrollScale } from '../../hooks/useScrollScale';
import { useVisibility } from '../../hooks/useVisibility';
import { getThreshold } from '../../constants/layout';

declare global {
  interface Window {
    fbq?: (
      command: 'track' | 'init' | 'consent',
      eventName?: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  const visible = useVisibility(heroRef, getThreshold(window.innerWidth));
  const scale = useScrollScale();
  const { currentWordIndex, fade } = useRotatingWords(words);

  const handleLeadEvent = () => {
    const fbq = window.fbq;

    if (typeof fbq === 'function') {
      fbq('track', 'Lead');
      console.log('✅ Facebook Pixel Lead event sent');
    } else {
      console.log('⚙️ Simulated Lead event (no Pixel connected)');
    }
  };

  return (
    <section ref={heroRef} className={`hero ${visible ? 'hero--visible' : ''}`}>
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__col">
            <div className="hero__reviews">
              <div className="hero__clients">
                <div className="hero__client">
                  <img src={ClientPhotoFirst} alt="client-photo" />
                </div>
                <div className="hero__client">
                  <img src={ClientPhotoSecond} alt="client-photo" />
                </div>
                <div className="hero__client">
                  <img src={ClientPhotoThird} alt="client-photo" />
                </div>
                <div className="hero__client">
                  <img src={ClientPhotoFourth} alt="client-photo" />
                </div>
                <div className="hero__client">
                  <img src={ClientPhotoFifth} alt="client-photo" />
                </div>
              </div>
              <div className="hero__quantity">
                <div className="hero__stars">
                  <div className="hero__star">
                    <img src={StarIcon} alt="star-icon" />
                  </div>
                  <div className="hero__star">
                    <img src={StarIcon} alt="star-icon" />
                  </div>
                  <div className="hero__star">
                    <img src={StarIcon} alt="star-icon" />
                  </div>
                  <div className="hero__star">
                    <img src={StarIcon} alt="star-icon" />
                  </div>
                  <div className="hero__star">
                    <img src={StarIcon} alt="star-icon" />
                  </div>
                </div>
                <div className="hero__quantity-text">1M+ Happy Clients</div>
              </div>
            </div>
            <h1 className="main-title">
              Reclaim Lost Revenue <br /> with AI-Powered <br />{' '}
              <span className={`highlight ${fade ? 'fade-in' : 'fade-out'}`}>
                {words[currentWordIndex]}
              </span>
            </h1>
            <div className="hero__text">
              Boost your revenue by up to 23% as our AI agents proactively connect with potential
              customers through personalized SMS and voice calls, converting interest into action
              seamlessly.
            </div>
            <div className="hero__btns">
              <div className="hero__btn hero__btn--orange">
                <a href="#" onClick={handleLeadEvent}>
                  Get started
                </a>
              </div>
              <div className="hero__btn hero__btn--transparent">
                <a href="#" onClick={handleLeadEvent}>
                  Start free trial
                </a>
              </div>
            </div>
          </div>
          <div className="hero__col">
            <img
              src={HeroImage}
              alt="hero-image"
              style={{ transform: `scale(${scale})`, transition: 'transform 0.1s linear' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
