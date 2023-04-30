import React from 'react';
import { Link } from 'react-router-dom';
import ExtendableLink from './ExtendableLink';
import { connect } from 'react-redux';
import { setFocus } from '../../../redux/actions/headerActions';

const HeaderLink = ({ to, focus, setFocus, children, links, extendable }) => {
  return (
    <div className="nav-link">
      {extendable ? (
        <ExtendableLink
          to={to}
          links={links}
          focus={focus}
          data-testid="header-link"
        >
          {children}
        </ExtendableLink>
      ) : (
        <div className="single-link header-link">
          <Link
            to={to}
            onClick={() => setFocus(to)}
            style={{
              color: focus.includes(to) ? '#40a9ff' : '',
            }}
            data-testid="header-link"
          >
            {children}
          </Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    focus: state.header.focus,
  };
};
export default connect(mapStateToProps, { setFocus })(HeaderLink);
