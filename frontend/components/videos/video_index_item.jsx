import React from 'react';
import { openModal } from '../../actions/modal_actions';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="video-feed-item">
                <video 
                    loop 
                    className="video" 
                    autoPlay 
                    muted 
                    src={this.props.video.videoUrl} 
                    value={this.props.video.id} 
                    onClick={() => dispatch(openModal('show', this.props.video.id))}/>
                {/* <div>
                    <p>{this.props.video.creator_id}</p>
                </div> */}
            </div>
        )
    }
};

export default VideoIndexItem;