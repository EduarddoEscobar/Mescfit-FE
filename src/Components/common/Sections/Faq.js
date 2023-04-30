import React, {useEffect, useState} from 'react';

import data from '../../../data/FAQ';
import {Collapse} from "antd";

const {Panel} = Collapse;

const Faq = () => {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        document.title = 'FAQ/Pricing';
        setFaqs(data);
    }, []);

    return (
        <div className="faq-container" id="faq">
            <h1 className="desktop-only">Frequently Asked Questions</h1>
            <h1 className="mobile-only">FAQs</h1>
            <Collapse expandIconPosition="end" bordered={false} className="faq-collapse">
                {faqs.length > 0 &&
                    faqs.map((faq, ind) => (
                        <Panel header={faq.question} key={ind} className="faq-item">
                            <div className="answer-text">
                                {faq.answer.map((ans, ind) => (
                                    <p key={ind}>{ans}</p>
                                ))}
                            </div>
                        </Panel>
                    ))}
            </Collapse>
        </div>
    );
};

export default Faq;
