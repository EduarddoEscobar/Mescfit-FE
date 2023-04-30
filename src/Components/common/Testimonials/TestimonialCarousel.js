import React, {useEffect, useState} from 'react';
import {Carousel} from 'antd';
import Testimonial from './Testimonial';
import styled from 'styled-components';
import {connect} from 'react-redux';

const CarouselWrapper = styled(Carousel)`
  max-width: 100vw;
  width: 100vw;
  .slick-dots li button {
    width: 1.25vh;
    height: 1.25vh;
    border-radius: 100%;
  }
`;

const TestimonialCarousel = ({testimonials, autoplay, dots, showOne = false, dontShow = []}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const filteredData = testimonials.filter(t => !dontShow.includes(t.testimonialId));
        let formattedData = filteredData;
        if (!showOne) {
            formattedData = filteredData.reduce((acc, cur, ind, arr) => {
                if (ind % 2 === 0) {
                    acc.push(arr.slice(ind, ind + 2));
                }
                return acc;
            }, []);
        }
        setData(formattedData);
    }, [testimonials]);

    return (
        <CarouselWrapper
            autoplay={!!autoplay}
            dots={!!dots}
            className="main-carousel"
        >
            {!showOne
                ? data.map(([testimonialOne, testimonialTwo]) => (
                    <div key={testimonialOne.testimonialId + '' + testimonialTwo?.testimonialId}>
                        <div className="testimonial-item">
                            <div className="half center-text">
                                <Testimonial {...testimonialOne} />
                            </div>
                            {testimonialTwo &&
                                <div className="half center-text">
                                    <Testimonial {...testimonialTwo} />
                                </div>
                            }
                        </div>
                    </div>
                ))
                : data.map((testimonial) => (
                    <div key={testimonial.testimonialId}>
                        <div className="testimonial-item">
                            <div className="center-text">
                                <Testimonial {...testimonial} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </CarouselWrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        testimonials: state.testimonials.testimonials,
    };
};

export default connect(mapStateToProps)(TestimonialCarousel);
