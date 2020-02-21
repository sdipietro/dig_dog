export const fetchAllVideos = () => {
    return $.ajax({
        url: '/api/videos',
        method: 'GET'
    })
};

export const fetchVideo = (videoId) => {
    return $.ajax({
        url: `/api/videos/${videoId}`,
        method: 'GET'
    })
};

export const createVideo = (video) => {
    return $.ajax({
        url: '/api/videos',
        method: 'POST',
        data: video,
        contentType: false,
        processData: false
    })
};

export const updateVideo = (video) => {
    return $.ajax({
        url: `/api/videos/${video.id}`,
        method: 'PATCH',
        data: { video }
    })
};

export const deleteVideo = (videoId) => {
    return $.ajax({
        url: `/api/videos/${videoId}`,
        method: 'DELETE'
    })
};