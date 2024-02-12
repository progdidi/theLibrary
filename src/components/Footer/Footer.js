import './footer.scss';

import github from './social/github.svg';
import linkedin from './social/linkedin.svg';
import instagram from './social/instagram.svg';
import telegram from './social/telegram.svg';

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <p className="footer__text">developed by:</p>
                <div className="footer__inner">
                    <a href="https://progdidi.github.io/#" className="footer__link">PROGDIDI</a>

                    <div class="social">
                        <ul class="social__list">
                            <li class="social__list-item">
                                <a href="https://github.com/progdidi" class="social__list-link" target="_blank">
                                    <img src={github} alt="github" class="social__list-img"/>
                                </a>
                            </li>
                            <li class="social__list-item">
                                <a href="https://www.linkedin.com/in/progdidi/" class="social__list-link" target="_blank">
                                    <img src={linkedin} alt="linkedin" class="social__list-img"/>
                                </a>
                            </li>
                            <li class="social__list-item">
                                <a href="https://www.instagram.com/smetankihochesh/" class="social__list-link" target="_blank">
                                    <img src={instagram} alt="instagram" class="social__list-img"/>
                                </a>
                            </li>
                            <li class="social__list-item">
                                <a href="https://t.me/progdidi" class="social__list-link" target="_blank">
                                    <img src={telegram} alt="telegram" class="social__list-img"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;