import React from 'react';
import {Link} from 'react-router-dom';
import '../../../styles/FooterStyles/index.less';
import {faInstagram, faTiktok, faYoutube,} from '@fortawesome/free-brands-svg-icons';
import IconLink from '../Links/IconLink';

const Footer = props => {
    return (
        <footer>
            <div className="footer-div footer-links">
                <div className="footer-container">
                    <div className="social-links footer-content">
                        <p className="mobile-only tablet-only">Follow Me!</p>
                        <div className="icons">
                            <IconLink
                                href="https://www.instagram.com/escobarmarkk/"
                                icon={faInstagram}
                            />
                            <IconLink
                                href="https://www.tiktok.com/@escobarmarkk"
                                icon={faTiktok}
                            />
                            <IconLink
                                href="https://youtube.com/channel/UCnVQa9DSntayyDwU5K0-Ivw"
                                icon={faYoutube}
                            />
                        </div>
                    </div>
                    <div className="footer-content main-links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About Me</Link>
                        <Link to="/coaching">Coaching</Link>
                        <Link to="/testimonials">Testimonials</Link>
                        <Link to="/exercise-library">Exercise Library</Link>
                        <Link to="/coaching">Pricing / FAQs</Link>
                    </div>
                    <div className="footer-content center-text footer-contact">
                        <a
                            href="mailto:coaching@escobarmark.com"
                            className="underline italics"
                        >
                            Email Me
                        </a>
                        <p className="mobile-only"> - </p>
                        <Link to="#">Business & Coaching Inquiries</Link>
                    </div>
                    <div className="footer-content center-text copyright">
                        <h2>©2022 by MescFIT</h2>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
