import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import lazyCallBack from "./js/lazyCallBack";

const Container = lazy(() => import('@material-ui/core/Container'))
const App = lazy(() => import('./components/App'))
const Header = lazy(() => import('./components/Header'))
const Footer = lazy(() => import('./components/Footer'))

// https://reactjs.org/docs/strict-mode.html
ReactDOM.render(
   <React.StrictMode>
    <Suspense fallback={lazyCallBack('root')}>
        <Container maxWidth='lg'>
            <Header />
            <App />
            <Footer />
        </Container>
    </Suspense>
   </React.StrictMode>,
  document.getElementById('root')
);
