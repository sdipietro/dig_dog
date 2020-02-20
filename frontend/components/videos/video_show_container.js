import VideoShow from './video_show';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { requestVideo } from '../../actions/video_actions';
import { connect } from 'react-redux';


const mapStatetoProps = (state) => {
    // debugger
    return {
        currentVideo: state.entities.videos[state.ui.modal.videoId],
        formType: 'show'
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestVideo: (videoId) => dispatch(requestVideo(videoId)),
        closeModal: () => dispatch(closeModal())
    }
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(VideoShow));