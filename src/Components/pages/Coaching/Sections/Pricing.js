import React from 'react';

const Pricing = (props) => {
    return (
        <div className="pricing">
            <div className="pricing-content">
                <h2>Pricing</h2>
                <div className="pricing-container">
                    <div className="pricing-item">
                        <h3>COACHING</h3>
                        <h3>(TRAINING ONLY)</h3>
                        <p>$150 BILLED MONTHLY</p>
                    </div>
                    <div className="pricing-item">
                        <h3>COACHING</h3>
                        <h3>(TRAINING + NUTRITION)</h3>
                        <p>$200 BILLED MONTHLY</p>
                    </div>
                    <div className="pricing-item">
                        <h3>IN-PERSON SESSION</h3>
                        <p>$50 PER SESSION</p>
                        <p>$35 WITH COACHING + TRAINING</p>
                    </div>
                </div>
                <a href="https://forms.gle/dm3LARq6oYavbZKR9" target="_blank">COACHING APPLICATION</a>
            </div>
        </div>
    )
}

export default Pricing;