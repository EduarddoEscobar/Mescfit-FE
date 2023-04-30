import React, {useEffect} from 'react';
import AboutSection from './Sections/AboutSection';
import TestimonialSection from './Sections/TestimonialSection';
import TopSection from './Sections/TopSection';

const Home = () => {
    useEffect(() => {
        document.title = 'MescFIT';
    }, []);

    return (
        <>
            <TopSection/>
            <section className="landing-content image-container mid">
                <AboutSection/>
            </section>
            <section className="landing-content image-container bot">
                <TestimonialSection/>
            </section>
        </>
    );
};
export default Home;
