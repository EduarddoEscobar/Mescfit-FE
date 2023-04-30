import React from 'react';
import {connect} from 'react-redux';
import {Menu} from "antd";
import HeaderLink from "../Links/HeaderLink";

const loggedInLinks = [
    {
        label: <HeaderLink to="/profile">View Profile</HeaderLink>,
        key: 'view-profile'
    },
    {
        label: <HeaderLink to="/logout">Log Out</HeaderLink>,
        key: 'logout'
    }
]

const loggedOutLinks = [
    {
        label: <HeaderLink to="/login">Log In</HeaderLink>,
        key: "login"
    }
]

const items = [
    {
        label: (<HeaderLink to="/about">About Me</HeaderLink>),
        key: "about",
    },
    {
        label: (<HeaderLink to="/coaching"> Coaching </HeaderLink>),
        key: "coaching",
        children: [
            {
                label: (<HeaderLink to="/coaching/#one-to-one">1:1 Coaching</HeaderLink>),
                key: "one-to-one"
            },
            {
                label: (<HeaderLink to="/coaching/#faq">Pricing/FAQs</HeaderLink>),
                key: "faq"
            }
        ]
    },
    {
        label: (<HeaderLink to="/testimonials">Testimonials</HeaderLink>),
        key: "testimonial",
        children: [
            {
                label: (<HeaderLink to="/testimonials/submit">Submit a Testimonial</HeaderLink>),
                key: "submit-a-testimonial"
            }
        ]
    },
    {
        label: (<HeaderLink to="/exercise-library">Exercise Library</HeaderLink>),
        key: "exercise-library"
    },
    {
        label: (<HeaderLink to="/profile">Account</HeaderLink>),
        key: "account",
        children: !!localStorage.getItem("access_token") || !!localStorage.getItem("refresh_token") ? loggedInLinks : loggedOutLinks
    }
]

const HamburgerMenu = ({menuOpen}) => {
    return (
        <section className="hamburger-menu" style={{
            transform: menuOpen ? "translateX(0)" : "translateX(-101%)"
        }}>
            <Menu
                className="mobile-header-menu"
                mode="inline"
                items={items}
                style={{background: "rgba(0, 0, 0, 0)"}}
            />
        </section>
    );
};

const mapStateToProps = state => {
    return {
        menuOpen: state.header.menuOpen,
    };
};
export default connect(mapStateToProps)(HamburgerMenu);

const TOS = (props) => {
    return (
        <section className="policy-container">
            <h1>Terms of use</h1>
            <article>
                <h2>1) title</h2>
                <p>Some text</p>
            </article>
        </section>
    )
}