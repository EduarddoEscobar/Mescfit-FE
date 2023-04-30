import {Collapse} from "antd";
import React from "react";
import {Link} from "react-router-dom";

const {Panel} = Collapse;

const AuthCollapse = (props) => {
    return (
        <section className="collapse-container">
            <Collapse expandIconPosition="end" bordered={false} className="auth-collapse">
                <Panel header="Why Do I Need To Sign In" className="auth-collapse-item" key={1}>
                    <p className="answer-text">
                        Good question! There are several reasons.
                    </p>
                    <p className="answer-text">
                        If you’re a new customer:
                        We set you up with an account to make ordering (and hopefully re-ordering!) easier for you. Once
                        you have an account, you can track all of your previous orders along with other functions such
                        as the option to submit a coaching application or a testimonial
                    </p>
                    <p className="answer-text">
                        If you’re an existing customer:
                        Once you sign in, it’s easy for you to view old orders, track current orders, view and make
                        changes to current subscriptions or coaching plans. Not only that but having an account, if you
                        are a current client, allows you to schedule an online video meeting with me for progress
                        check-ins and in your profile page you will be able to find the link to your coaching dashboard.
                    </p>
                </Panel>
                <Panel header="Privacy Policy/Terms of Use" className="auth-collapse-item" key={2}>
                    <p className="answer-text">
                        By using our website and creating an account you are agreeing to our
                        <Link to="/privacy-policy"> Privacy Policy</Link> and
                        <Link to="/terms-of-service"> Terms of Use</Link>
                    </p>
                </Panel>
            </Collapse>
        </section>
    )
}

export default AuthCollapse;