import React from 'react';
import mainLogo from '../../../../img/MescFitLongRed.png';
import {useNavigate} from 'react-router-dom';

const TopSection = () => {
    let navigate = useNavigate();

    const handleClick = target => {
        navigate(target);
    };

    return (
        <section className="image-container top">
            <section className="landing-main">
                <section className="half center-text">
                    <h1>WELCOME TO</h1>
                    <img src={mainLogo} alt="Workout Inspiration"/>
                    <p className="italics">
                        At MescFIT we strive to provide the tools, resources, and guidance
                        to transform your health and fitness
                    </p>
                </section>
                <section className="half desktop-only"></section>

                <button
                    className="mobile-only"
                    onClick={() => handleClick('/coaching')}
                >
                    COACHING
                </button>
            </section>
        </section>
    );
};

export default TopSection;
