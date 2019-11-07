import React, { useState, useEffect, useRef } from 'react';
import WizardHat from '@images/wizard-hat.png';

const Scroll = () => {
    const intersectTarget = useRef(null);

    useEffect(() => {
        const opts = {
            root: null,
            rootMargin: '0px',
            threshold: 0
        };

        const callback = (list) => {
            list.forEach((entry) => {
                console.log(entry);
            });
        };

        const observerScroll = new IntersectionObserver(callback, opt)
    }, []);

    return (
        <div className="scroll">
            <div className="container">
                <h1 ref={intersectTarget}>Scroll</h1>
                <div className="scroll__content">
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                </div>
                <img className="scroll__image" src={WizardHat} />
                <div className="scroll__content">
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                    <p className="scroll__text">Scroll Testing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus.</p>
                </div>
            </div>
        </div>
    );
}

export default Scroll;