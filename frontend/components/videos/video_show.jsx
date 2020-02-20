import React from 'react';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     debugger
    //     this.props.requestVideo(this.props.match.params.id)
    // }

    render() {
        return (
            <div className="video-show-container">
                <div className="video-box">
                    <div className="video-container">
                        <div className="video-card">
                            <div className="video-card-inner">
                                <video className="show-video" muted autoPlay loop src={this.props.currentVideo.videoUrl}></video>
                            </div>
                        </div>
                    </div>
                    <div className="video-side">
                        <a href={`/users/${this.props.id}`} className="video-show-user-container">
                            <div className="video-profile-pic-container">
                                <img className="profile-pic" src={this.props.currentVideo.userProfilePhotoUrl}></img>
                            </div>
                            <div className="video-show-name-container">
                                <h2 className="video-show-name">{this.props.currentVideo.user}</h2>
                                <h2 className="video-show-username">@{this.props.currentVideo.user}</h2>
                            </div>
                        </a>
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