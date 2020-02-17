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
            return <VideoIndexItem key={idx} video={video} />;
        });

        return (
            <div>
                <div className="splash-page-body">
                    <p className="splash-title">Make Your Day</p>
                    <p className="splash-description">Real Pups. Real Videos.</p>
                    <div className="video-banner-container">
                        <div className="video-banner"> {videos} </div >
                    </div>
                    <br className="end-of-feed" />
                </div>
                <footer className="splash-page-footer">
                    
                </footer>
            </div>
        );
    }
};

export default VideoIndex;