import VideoForm from './video_form';
import { createVideo } from '../../actions/video_actions';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.id
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createVideo: (post) => dispatch(createVideo(post))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);