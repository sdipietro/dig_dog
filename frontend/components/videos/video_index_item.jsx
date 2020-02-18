import React from 'react';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="video-feed-item">
                <video loop className="video" autoPlay muted src={this.props.video.videoUrl} />
                {/* <div>
                    <p>{this.props.video.creator_id}</p>
                </div> */}
            </div>
        )
    }
};

export default VideoIndexItem;