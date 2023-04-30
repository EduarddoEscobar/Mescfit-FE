import React from 'react';
import image from '../../../../img/AboutPicture.jpg';
import {Image} from 'antd';

const AboutSection = () => {
    return (
        <section className="landing-about info-section">
            <section className="half center-text about-text">
                <h2>About MescFIT</h2>
                <p>
                    <i>
                        MescFIT and its services are based in Newark, Delaware, offering
                        in-person training, online coaching, and nutrition guidance
                    </i>
                </p>
            </section>
            <section className="half center-text owner-picture">
                <Image src={image} alt="MescFIT owner" preview={false}/>
            </section>
        </section>
    );
};

export default AboutSection;
