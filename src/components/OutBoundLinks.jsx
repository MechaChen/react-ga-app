import React from 'react';
import { OutboundLink } from 'react-ga';

const OutBoundLinks = () => {
    return (
        <div className="out-bound-links">
            <div className="container">
                <h1 className="out-bound-links__title">Out Bound Links Component</h1>
                <OutboundLink
                    className="out-bound-links__link"
                    eventLabel="outboundLabel"
                    to="https://www.facebook.com"
                    target="_blank"
                >
                    FaceBook
                </OutboundLink>
            </div>
        </div>
    );
};

export default OutBoundLinks;