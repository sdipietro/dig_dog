import React from 'react';
import { openModal } from '../../actions/modal_actions';

class UserShowItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // debugger
        return (
            <div className="user-show-item">
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

export default UserShowItem;