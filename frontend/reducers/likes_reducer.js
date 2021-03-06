import { RECEIVE_ALL_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';

const likesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_LIKES:
            return actions.likes;
        case RECEIVE_LIKE:
            return Object.assign({}, state, { [action.like.id]: action.like });
        case REMOVE_LIKE:
            let newState = Object.assign({}, state)
            delete newState[action.likeId]
            return newState
        default:
            return state;
    }
};

export default likesReducer;