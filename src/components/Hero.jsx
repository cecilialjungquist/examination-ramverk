import { Link } from 'react-router-dom';
import Button from './Button';
import './Hero.scss';

function Hero() {

    return (  
        <section className="hero">
            <h1>Cinema</h1>
            <p>Created simply for movie lovers</p>
            <Link to='/all-movies'>
                <Button children={'Start browsing!'} type={'primary'} />
            </Link>
        </section>
    );
}

export default Hero;