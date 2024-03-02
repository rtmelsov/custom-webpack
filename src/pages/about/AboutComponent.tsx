import classes from './About.module.scss'
import Movie from '@assets/svg/movie.svg';

export default function AboutComponent() {
    return (
        <div>
            <h1 className={classes.title}>About</h1>
            <Movie width={50} height={50} style={{
                color: 'red'
            }} />
            <div className={classes.text}>
                I like football
            </div>
        </div>
    )
}