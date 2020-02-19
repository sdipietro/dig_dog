json.array! @videos do |video|
    # debugger
    json.extract! video, :id, :description, :creator_id
    json.videoUrl url_for(video.video)
    json.user video.user.username
    json.viewCount video.view_count
    if video.user.profile_photo.attached?
        json.userProfilePhotoUrl url_for(video.user.profile_photo)
    else
        json.userProfilePhotoUrl nil
    end
end