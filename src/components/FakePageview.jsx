import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';

const FakePageview = () => {

    const trackFakePage = () => {
        console.log('trackFakePage');
        ReactGA.ga('send', 'pageview', 'member');
    }

    return (
        <button onClick={trackFakePage}>
            Fake Page View
        </button>
    );
}

export default FakePageview;