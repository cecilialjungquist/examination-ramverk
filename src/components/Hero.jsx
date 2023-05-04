import { Link } from 'react-router-dom';
import Button from './Button';
import './_Hero.scss';

function Hero() {

    return (  
        <section className="hero">
            <h1>Cinema</h1>
            <p>Created by movie lovers, for movie lovers</p>
            <Link to='/all-movies'>
                <div className='primary-btn-container'>
                    <Button children={'Start browsing!'} type={'primary'} />
                </div>
            </Link>
        </section>
    );
}

export default Hero;