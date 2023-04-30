import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from './pages/Home/Home';
import NotFound from './pages/WIP/NotFound';
import Coaching from './pages/Coaching/Coaching';
import Testimonials from './pages/Testimonials/Testimonials';
import SubmitTestimonial from './pages/Testimonials/SubmitTestimonial';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import EmailConfirmation from './pages/Confirmation/EmailConfirmation';
import TFAConfirmation from './pages/Confirmation/2FAConfirmation';
import TFAConfirmationForm from './pages/Confirmation/2FAConfirmationForm';
import TFA from './pages/2FA/2FA';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import TOS from './pages/Policies/TOS';
import PP from './pages/Policies/PP';
import AccountProfile from './pages/Account/Profile/AccountProfile';
import Account from './pages/Account/Account';
import { setLoggedIn } from '../redux/actions/userActions';
import { connect } from 'react-redux';
import Logout from './pages/Authentication/Logout';

const App = ({ setLoggedIn }) => {
  useEffect(() => {
    setLoggedIn(
      localStorage.getItem('access_token') != null ||
        localStorage.getItem('refresh_token') != null
    );
  }, []);

  return (
    <section className="top-of-page">
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/email-confirmation" element={<EmailConfirmation />} />
          <Route path="/2fa-confirmation" element={<TFAConfirmation />} />
          <Route
            path="/2fa-confirmation/:phone"
            element={<TFAConfirmationForm />}
          />
          <Route path="/2fa" element={<TFA />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/terms-of-service" element={<TOS />} />
          <Route path="/privacy-policy" element={<PP />} />
          <Route path="*" element={<NotFound />} />
          <Route
            exact
            path="/account"
            element={<Navigate to="/account/profile" replace />}
          />
          <Route path="/account" element={<Account />}>
            <Route path="profile" element={<AccountProfile />} />
            <Route path="testimonial" element={<SubmitTestimonial />} />
            <Route path="order-history" element={<NotFound />} />
            <Route path="referral" element={<NotFound />} />
            <Route path="payments" element={<NotFound />} />
            <Route
              path="*"
              element={<Navigate to="/account/profile" replace />}
            />
          </Route>
        </Routes>
      </GoogleOAuthProvider>
    </section>
  );
};

export default connect(null, { setLoggedIn })(App);
