import VideoIndexItem from './video_index_item';
import { requestVideo } from '../../actions/video_actions';
import { connect } from 'react-redux';


const mapStatetoProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        videos: state.entities.videos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestVideo: (videoId) => dispatch(requestVideo(videoId)),
    }
};

export default connect(mapStatetoProps, mapDispatchToProps)(VideoIndexItem);