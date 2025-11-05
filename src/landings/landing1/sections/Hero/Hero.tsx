import './Hero.scss';
import HeroImage from './../../img/hero-image.avif';
import ClientPhotoFirst from './../../img/client-photo1.webp';
import ClientPhotoSecond from './../../img/client-photo2.webp';
import ClientPhotoThird from './../../img/client-photo3.webp';
import ClientPhotoFourth from './../../img/client-photo4.webp';
import ClientPhotoFifth from './../../img/client-photo5.webp';
import StarIcon from './../../img/star-icon.svg';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [visible, setVisible] = useState(false);
  const [scale, setScale] = useState(1);
  const words = ['Emotional', 'Platform', 'Work'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true)

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newScale = 1 + scrollTop / 2000;
      setScale(newScale > 1.3 ? 1.3 : newScale);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`hero ${visible ? 'hero--visible' : ''}`}>
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
                <div className="hero__quantity-text">
                  1M+ Happy Clients
                </div>
              </div>
            </div>
            <h1 className="main-title">
              Reclaim Lost Revenue <br /> with AI-Powered <br /> <span className={`highlight ${fade ? 'fade-in' : 'fade-out'}`}>{words[currentWordIndex]}</span>
            </h1>
            <div className="hero__text">
              Boost your revenue by up to 23% as our AI agents proactively connect with potential customers through personalized SMS and voice calls, converting interest into action seamlessly.
            </div>
            <div className="hero__btns">
              <div className="hero__btn hero__btn--orange">
                <a href="#">Get started</a>
              </div>
              <div className="hero__btn hero__btn--transparent">
                <a href="#">Start free trial</a>
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