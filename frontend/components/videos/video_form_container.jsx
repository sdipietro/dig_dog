import VideoForm from './video_form';
import { createVideo } from '../../actions/video_actions';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.session
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createVideo: (video) => dispatch(createVideo(video)),
        logout: () => dispatch(logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);