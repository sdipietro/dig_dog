import React from 'react';
import {Link} from 'react-router-dom'

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // debugger
        return (
            <div className="video-show-container">
                <div className="video-box">
                    <div className="video-container">
                        <div className="video-card">
                            <div className="video-card-inner">
                                <video className="show-video" autoPlay loop src={this.props.currentVideo.videoUrl}></video>
                            </div>
                        </div>
                    </div>
                    <div className="video-side">
                        <div onClick={this.props.closeModal}>
                            <Link to={`/users/${this.props.currentVideo.creator_id}`} className="video-show-user-container" >
                                <div className="video-profile-pic-container">
                                    <img className="profile-pic" src={this.props.currentVideo.userProfilePhotoUrl}></img>
                                </div>
                                <div className="video-show-name-container">
                                    <h2 className="video-show-name">{this.props.currentVideo.user}</h2>
                                    <h2 className="video-show-username">@{this.props.currentVideo.user}</h2>
                                </div>
                            </Link>
                        </div>
                        <div className="video-show-desciption-container">
                            <h1 className="video-show-description-header"></h1>
                            <h2 className="video-show-desciption">
                                {this.props.currentVideo.description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default VideoShow;