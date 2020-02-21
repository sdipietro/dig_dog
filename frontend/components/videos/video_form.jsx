import React from 'react';
import {Link} from 'react-router-dom';

export default class VideoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            videoFile: null,
            creator_id: this.props.currentUser.id,
            videoUrl: null
        }
    }

    handleInput(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ videoFile: file, videoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[description]', this.state.description);
        formData.append('video[creator_id]', this.state.creator_id);
        if (this.state.videoFile) {
            formData.append('video[video]', this.state.videoFile);
        }
        this.props.createVideo(formData)
            .then(() => {
                this.setState({
                    description: '',
                    videoFile: null
                });
            }).then(() => this.props.history.push('/'));
    }

    renderErrors() {
        return (
            <div className="error-messages">
                {this.props.errors.map((error, i) => (
                    <p key={`error#${i}`}>
                        {error}
                    </p>
                ))}
            </div>
        );
    };

    render() {
        const preview = this.state.videoUrl ? <video loop muted autoPlay src={this.state.videoUrl}></video> : null;
        return (
            <div className="video-form-page">
                <header className="page-header">
                    <div>
                        <Link to="/" className="logo">
                            <img className="dig-dog" src={window.digDogSymbol} alt="DigDog" />
                            <h1 className="">DigDog</h1>
                        </Link>
                    </div>
                    <div className="greeting">
                        <Link to={`/users/${this.props.currentUser.id}`} >
                            <img src={this.props.currentUser.profilePhotoUrl} className="current-user-photo" />
                        </Link>
                        <button className="logout-button" onClick={this.props.logout}>Log Out</button>
                        <Link to="/videos/new">
                            <img className="upload-symbol" src={window.uploadSymbol} />
                        </Link>
                    </div>
                </header>
                <div className="video-form-container">
                    <div className="video-form-title">
                        Upload video
                        <div className="video-form-subtitle">Post a video to your account</div>
                    </div>
                    <form onSubmit={this.handleSubmit.bind(this)} className="video-form-body">
                        <div className="upload-container-outer">
                            <div className="upload-container-inner">
                                <div className="upload-button">
                                    <div className="upload-button-inner">
                                        <div className="video-preview">
                                            {preview}
                                        </div>
                                        <input
                                            type="file"
                                            onChange={this.handleFile.bind(this)}
                                            className="upload-video-input"
                                            accept="video/mp4,video/x-m4v,video/*"/>
                                        <img src={window.uploadSymbol} alt="" className="video-upload-symbol"/>
                                        <div className="main-upload-text">Select video to upload</div>
                                        <div className="sub-upload-text">Or drag and drop a file</div>
                                        <br/>
                                        <ul className="upload-type-list">
                                            <li>MP4 or WebM</li>
                                            <li>720x1280 resolution or higher</li>
                                            <li>Up to 60 seconds</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="video-description-input-container">
                            <div className="video-description-input-container-inner">
                                <div className="video-description-header">
                                    <label htmlFor="video-description" className="caption-title">
                                        Caption
                                    </label>
                                    <span className="caption-requirements">
                                        *Required   
                                        <span>    0</span>
                                         / 
                                        100
                                    </span>
                                </div>
                                <div className="video-description-input">
                                    <div className="video-description-input-inner">
                                        <div className="description-editor">
                                            <div className="description-editor-innner">
                                                <div className="description-editor-innner-inner">
                                                    <input
                                                        type="text"
                                                        id="video-description"
                                                        value={this.state.description}
                                                        onChange={this.handleInput('description')} 
                                                        className="innermost-description-editor"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {this.renderErrors()}
                            <div className="video-submit-container">
                                <Link to="/" className="cancel-button">
                                    <button className="cancel-button">
                                        Cancel
                                    </button>
                                </Link>
                                <button type="submit" className="video-upload-button">
                                    Post
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <footer className="splash-page-footer">
                    <div className="splash-footer-middle">
                        <div className="splash-footer-logo">
                            <img className="dig-dog-white" src={window.digDogWhiteSymbol} alt="DigDog" />
                            <h1 className="footer-logo">DigDog</h1>
                        </div>
                        <div className="footer-content-column">
                            <h2>Company</h2>
                            <h3>About</h3>
                            <h3>Newsroom</h3>
                            <h3>Content</h3>
                            <h3>Careers</h3>
                        </div>
                        <div className="footer-content-column">
                            <h2>Programs</h2>
                            <h3>DigDog for Good</h3>
                            <h3>DigDog for Developers</h3>
                            <h3>Advertise on DigDog</h3>
                        </div>
                        <div className="footer-content-column">
                            <h2>Support</h2>
                            <h3>Help Center</h3>
                            <h3>Safety Center</h3>
                            <h3>Community Guidelines</h3>
                        </div>
                        <div className="footer-content-column">
                            <h2>Legal</h2>
                            <h3>Cookies Policy</h3>
                            <h3>Privacy Policy for Fluffy Users</h3>
                            <h3>Intellectual Property Policy</h3>
                            <h3>Law Enforecement</h3>
                            <h3>Privacy Policy</h3>
                            <h3>Terms of Service</h3>
                        </div>
                    </div>
                    <div className="splash-footer-bottom">
                        <div className="language-selector-box">
                            <p>English</p>
                        </div>
                        <div>
                            <p className="splash-copyright">© 2020 DigDog</p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}