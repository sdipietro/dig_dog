import * as VideoAPIUtil from '../util/video_api_util';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';
export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS';
export const CLEAR_VIDEO_ERRORS = 'CLEAR_VIDEO_ERRORS';

const receiveAllVideos = (videos) => {
    return {
        type: RECEIVE_VIDEOS,
        videos
    }
};

const receiveVideo = (video) => {
    return {
        type: RECEIVE_VIDEO,
        video
    }
};

const removeVideo = (videoId) => {
    return {
        type: REMOVE_VIDEO,
        videoId
    }
};

const receiveVideoErrors = errors => ({
    type: RECEIVE_VIDEO_ERRORS,
    errors
});

export const requestVideos = () => dispatch => {
    return (VideoAPIUtil.fetchAllVideos()
        .then(videos => dispatch(receiveAllVideos(videos)),
              errors => dispatch(receiveVideoErrors(errors.responseJSON)))
    );
};

export const requestVideo = (videoId) => dispatch => {
    return (VideoAPIUtil.fetchVideo(videoId)
        .then(video => dispatch(receiveVideo(video)),
              errors => dispatch(receiveVideoErrors(errors.responseJSON)))
    );
};

export const createVideo = (video) => dispatch => {
    return (VideoAPIUtil.createVideo(video)
        .then(video => dispatch(receiveVideo(video)))
    );
};

export const updateVideo = (video) => dispatch => {
    return (VideoAPIUtil.updateVideo(video)
        .then(video => dispatch(receiveVideo(video)),
              errors => dispatch(receiveVideoErrors(errors.responseJSON)))
    );
};

export const deleteVideo = (videoId) => dispatch => {
    return (VideoAPIUtil.deleteVideo(videoId)
        .then(() => dispatch(removeVideo(videoId)))
    );
};

export const receiveErrors = errors => ({
    type: RECEIVE_VIDEO_ERRORS,
    errors
});

export const clearErrors = () => {
    return {
        type: CLEAR_VIDEO_ERRORS
    }
}