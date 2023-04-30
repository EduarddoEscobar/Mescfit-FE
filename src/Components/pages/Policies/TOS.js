import React from 'react';
import { Link } from 'react-router-dom';

const TOS = (props) => {
  return (
    <section className="policy-container">
      <section className="Policy-heading">
        <h1>Terms of Service</h1>
        <h2>MescFIT - Online Terms and Conditions</h2>
        <p>Last Updated 10/22/2022</p>
      </section>

      <article>
        <h2>1{')'} Terms</h2>
        <p>
          By accessing this web site, you are agreeing to be bound by these web
          site Terms and Conditions of Use, all applicable laws and regulations,
          and agree that you are responsible for compliance with any applicable
          local laws. If you do not agree with any of these terms, you are
          prohibited from using or accessing this site. The materials contained
          in this web site are protected by applicable copyright and trade mark
          law.
        </p>
      </article>
      <article>
        <h2>2{')'} Use License</h2>
        <p>
          The materials on www.escobarmark.com’s web site are provided “as is”.
          www.escobarmark.com makes no warranties, expressed or implied, and
          hereby disclaims and negates all other warranties, including without
          limitation, implied warranties or conditions of merchantability,
          fitness for a particular purpose, or non-infringement of intellectual
          property or other violation of rights. Further, www.escobarmark.com
          does not warrant or make any representations concerning the accuracy,
          likely results, or reliability of the use of the materials on its
          Internet web site or otherwise relating to such materials or on any
          sites linked to this site. All examples we provide are real examples
          but should not under any circumstances be understood as a promise or
          expectation that such examples will generate similar results for
          yourself. We do not believe in “get rich quick” schemes, any and all
          results that we disclose are the result of hard work, great ideas and
          steadfast dedication.
        </p>
      </article>
      <article>
        <h2>3{')'} Disclaimer</h2>
        <p>
          The materials on www.escobarmark.com’s web site are provided “as is”.
          www.escobarmark.com makes no warranties, expressed or implied, and
          hereby disclaims and negates all other warranties, including without
          limitation, implied warranties or conditions of merchantability,
          fitness for a particular purpose, or non-infringement of intellectual
          property or other violation of rights. Further, www.escobarmark.com
          does not warrant or make any representations concerning the accuracy,
          likely results, or reliability of the use of the materials on its
          Internet web site or otherwise relating to such materials or on any
          sites linked to this site. All examples we provide are real examples
          but should not under any circumstances be understood as a promise or
          expectation that such examples will generate similar results for
          yourself. We do not believe in “get rich quick” schemes, any and all
          results that we disclose are the result of hard work, great ideas and
          steadfast dedication.
        </p>
      </article>
      <article>
        <h2>4{')'} Limitations</h2>
        <p>
          In no event shall www.escobarmark.com or its suppliers be liable for
          any damages (including, without limitation, damages for loss of data
          or profit, or due to business interruption,) arising out of the use or
          inability to use the materials on www.escobarmark.com’s Internet site,
          even if www.escobarmark.com or a www.escobarmark.com authorized
          representative has been notified orally or in writing of the
          possibility of such damage. Because some jurisdictions do not allow
          limitations on implied warranties, or limitations of liability for
          consequential or incidental damages, these limitations may not apply
          to you.
        </p>
      </article>
      <article>
        <h2>5{')'} Revisions and Errata</h2>
        <p>
          The materials appearing on www.escobarmark.com’s web site could
          include technical, typographical, or photographic errors.
          www.escobarmark.com does not warrant that any of the materials on its
          website are accurate, complete, or current. www.escobarmark.com may
          make changes to the materials contained on its web site at any time
          without notice. www.escobarmark.com does not, however, make any
          commitment to update the materials.
        </p>
      </article>
      <article>
        <h2>6{')'} Links</h2>
        <p>
          www.escobarmark.com has not reviewed all of the sites linked to its
          Internet web site and is not responsible for the contents of any such
          linked site. The inclusion of any link does not imply endorsement by
          www.escobarmark.com of the site. Use of any such linked web site is at
          the user’s own risk. www.escobarmark.com. may from time to time
          provide affiliate links to products and / or services by third
          parties. Any such referral will result in www.escobarmark.com. getting
          paid from the linked site. We use these affiliate relationships to
          fund the work we do here. We do not get paid for our opinions and any
          such link placed with an endorsement is made because we actually like
          and use the product and think you should too, not because we get paid
          to tell you that.
        </p>
      </article>
      <article>
        <h2>7{')'} Site Terms of Use Modifications</h2>
        <p>
          www.escobarmark.com may revise these terms of use for its web site at
          any time without notice. By using this web site you are agreeing to be
          bound by the then current version of these Terms and Conditions of
          Use.
        </p>
      </article>
      <article>
        <h2>8{')'} Governing Law</h2>
        <p>
          Any claim relating to www.escobarmark.com’s website shall be governed
          by the laws of the State of Delaware without regard to its conflict of
          law provisions.
        </p>
      </article>
      <p className='foot-note'>
        These Terms relate to the use of our website{' '}
        <a href="https://www.escobarmark.com">www.escobarmark.com</a>. Please
        also see our <Link to="/privacy-policy">privacy policy </Link>
        for additional terms.
      </p>
    </section>
  );
};
export default TOS;
