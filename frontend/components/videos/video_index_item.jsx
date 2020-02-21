import React from 'react';
import { openModal } from '../../actions/modal_actions';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.vidRef = React.createRef();
        this.playVideo = this.playVideo.bind(this);
        this.pauseVideo = this.pauseVideo.bind(this);
    }

    playVideo (){
        this.refs.vidRef.play();
    }

    pauseVideo() {
        this.refs.vidRef.pause();
        this.refs.vidRef.currentTime = 0;
    }

    render() {
        return (
            <div className="video-feed-item">
                <video 
                    loop 
                    muted 
                    className="video" 
                    src={this.props.video.videoUrl} 
                    value={this.props.video.id} 
                    onClick={() => dispatch(openModal('show', this.props.video.id))}
                    onMouseEnter={this.playVideo}
                    onMouseLeave={this.pauseVideo}
                    ref="vidRef" />
                {/* <div>
                    <p>{this.props.video.creator_id}</p>
                </div> */}
            </div>
        )
    }
};

export default VideoIndexItem;