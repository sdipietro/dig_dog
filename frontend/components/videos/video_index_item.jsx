import React from 'react';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="video-item">
                <div>
                    <video className="videoUrl" src={this.props.video.videoUrl} />
                </div>
            </div>
        )
    }
};

export default VideoIndexItem;