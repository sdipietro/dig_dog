import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.requestVideos();
    };

    render() {
        // debugger
        const videos = this.props.videos.map((video, idx) => {
            return <VideoIndexItem key={idx} video={video} />;
        });
        // debugger
        return <div className="feed">{videos}</div>;
    }
};

export default VideoIndex;