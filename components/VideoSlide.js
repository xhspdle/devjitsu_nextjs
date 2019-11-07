import './VideoSlide.scss';

const VideoSlide = () => {
    //useSlide();
    return (
        <>
            <video autoPlay muted loop id="myVideo">
                <source src="/static/vid/home1.mp4" type="video/mp4"/>
            </video>
            <div className="content">
                <h1 id="typeLogo">Dev-Jitsu</h1>
            </div>
        </>
    );
}

export default VideoSlide;