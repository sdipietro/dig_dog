import React from 'react';
import VideoIndexItem from './video_index_item';
import UserIndexContainer from '../users/user_index_container';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        // debugger
        this.props.requestVideos();
        // .then (
        //     document.getElementById('xyz').play()
        // );
    };

    render() {
        const videos = this.props.videos.map((video, idx) => {
            return <VideoIndexItem key={idx} video={video} />;
        });

        return (
            <div className="index-page-outer">
                <div>
                    <div className="feed-page-body">
                        <div className="outer-feed">
                            <header className="feed-header">
                                <h1 className="trending-header">Trending</h1>
                                <h2 className="trending-description">Watch the latest videos from out community</h2>
                            </header>
                            <div className="feed" > {videos} </div >
                            <br className="end-of-feed" />
                        </div>
                        <aside className="video-index-aside">
                            <UserIndexContainer />
                        </aside>
                    </div>
                </div>

                <footer className="splash-page-footer">
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