import React, { lazy, Suspense } from 'react'
import '../css/App.css';
import lazyCallBack from "../js/lazyCallBack";
const Typography = lazy(() => import("@material-ui/core/Typography"));

function App() {
    return (
        <Suspense fallback={lazyCallBack('footer')}>
            <div className='center'>
                <Typography variant='h1' className='title'>Pollen</Typography>
                <Typography variant='subtitle1' className='description'>
                    Welcome to <strong>Pollen</strong>. Our website is currently under construction.
                </Typography>
            </div>
        </Suspense>
    );
}

export default App;
