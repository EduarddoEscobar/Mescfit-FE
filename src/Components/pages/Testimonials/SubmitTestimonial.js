import React from 'react';
import TestimonialForm from './TestimonialForm';

const SubmitTestimonial = (props) => {
    return (
        <div className="testimonial-form-container center-text">
            <h1>Submit a Testimonial</h1>
            <div className="testimonial-form-content mobile-only">
                <div className="owner-message">
                    <div className="left-text">
                        <h2>Share Your Story!</h2>
                        <p>
                            Thank you for taking a moment to share your story and experience
                            with our coaching, or another one of our products/services. My
                            goal as a coach is to help as many people as possible get the best
                            results they can to the best of my abilities. By sharing your
                            experience you will help me get one step closer to accomplishing
                            that.
                        </p>
                    </div>
                    <div className="right-text">
                        <p>Thank you</p>
                        <p>- Mark Escobar</p>
                    </div>
                </div>
            </div>
            <TestimonialForm/>
        </div>
    );
};

export default SubmitTestimonial;
