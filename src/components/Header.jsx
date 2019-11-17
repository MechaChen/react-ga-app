import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link className="router-link" to="/">Home</Link>
            <Link className="router-link" to="/product">Product</Link>
            <Link className="router-link" to="/about">About</Link>
            <Link className="router-link" to="/paint">Paint</Link>
            <Link className="router-link" to="/scroll">Scroll</Link>
            <Link className="router-link" to="/outboundlinks">OutBoundLinks</Link>
            <Link className="router-link" to="/fake-pageview">Fake Pageview</Link>
            <Link className="router-link" to="/message-texting-form">Message Texting Form</Link>
        </header>
    );
}

export default Header;