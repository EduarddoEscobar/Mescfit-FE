import React from 'react';
import {connect} from 'react-redux';
import Testimonial from '../../common/Testimonials/Testimonial';
import TestimonialCarousel from '../../common/Testimonials/TestimonialCarousel';
import {Link} from 'react-router-dom';

const Testimonials = ({spotlightTestimonial}) => {
    return (
        <section className="testimonials-page-container">
            <section className="testimonial-section spotlight-testimonial">
                <h2>Client Spotlight</h2>
                <Testimonial {...spotlightTestimonial} allowPicture={true}/>
            </section>
            <section className="testimonial-section client-testimonials-container">
                <section className="client-testimonials">
                    <h2 className="blue-text">Client Testimonials</h2>
                    <p id="client-testimonials-subtext">
                        Find Out What Other People Are Saying! Or{' '}
                        <Link to="/testimonials/submit" className="blue-text">
                            Submit Your Own
                        </Link>
                    </p>
                    <section className="desktop-only">
                        <TestimonialCarousel autoplay={false} dots={true} showOne={false}
                                             dontShow={[spotlightTestimonial.testimonialId]}/>
                    </section>
                    <section className="mobile-only">
                        <TestimonialCarousel showOne={true} dots={true}
                                             dontShow={[spotlightTestimonial.testimonialId]}/>
                    </section>
                </section>
            </section>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        spotlightTestimonial: state.testimonials.spotlightTestimonial,
    };
};

export default connect(mapStateToProps)(Testimonials);
