import React from 'react';
import checkmark from '../../../img/Checkmark.png';
import { Link } from 'react-router-dom';

const TFAConfirmation = (props) => {
  return (
    <section className="confirmation-container">
      <section name="confirmation-content">
        <img src={checkmark} alt="checkmark" />
        <section name="Confirmation-text">
          <h2 id="title-text">Two Factor Authentication is Now Active</h2>
          <p id="confirmation-message">
            Your account is now acitve and you will be returned to the homepage
            momentarily. If you are not returned click the back to homepage
            button below
          </p>
        </section>
      </section>
      <Link className="homepage-button" to="/">
        Back to Homepage
      </Link>
    </section>
  );
};

export default TFAConfirmation;
