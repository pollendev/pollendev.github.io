import React, { lazy, Suspense } from 'react'
import '../css/App.css';
import lazyCallBack from "../js/lazyCallBack";
import { makeStyles } from '@material-ui/core/styles';
const Paper = lazy( () => import('@material-ui/core/Paper'))

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        'justify-content': 'center',
        '& > *': {
            backgroundColor: '#616161',
            margin: theme.spacing(1),
            width: theme.spacing(20),
            height: theme.spacing(20),
        },
    },
}))

function App() {
    const classes = useStyles()

    return (
        <Suspense fallback={lazyCallBack('footer')}>
            <h1 className='title'>Welcome to Pollen</h1>
            <div className={classes.root}>
                <Paper elevation={2} />
                <Paper elevation={6} />
                <Paper elevation={10} />
            </div>
        </Suspense>
    );
}

export default App;
