import React from 'react';
import VideoIndexItem from '../videos/video_index_item';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.requestVideos();
        // .then (
        //     document.getElementById('xyz').play()
        // );
    };

    render() {
        const videos = this.props.videos.map((video, idx) => {
            // return <VideoIndexItem key={idx} video={video} />
            return (
            <div className="video-feed-item" key={idx} video={video}>
                <video
                    loop
                    className="video"
                    autoPlay
                    muted
                    src={video.videoUrl}
                    value={video.id} />
            </div>
            )
        });

        return (
            <div>
                <div className="splash-page-body">
                    <p className="splash-title">Make Your Day</p>
                    <p className="splash-description">Real Pups. Real Videos.</p>
                    <div className="video-banner-container">
                        <div className="video-banner"> {videos} </div >
                    </div>
                </div>
                <footer className="splash-page-footer">
                    <div className="splash-footer-top">
                        <div className="splash-footer-phone">
                            <h2 className="splash-footer-text">Text yourself a link to download DigDog</h2>
                            <div className="splash-phone-input">
                                <form className="phone-form">
                                    <input value="US+1" readOnly className="splash-us1"></input>
                                    <img className="up-down-symbol" src={window.upDownSymbol}></img>
                                    <input placeholder="Phone number" className="phone-number-input"></input>
                                    <button type="submit" className="phone-submit">Send</button>
                                </form>
                            </div>
                            <div className="policy-message-container">
                                <div className="policy-message">
                                    <p className="policy">
                                        By clicking the "send" button, you confirm that you agree to our Terms of Use 
                                        and acknowledge you have read and understood our  Privacy Policy
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="splash-footer-links">
                            <h2 className="download-header">Download now</h2>
                            <div className="splash-links">
                                <a href="https://github.com/sdipietro">Github</a>
                                <a href="https://www.linkedin.com/in/stephen-a-dipietro-940ba8104/">LinkedIn</a>
                                <a href="https://github.com/sdipietro/dig_dog/blob/master/README.md">About</a>
                            </div>
                        </div>
                    </div>
                    <div className="splash-footer-middle">
                        <div className="splash-footer-logo">
                            <img className="dig-dog-white" src={window.digDogWhiteSymbol} alt="DigDog" />
                            <h1 className="footer-logo">DigDog</h1>
                        </div>
                        <div className="footer-content-column">
                            <h2>Company</h2>
                            <h3>About</h3>
                            <h3>Newsroom</h3>
                            <h3>Content</h3>
                            <h3>Careers</h3>
                        </div>
                        <div className="footer-content-column">
                            <h2>Programs</h2>
                            <h3>DigDog for Good</h3>
                            <h3>DigDog for Developers</h3>
                            <h3>Advertise on DigDog</h3>
                        </div>
                        <div className="footer-content-column">
                            <h2>Support</h2>
                            <h3>Help Center</h3>
                            <h3>Safety Center</h3>
                            <h3>Community Guidelines</h3>
                        </div>
                        <div className="footer-content-column">
                            <h2>Legal</h2>
                            <h3>Cookies Policy</h3>
                            <h3>Privacy Policy for Fluffy Users</h3>
                            <h3>Intellectual Property Policy</h3>
                            <h3>Law Enforecement</h3>
                            <h3>Privacy Policy</h3>
                            <h3>Terms of Service</h3>
                        </div>
                    </div>
                    <div className="splash-footer-bottom">
                        <div className="language-selector-box">
                            <p>English</p>
                        </div>
                        <div>
                            <p className="splash-copyright">© 2020 DigDog</p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
};

export default VideoIndex;