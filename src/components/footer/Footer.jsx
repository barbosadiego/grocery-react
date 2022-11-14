import './Footer.scss';

import facebook from '../../images/Facebook.svg';
import linkedin from '../../images/LinkedIn.svg';
import twitter from '../../images/Twitter.svg';
import apple from '../../images/apple-store.jpg';
import google from '../../images/google-play.jpg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__items container">
        <ul className="info">
          <li className="title">
            <h4>information</h4>
          </li>
          <li>
            <a href="#">about us</a>
          </li>
          <li>
            <a href="#">privacy policy</a>
          </li>
          <li>
            <a href="#">terms and conditions</a>
          </li>
          <li>
            <a href="#">return and refund policy</a>
          </li>
        </ul>
        <ul className="links">
          <li className="title">
            <h4>useful links</h4>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">account</a>
          </li>
          <li>
            <a href="#">medicines</a>
          </li>
          <li>
            <a href="#">special offers</a>
          </li>
        </ul>
        <ul className="contact">
          <li className="title">
            <h4>contact</h4>
          </li>
          <li>
            <p>Address:99,Dhaka</p>
          </li>
          <li>
            <p>+8801789999751</p>
          </li>
          <li>
            <p>social links</p>
            <ul className="social">
              <li>
                <img src={facebook} alt="facebook" width={30} />
              </li>
              <li>
                <img src={twitter} alt="twitter" width={30} />
              </li>
              <li>
                <img src={linkedin} alt="linkedin" width={30} />
              </li>
            </ul>
          </li>
        </ul>
        <ul className="app-area">
          <li>
            <h4 className="title">download our app</h4>
          </li>
          <li>
            <img src={google} alt="google play store" width={180} />
          </li>
          <li>
            <img src={apple} alt="apple store" width={180} />
          </li>
        </ul>
      </div>
    </footer>
  );
}
