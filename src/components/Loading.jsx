import loadingGIF from '../assets/loading.gif';

function Loading() {
    const styles = {
        backgroundImage: `url(${loadingGIF})`
    }

    return (  
        <div className="loading-gif" style={styles}>

        </div>
    );
}

export default Loading;