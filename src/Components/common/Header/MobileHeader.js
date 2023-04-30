import React from 'react';
import {faBars, faEnvelope, faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearFocus, toggleMenu} from '../../../redux/actions/headerActions';
import HamburgerMenu from './HamburgerMenu';

const MobileHeader = ({menuOpen, toggleMenu, clearFocus}) => {
    return (
        <header className="mobile-only" style={{height: menuOpen ? "100vh" : "auto"}}>
            <section className="header-container">
                <FontAwesomeIcon
                    icon={!menuOpen ? faBars : faXmark}
                    className="header-icon"
                    onClick={() => toggleMenu()}
                />
                <section className="logo">
                    <Link data-testid="header-link" to="/" onClick={clearFocus}>
                        MescFIT
                    </Link>
                </section>
                <Link to="/email-form">
                    <FontAwesomeIcon icon={faEnvelope} className="header-icon"/>
                </Link>

            </section>
            <HamburgerMenu/>
        </header>
    );
};

const mapStateToProps = state => {
    return {
        menuOpen: state.header.menuOpen,
    };
};
export default connect(mapStateToProps, {toggleMenu, clearFocus})(
    MobileHeader
);
