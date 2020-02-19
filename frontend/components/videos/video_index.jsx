import React from 'react';
import VideoIndexItem from './video_index_item';

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
            <div>
                <div className="feed-page-body">
                    <div className="outer-feed">
                        <h1 className="trending-header">Trending</h1>
                        <p className="trending-description">Watch the latest videos from out community</p>
                        <div className="feed" > {videos} </div >
                        <br className="end-of-feed" />
                    </div>
                    <aside>

                    </aside>
                </div>

                <footer className="video-index-footer">
                    <p className="copyright">© 2020 DigDog</p>
                </footer>
            </div>
        );
    }
};

export default VideoIndex;