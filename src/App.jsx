import React, { useState, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import ttiPolyfill from 'tti-polyfill';
import '@babel/polyfill';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Products';
import NotFound from './components/NotFound';
import Paint from './components/Paint';
import Scroll from './components/Scroll';
import OutBoundLinks from './components/OutBoundLinks';


ReactGA.initialize('UA-151504017-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const history = createBrowserHistory();
history.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
});

const App = () => {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    }, []);

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const tti = await ttiPolyfill.getFirstConsistentlyInteractive();
    //             console.log(tti);
    //             ReactGA.timing({
    //                 category: 'Load Performance',
    //                 variable: 'Time to Interactive',
    //                 value: tti
    //             });
    //         } catch (ex) {
    //             console.log(ex);
    //         }
    //     })();
    // }, []);

    return (
        <Router history={history}>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/product" component={Product} />
                <Route path="/about" component={About} />
                <Route path="/paint" component={Paint} />
                <Route path="/scroll" component={Scroll} />
                <Route path="/outboundlinks" component={OutBoundLinks} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;