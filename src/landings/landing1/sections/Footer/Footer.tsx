import { SubscribeForm } from '../../shared/components/SubscribeForm';
import './Footer.scss';
import SiteLogo from './../../img/alter-logo.avif';
import InstagramIcon from './../../img/instagram-icon.svg';
import FacebookIcon from './../../img/facebook-icon.svg';
import TwitterIcon from './../../img/twitter-icon.svg';
import { useRef } from 'react';
import { getThreshold } from '../../constants/layout';
import { useVisibility } from '../../hooks/useVisibility';

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const visible = useVisibility(footerRef, getThreshold(window.innerWidth));

  return (
    <footer className="footer" ref={footerRef}>
      <div className="container">
        <div className={`footer__wrapper ${visible ? 'footer__wrapper--visible' : ''}`}>
          <div className="footer__info">
            <div className="footer__logo">
              <img src={SiteLogo} alt="site-logo" />
            </div>
            <div className="footer__text">
              Deliver instant, human-like support with our AI chatbot—built to engage, resolve, and
              scale with your startup.
            </div>
            <SubscribeForm />
            <div className="footer__socials">
              <div className="footer__social">
                <a href="#">
                  <img src={InstagramIcon} alt="instagram-icon" />
                </a>
              </div>
              <div className="footer__social">
                <a href="#">
                  <img src={FacebookIcon} alt="facebook-icon" />
                </a>
              </div>
              <div className="footer__social">
                <a href="#">
                  <img src={TwitterIcon} alt="twitter-icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer__menu">
            <nav className="footer-nav">
              <ul className="footer-nav__list">
                <li className="footer-nav__title">Product</li>
                <li className="footer-nav__item footer-nav__item--active">
                  <a href="#">Home</a>
                </li>
                <li className="footer-nav__item">
                  <a href="#">Feature</a>
                </li>
                <li className="footer-nav__item">
                  <a href="#">Usecases</a>
                </li>
                <li className="footer-nav__item">
                  <a href="#">Checkout</a>
                </li>
                <li className="footer-nav__item">
                  <a href="#">Pricing</a>
                </li>
                <li className="footer-nav__item">
                  <a href="#">Log In</a>
                </li>
                <li className="footer-nav__item">
                  <a href="#">Sign Up</a>
                </li>
              </ul>
              <ul className="footer-nav__list">
                <li className="footer-nav__title">Product</li>
                <li className="footer-nav__item">
                  <a href="#">Home</a>
                </li>
                <li className="footer-nav__item">
                  <a href="#">Feature</a>
                </li>
                <li className="footer-nav__item">
                  <a href="#">Usecases</a>
                </li>
              </ul>
              <ul className="footer-nav__list">
                <li className="footer-nav__title">Product</li>
                <li className="footer-nav__item">
                  <a href="#">Home</a>
                </li>
                <li className="footer-nav__item">
                  <a href="#">Feature</a>
                </li>
                <li className="footer-nav__item">
                  <a href="#">Usecases</a>
                </li>
                <li className="footer-nav__item">
                  <a href="#">Checkout</a>
                </li>
                <li className="footer-nav__item">
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
