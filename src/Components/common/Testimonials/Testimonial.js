import React from 'react';

const Testimonial = ({
                         testimonial,
                         name,
                         lastName,
                         picture,
                         allowPicture,
                     }) => {
    return (
        <section className="testimonial-container">
            <section className={`testimonial-text ${allowPicture ? 'spotlight half' : 'full'}`}>
                <p className="italics">
                    "{testimonial}"
                </p>
                <h3>
                    -{name}
                    {lastName[0]}.
                </h3>
            </section>
            {allowPicture && picture && (
                <section className="spotlight spotlight-container half">
                    <img
                        src={picture}
                        alt={`${name + lastName} spotlight photos`}
                        className="spotlight-picture"
                    />
                </section>
            )}
        </section>
    );
};

export default Testimonial;
