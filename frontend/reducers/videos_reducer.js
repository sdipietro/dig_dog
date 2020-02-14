import { RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from '../actions/video_actions';
import { merge } from 'lodash';

const videosReducer = (oldState = {}, action) => {
    Object.freeze(state);

    let newState = merge({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_VIDEOS:
            return action.videos
        case RECEIVE_VIDEO:
            newState[action.video.id] = action.video
            return newState
        case REMOVE_VIDEO:
            delete newState[action.videoId]
            return newState
        default:
            return state
    }
}

export default videosReducer;