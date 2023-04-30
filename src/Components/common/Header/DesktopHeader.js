import React from 'react';
import { Link } from 'react-router-dom';
import IconLink from '../Links/IconLink';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import HeaderLink from '../Links/HeaderLink';
import { connect } from 'react-redux';
import { setFocus } from '../../../redux/actions/headerActions';
import ExtendableLink from '../Links/ExtendableLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const loggedInLinks = [
  {
    to: '/account',
    title: 'View Profile',
  },
  {
    to: '/logout',
    title: (
      <>
        Lo<span className="line-above">go</span>ut
      </>
    ),
  },
];

const loggedOutLinks = [
  {
    to: '/login',
    title: 'Log In',
  },
];

const DesktopHeader = ({ setFocus, loggedIn }) => {
  return (
    <header className="desktop-only">
      <section className="header-container">
        <section className="logo">
          <Link data-testid="header-link" to="/" onClick={() => setFocus('/')}>
            MescFIT
          </Link>
        </section>
        <nav>
          <HeaderLink to="/about">About Me</HeaderLink>
          <HeaderLink
            to="/coaching"
            extendable={true}
            links={[
              {
                to: '/coaching#coaching',
                title: '1:1 Coaching',
              },
              {
                to: '/coaching#faq',
                title: 'Pricing/FAQs',
              },
            ]}
          >
            Coaching
          </HeaderLink>
          <HeaderLink
            extendable={true}
            to="/testimonials"
            links={[
              {
                to: '/testimonials/submit',
                title: 'Submit a Testimonial',
              },
            ]}
          >
            Testimonials
          </HeaderLink>
          <HeaderLink to="/exercise-library">Exercise Library</HeaderLink>
        </nav>
        <section className="nav-contact">
          <ExtendableLink
            links={loggedIn ? loggedInLinks : loggedOutLinks}
            to={loggedIn ? '/account' : '/login'}
            icon={true}
          >
            <FontAwesomeIcon icon={faUser} />
          </ExtendableLink>
          <IconLink
            icon={faInstagram}
            href="https://www.instagram.com/escobarmarkk/"
          />
          <Link
            className="contact-button"
            data-testid="header-link"
            to="/email-form"
          >
            Contact Me
          </Link>
        </section>
      </section>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn,
  };
};

export default connect(mapStateToProps, { setFocus })(DesktopHeader);
