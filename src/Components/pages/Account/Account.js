import React from 'react';
import {Link, Outlet, useLocation} from "react-router-dom";
import {Breadcrumb} from "antd";

const routes = [
    {
        path: 'profile',
        breadcrumbName: 'Your Account',
    },
    {
        path: 'order-history',
        breadcrumbName: 'Order History'
    },
    {
        path: 'referral',
        breadcrumbName: 'Refer a Friend',
    },
    {
        path: 'payments',
        breadcrumbName: 'Subscription/Payment',
    },
    {
        path: 'testimonial',
        breadcrumbName: 'Testimonial',
    },
];

const Account = (props) => {
    const {pathname} = useLocation()

    return (
        <section className="account-container">
            <ol>
                {routes.map((route, index) =>
                    <li key={index} className={pathname.includes(route.path) ? 'active' : ''}>
                        <Link to={`/account/${route.path}`}>{route.breadcrumbName}</Link>
                    </li>
                )}
            </ol>
            <section className="account-content">
                <Outlet/>
            </section>
        </section>
    )
}

export default Account;