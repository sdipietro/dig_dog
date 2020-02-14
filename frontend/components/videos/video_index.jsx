import React from 'react';
import VideoIndexItemContainer from './video_index_item_container';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.requestVideos();
    };

    render() {
        const videos = Object.values(this.props.videos);

        return (
            <div className="feed">
                {videos.map((video, idx) => {
                    return <VideoIndexItemContainer key={idx} video={video} />;
                })}
            </div>
        )
    }
};

export default VideoIndex;