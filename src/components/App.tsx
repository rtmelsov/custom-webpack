import { Link, Outlet } from 'react-router-dom'
import { Suspense } from 'react';
import classes from './App.module.scss'

export function App() {
    return (
        <div>
            {PLATFORM === 'desktop' ? <h1 data-testID={'title'} className={classes.button}>Hi desktop</h1> : <h1 data-testID={'title'} className={classes.button}>Hi mobile</h1>}
            <div data-testID={'link-div'} className={classes.navLink}>
                <Link to={'/about'}>About</Link>
                <Link to={'/shop'}>Shop</Link>
            </div>
            <Outlet />
        </div>
    )
}