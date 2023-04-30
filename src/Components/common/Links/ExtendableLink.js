import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {setFocus} from '../../../redux/actions/headerActions';
import {connect} from 'react-redux';

const ExtendableLink = ({to, links, children, focus, setFocus, icon}) => {
    const [hover, setHover] = useState(false);
    const [selected, setSelected] = useState(false);

    const handleClick = e => {
        if (window.innerWidth <= 576) {
            if (selected) {
                setSelected(false);
                setFocus(to);
            } else {
                e.preventDefault();
                setSelected(true);
            }
        } else {
            setSelected(false);
            setFocus(to);
        }
    };

    return (
        <div
            className={`extendable-link ${icon && "icon-extendable"}`}
            onMouseLeave={() => setHover(false)}
            style={{
                overflow: hover ? 'visible' : 'hidden',
            }}
        >
            <div className={`main-link ${selected && 'hovered'}`}>
                <Link
                    to={to}
                    onMouseOver={() => setHover(true)}
                    style={{
                        color: focus.includes(to) ? '#40a9ff' : '',
                    }}
                    onClick={handleClick}
                    className="header-link"
                >
                    {children}
                </Link>
                <p
                    className="mobile-only hover-button"
                    onClick={() => setSelected(!selected)}
                >
                    {selected ? '-' : '+'}
                </p>
            </div>
            <div
                className="extended-links"
                style={{
                    maxHeight: hover || selected ? 'none' : '0',
                }}
            >
                {links.length > 0 &&
                    links.map((link, ind) => (
                        <div key={ind} className="extended-link">
                            <Link
                                to={link.to}
                                style={{
                                    color: focus.includes(link.to) ? '#40a9ff' : '',
                                }}
                                onClick={() => setFocus(link.to)}
                            >
                                {link.title}
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        focus: state.header.focus,
    };
};

export default connect(mapStateToProps, {setFocus})(ExtendableLink);
