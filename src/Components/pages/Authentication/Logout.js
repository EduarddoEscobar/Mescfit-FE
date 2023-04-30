import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { handleLogout } from '../../../redux/actions/userActions';
import { connect } from 'react-redux';

const Logout = ({ loggedIn, handleLogout }) => {
  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <section>{loggedIn ? <h1>Logout</h1> : <Navigate to={'/'} />}</section>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn,
  };
};

export default connect(mapStateToProps, { handleLogout })(Logout);
