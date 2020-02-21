import React from 'react';
import UserShowItem from './user_show_item';
import UserIndexContainer from './user_index_container';

class UserShow extends React.Component {
    constructor(props) {
        super(props);

        this.renderVideos = this.renderVideos.bind(this);
    };

    renderVideos() {
        if (this.props.videos.length === 0) {
            return (
                <div className="zero-videos">
                    <p>Upload a photo</p>
                    <p> Share with your friends </p>
                </div>
            )
        } else {
            return (

                <div className="profile-grid">
                    <div className="profile-items">
                        {this.props.videos.reverse().map((video, idx) =>
                            <UserShowItem
                                key={idx}
                                video={video} />
                        )}
                    </div>
                </div>
            )
        }
    }

    componentDidMount() {
        // debugger
        this.props.fetchAllUsers();
        this.props.requestVideos();
    };

    render() {
        const videos = this.props.videos.map((video, idx) => {
            return <UserShowItem key={idx} video={video} />;
        });

        return (
            <div className="index-page-outer">
                <div>
                    <div className="feed-page-body">
                        <div className="outer-feed">
                            <div className="user-profile">
                                <div className="profile-header">
                                    <div className="profile-photo">
                                        <img className="profile-photo-img" src={this.props.user.profilePhotoUrl} />
                                    </div>

                                    <div className="user-info">
                                        <div className="user-info-username">
                                            {this.props.user.username}
                                        </div>
                                        <div className="user-info-name">
                                            {this.props.user.name}
                                        </div>
                                        <div className="user-info-bio">
                                            {this.props.user.bio}
                                        </div>
                                    </div>

                                </div>
                            <div className="feed" > {videos} </div >
                            <br className="end-of-feed" />
                        </div>
                        <aside className="video-index-aside">
                            <UserIndexContainer />
                        </aside>
                    </div>
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
        </div>
        );
    }
};

export default UserShow;