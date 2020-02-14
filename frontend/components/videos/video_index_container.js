import VideoIndex from './video_index';
import { requestVideos } from '../../actions/video_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        videos: state.entities.videos
    }
};

const mapDispatchToProps = dispatch => {
    return {
        requestVideos: () => dispatch(requestVideos())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);