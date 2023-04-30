import React from 'react';
import checkmark from '../../../img/Checkmark.png';
import { Link } from 'react-router-dom';

const EmailConfirmation = (props) => {
  return (
    <section className="confirmation-container">
      <section name="confirmation-content">
        <img src={checkmark} alt="checkmark" />
        <section name="Confirmation-text">
          <h2>Your Email Has Now Been Verified</h2>
          <p>
            You now have access to features such as form submissions, online
            puchases and email offers including but not limited to dinscounts
            and website announcements{' '}
          </p>
        </section>
      </section>
      <Link className="homepage-button" to="/">
        Back to Homepage
      </Link>
    </section>
  );
};

export default EmailConfirmation;
