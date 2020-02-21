import UserShow from './user_show';
import { fetchUser, fetchAllUsers } from '../../actions/user_actions';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { requestVideos } from '../../actions/video_actions';
import { logout } from '../../actions/session_actions';

const mapStatetoProps = (state, ownProps) => {
    let videos;
    if (state.entities.users[ownProps.match.params.id] === undefined) {
        videos = [];
    } else {
        videos = state.entities.users[ownProps.match.params.id].video_ids.map(videoId => state.entities.videos[videoId])
    }

    let user;
    if (state.entities.users[ownProps.match.params.id] === undefined) {
        user = [null];
    } else {
        user = state.entities.users[ownProps.match.params.id];
    }

    return {
        currentUser: state.entities.users[state.session.id],
        user: user,
        videos: videos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        requestVideos: () => dispatch(requestVideos()),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        openModal: (modal) => dispatch(openModal(modal)),
        logout: () => dispatch(logout())
    }
};

export default connect(mapStatetoProps, mapDispatchToProps)(UserShow);