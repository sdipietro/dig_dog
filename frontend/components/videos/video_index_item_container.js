import VideoIndexItem from './video_index_item';
import { requestVideo } from '../../actions/video_actions';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const mapStatetoProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        videos: state.entities.videos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestVideo: (videoId) => dispatch(requestVideo(videoId)),
        openModal: modal => dispatch(openModal(modal))
    }
};

export default connect(mapStatetoProps, mapDispatchToProps)(VideoIndexItem);