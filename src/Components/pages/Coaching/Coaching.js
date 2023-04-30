import React from 'react';
import Faq from '../../common/Sections/Faq';
import TopSection from "./Sections/TopSection";
import WhatYouGet from "./Sections/WhatYouGet";
import Pricing from "./Sections/Pricing";

const Coaching = props => {
    return (
        <div className="coaching-container">
            <TopSection/>
            <div className="top-separator"/>
            <section className="plan-info" id="coaching">
                <WhatYouGet/>
                <div className="plan-separator"/>
                <Pricing/>
            </section>
            <div className="bottom-separator"/>
            <Faq id="coaching"/>
        </div>
    );
};

export default Coaching;
