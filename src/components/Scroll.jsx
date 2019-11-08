import React, { useState, useEffect, useRef } from 'react';
import ReactGA from 'react-ga';
import WizardHat from '@images/wizard-hat.png';

const Scroll = () => {
    const intersectTarget = useRef(null);

    useEffect(() => {
        const opts = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const callback = (list) => {
            list.forEach((entry) => {
                console.log(entry);
                ReactGA.event({
                    category: 'Scroll',
                    action: 'Scrolled to Img',
                    value: entry.intersectionRatio
                });
            });
        };

        const observerScroll = new IntersectionObserver(callback, opts);
        observerScroll.observe(intersectTarget.current);
    }, []);

    return (
        <div className="scroll">
            <div className="container">
                <h1 className="scroll__title">Scroll</h1>
                <div className="scroll__content">
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                </div>
                <img className="scroll__image" src={WizardHat} ref={intersectTarget}/>
                <div className="scroll__content">
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                    <p className="scroll__text">Scroll Testing. Please scroll down to test scroll performance.</p>
                </div>
            </div>
        </div>
    );
}

export default Scroll;