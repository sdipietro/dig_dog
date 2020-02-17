import React from 'react';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="video-feed-item">
                <video loop className="video" autoPlay controls src={this.props.video.videoUrl} />
            </div>
        )
    }
};

export default VideoIndexItem;