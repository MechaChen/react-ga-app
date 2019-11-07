import React, { useState, useEffect } from 'react';
import Skeleton from '@images/skeleton.png';

const About = () => {

    useEffect(() => {
        const callback = (list) => {
            list.getEntries().forEach((entry) => {
                if (entry.name.includes('About')) {
                    console.log(entry);
                }
            });
        }

        const observer = new PerformanceObserver(callback);
        observer.observe({ entryTypes: ['mark', 'measure'] });
    });

    return (
        <div className="about">
            <div className="container">
                <h1>About</h1>
                <img className="about__pic" src={Skeleton} />
                <p className="about__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, quidem.</p>
            </div>
        </div>
    );
}

export default About;