import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import Broom from '@images/broom.png';

const Paint = () => {
    const [imgPaintTime, setImgPaintTime] = useState(0);

    useEffect(() => {
        const callback = (list) => {
            list.getEntries().forEach((entry) => {
                console.log(entry);
            });
        }

        const observer = new PerformanceObserver(callback);
        observer.observe({ entryTypes: ['paint'] });
    }, []);

    useEffect(() => {
        const callback = (list) => {
            list.getEntries().forEach((entry) => {
                if (entry.name.includes(Broom)) {
                    console.log(entry);
                    setImgPaintTime(entry.duration);
                }
            });
        };

        const observer = new PerformanceObserver(callback);
        observer.observe({ entryTypes: ['resource'] });
    }, []);

    useEffect(() => {
        ReactGA.ga('send', 'timing', 'First Meaningful Paint', 'Broom', imgPaintTime);
    }, [imgPaintTime]);

    return (
        <div className="paint">
            <div className="container">
                <h1>Paint</h1>
                <img src={Broom} />
            </div>
        </div>
    );
}

export default Paint;