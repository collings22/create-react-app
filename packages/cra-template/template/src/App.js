import React from 'react';

import { Header } from './components/Header';
import Footer from './components/Footer';
import { Route, Redirect, Switch } from 'react-router-dom';

import Container from './components/Footer/node_modules/react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { About } from './views/About';
import { Home } from './views/Home';

const es6EarliestSupportVersion = {
  // https://caniuse.com/?search=es6
  edge: { v: 12, label: 'Edg/' },
  firefox: { v: 32, label: 'Firefox/' },
  chrome: { v: 34, label: 'Chrome/' },
};

const Layout = props => {
  function useWindowSize() {
    const [size, setSize] = React.useState(0);
    React.useLayoutEffect(() => {
      function updateSize() {
        setSize(window.document.body.scrollWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  const screenWidth = useWindowSize();

  function CheckClientBrowser() {
    let support = true;
    const ua = window.navigator.userAgent;
    let browser;
    let index;
    let version;

    if (ua.includes('MSIE') || ua.includes('Trident/')) {
      support = false;
    } else if (ua.includes(es6EarliestSupportVersion.firefox.label)) {
      browser = ua.substring(
        ua.indexOf(es6EarliestSupportVersion.firefox.label)
      );
      index = browser.indexOf('/');
      version = parseFloat(browser.substring(++index));
      support = version >= es6EarliestSupportVersion.firefox.v;
    } else if (ua.includes(es6EarliestSupportVersion.chrome.label)) {
      browser = ua.substring(
        ua.indexOf(es6EarliestSupportVersion.chrome.label)
      );
      index = browser.indexOf('/');
      version = parseFloat(browser.substring(++index));
      support = version >= es6EarliestSupportVersion.chrome.v;
    } else if (ua.includes(es6EarliestSupportVersion.edge.label)) {
      browser = ua.substring(ua.indexOf(es6EarliestSupportVersion.edge.label));
      index = browser.indexOf('/');
      version = parseFloat(browser.substring(++index));
      support = version >= es6EarliestSupportVersion.edge.v;
    }

    return support;
  }

  return (
    <div>
      <header>
        <Header />
      </header>
      {CheckClientBrowser() === false ? (
        <main>
          <UnsupportedBrowser />
        </main>
      ) : (
        <main>
          {screenWidth < 385 ? <ScreenSizeWarning /> : props.children}
        </main>
      )}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Redirect to="/Home" />
      </Switch>
    </Layout>
  );
}

const ScreenSizeWarning = () => {
  return (
    <Jumbotron>
      <Container>
        <h1>Screensize is too small</h1>
        <p>
          Switch to a tablet, laptop or desktop to be able to enjoy your
          wonderful analytics.
        </p>
      </Container>
    </Jumbotron>
  );
};

const UnsupportedBrowser = () => {
  return (
    <Jumbotron>
      <Container>
        <h1>Unsupported Browsers</h1>
        <p>
          Upgrade to one of the latest browsers (e.g. Microsoft Edge, Firefox,
          Google Chrome) to be able to enjoy the full experience of your
          analytics.
        </p>
      </Container>
    </Jumbotron>
  );
};

export default App;
