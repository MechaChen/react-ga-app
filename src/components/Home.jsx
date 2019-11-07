import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';

const Home = () => {
    const [performTime, setPerformTime] = useState({ reqStart : 0, resStart : 0, resEnd : 0 });

    useEffect(() => {
        const callback = (list) => {
            list.getEntries().forEach((entry) => {
                setPerformTime({ 
                    reqStart: entry.requestStart, 
                    resStart: entry.responseStart, 
                    resEnd: entry.responseEnd 
                });
            });
        }

        const observer = new PerformanceObserver(callback);
        observer.observe({ entryTypes: ['navigation']});
    }, []);

    // useEffect(() => {
    //     console.log('performTime State updated!');
    //     const { resStart, resEnd } = performTime;
    //     ReactGA.ga('send', 'timing', 'total', 'Total time', resEnd - resStart);
    // }, [performTime]);

    return (
        <div className="home">
            <div className="container">
                <h1>Home</h1>
            </div>
        </div>
    );
}

export default Home;