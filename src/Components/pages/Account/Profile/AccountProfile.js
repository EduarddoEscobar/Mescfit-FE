import React, {useEffect, useState} from 'react';
import fakeUser from '../../../../data/User';
import InfoInput from "./InfoInput";

const AccountProfile = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // TODO: Once this is finished get the user from the backend and access token
        setUser(fakeUser);
    }, [])

    return (
        <section className="profile-container">
            <section id="referral" className="account-section">
                <h2>Refer a Friend</h2>
                <p>If you are currently a 1:1 Coaching client, you are able to refer someone using the link below. If
                    you refer a friend and they sign up for an account and coaching using the link below you both get
                    25% off you next payment of your plan</p>
                <section>
                    <button>Refer a Friend</button>
                    <p>*Limit of two referrals per month for up to 50% off</p>
                </section>
            </section>

            <article id="coaching-resources" className="account-section">
                <h2 className="underline-bottom">Coaching Resources</h2>
                <section className="resources">
                    <div className="resource-link">
                        <h4>Coaching Dashboard</h4>
                        <a href="https://www.notion.com/deeznutz42069"
                           target="_blank">https://www.notion.com/deeznutz42069</a>
                    </div>
                    <div className="resource-link">
                        <h4>Schedule Online Check-In</h4>
                        <a href="https://calendly.com/escobarmark/coaching"
                           target="_blank">https://calendly.com/escobarmark/coaching</a>
                    </div>
                    <div className="resource-link">
                        <h4>Link To Next Meeting</h4>
                        <a href="https://meet.google.com/emo-ncnz-pc"
                           target="_blank">https://meet.google.com/emo-ncnz-pc</a>
                    </div>
                    <section id="coach-info">
                        <h4 className="underline-bottom">Coach Info</h4>
                        <p>Name: Mark Escobar</p>
                        <p>Email: <a href="mailto:coaching@escobarmark.com">coaching@escobarmark.com</a></p>
                        <p>Phone: <a href="tel:3023456729">1-302-345-6729</a></p>
                    </section>
                </section>
            </article>

            <section id="profile-info" className="account-section">
                <h2 className="underline-bottom">Your Profile</h2>
                <div id="user-info">
                    {
                        user != null ?
                            <>
                                <InfoInput value={`${user?.firstName} ${user?.lastName}`} id="name" label="Name"/>
                                <InfoInput value={`${user?.email}`} id="email" label="Email address"/>
                                <InfoInput value={`********`} id="password" label="Password"/>
                                <div id="account-type" className="info-field">
                                    <label>Account Type:</label>
                                    <p>{user?.authorities.map(authority => authority.authority.toLowerCase()).join(", ")}</p>
                                </div>
                                <InfoInput value={user?.tfa === true ? "Active" : "Inactive"} id="two-step-verification"
                                           label="Two Step Verification" type="checkbox" initial={user?.tfa}/>
                                <InfoInput value={user?.subscribed === true ? "Active" : "Inactive"} id="subscribed"
                                           label="Announcement/Offer Opt-In" type="checkbox" initial={user?.subscribed}/>
                                <InfoInput value={user?.phoneNumber != null ? user.phoneNumber : "N/A"} id="phone"
                                           label="Phone Number"/>
                            </> : null
                    }
                </div>
            </section>
        </section>
    )
}

export default AccountProfile;