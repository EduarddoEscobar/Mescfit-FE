import React from 'react';
import { Link } from 'react-router-dom';

const PP = (props) => {
  return (
    <section className="policy-container">
      <section className="Policy-heading">
        <h1>Privacy Policy</h1>
        <h2>
          Welcome to our privacy policy. We respect your privacy and are
          commited to protecting your personal data
        </h2>
      </section>
      <article>
        <h2> Introduction</h2>
        <p>
          This privacy policy has been compiled to better serve those who are
          concerned with how their ‘Personally identifiable information’ (PII)
          is being used online. PII, as used in US privacy law and information
          security, is information that can be used on its own or with other
          information to identify, contact, or locate a single person, or to
          identify an individual in context. Please read our privacy policy
          carefully to get a clear understanding of how we collect, use, protect
          or otherwise handle your Personally Identifiable Information in
          accordance with our website.
        </p>
      </article>
      <article>
        <h2>
          What personal information do we collect from the people that visit our
          blog, website or app?
        </h2>
        <p>
          When ordering or registering on our site, as appropriate, you may be
          asked to enter your name, email address, mailing address, phone number
          or other details to help you with your experience
        </p>
      </article>
      <article>
        <h2>When do we collect information?</h2>
        <p>
          We collect information from you when you register on our site, place
          an order, subscribe to a subscription, respond to a survey, fill out a
          form or enter information on our site.
        </p>
      </article>
      <article>
        <h2>How do we use your information?</h2>
        <p>
          We may use the information we collect from you when you register, make
          a purchase, sign up for our newsletter, respond to a survey or
          marketing communication, surf the website, or use certain other site
          features in the following ways:
        </p>
        <ul>
          <li>
            To personalize user’s experience and to allow us to deliver the type
            of content and product offerings in which you are most interested.
          </li>
          <li>To improve our website in order to better serve you.</li>
          <li>
            To allow us to better service you in responding to your customer
            service requests.
          </li>
          <li>
            To administer a contest, promotion, survey or other site feature.
          </li>
          <li>To quickly process your transactions.</li>
          <li>
            To send periodic emails regarding your order or other products and
            services.
          </li>
        </ul>
      </article>
      <article>
        <h2>How do we protect visitor information?</h2>
        <ul>
          <li>
            We have put in place appropriate security measures to prevent your
            personal data from being accidentally lost, used or accessed in an
            unauthorised way, altered or disclosed. In addition, we limit access
            to your personal data to those employees, agents, contractors and
            other third parties who have a business need to know. They will only
            process your personal data on our instructions and they are subject
            to a duty of confidentiality.
          </li>
          <li>
            We have put in place procedures to deal with any suspected personal
            data breach and will notify you and any applicable regulator of a
            breach where we are legally required to do so.
          </li>
          <li>
            Payment information is not stored on the website. We use 3rd party
            services for list management and processing of transactions.
          </li>
        </ul>
      </article>
      <article>
        <h2>Do we use ‘cookies’?</h2>
        <p>
          Yes. Cookies are small files that a site or its service provider
          transfers to your computer’s hard drive through your Web browser (if
          you allow) that enables the site’s or service provider’s systems to
          recognize your browser and capture and remember certain information.
          For instance, we use cookies to help us remember and process the items
          in your shopping cart. They are also used to help us understand your
          preferences based on previous or current site activity, which enables
          us to provide you with improved services. We also use cookies to help
          us compile aggregate data about site traffic and site interaction so
          that we can offer better site experiences and tools in the future.
        </p>
      </article>
      <article>
        <h2>We use cookies to:</h2>
        <ul>
          <li>Understand and save user’s preferences for future visits.</li>
          <li>Keep track of advertisements</li>
          <li>
            Compile aggregate data about site traffic and site interactions in
            order to offer better site experiences and tools in the future. We
            may also use trusted third party services that track this
            information on our behalf.
          </li>
        </ul>
        <p>
          You can choose to have your computer warn you each time a cookie is
          being sent, or you can choose to turn off all cookies. You do this
          through your browser (like Internet Explorer) settings. Each browser
          is a little different, so look at your browser’s Help menu to learn
          the correct way to modify your cookies.
        </p>
      </article>
      <article>
        <h2>Third Party Disclosure</h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your
          personally identifiable information unless we provide you with advance
          notice. This does not include website hosting partners and other
          parties who assist us in operating our website, conducting our
          business, or servicing you, so long as those parties agree to keep
          this information confidential. We may also release your information
          when we believe release is appropriate to comply with the law, enforce
          our site policies, or protect ours or others’ rights, property, or
          safety.
        </p>
        <p>
          No information will be provided to other parties for marketing,
          advertising, or other uses.
        </p>
      </article>
      <article>
        <h2>Third party links</h2>
        <p>
          Occasionally, at our discretion, we may include or offer third party
          products or services on our website. These third party sites have
          separate and independent privacy policies. We therefore have no
          responsibility or liability for the content and activities of these
          linked sites. Nonetheless, we seek to protect the integrity of our
          site and welcome any feedback about these sites.
        </p>
      </article>
      <p className="foot-note">
        If there are any questions regarding this privacy policy you may contact
        us using the information below.
        <a href="https://escobarmark.com">www.escobarmark.com</a>. Please also
        see our <Link to="/terms-of-service">terms of service </Link>
        for additional terms. <br/> Email{' '}
        <a href="mailto:coaching@escobarmark.com">coaching@escobarmark.com</a>
      </p>
    </section>
  );
};
export default PP;
