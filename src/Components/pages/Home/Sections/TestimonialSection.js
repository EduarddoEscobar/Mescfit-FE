import React from 'react';
import TestimonialCarousel from '../../../common/Testimonials/TestimonialCarousel';

const TestimonialSection = () => {
    return (
        <div className="testimonial-section info-section">
            <h2>Testimonials</h2>
            <div className="carousel-div desktop-only">
                <TestimonialCarousel dots={true}/>
            </div>
            <div className="carousel-div mobile-only">
                <TestimonialCarousel dots={true} showOne={true}/>
            </div>
        </div>
    );
};

export default TestimonialSection;
