@videos.each do |video|
    # debugger
    json.set! video.id do
        json.extract! video, :id, :description, :creator_id
        json.videoUrl url_for(video.video)
        json.user video.user.username
        json.viewCount video.view_count
        # if video.comments
        #     json.comments do
        #         @video.comments.each do |comment|
        #             json.set! comment.id do
        #                 json.partial!('/api/comments/comment', comment: comment)
        #             end
        #         end
        # end
        # else
        #     json.comments nil
        # end
        # if video.likes
        #     json.likes do
        #         @video.likes.each do |like|
        #             json.set! like.id do
        #                 json.partial!('/api/likes/like', like: like)
        #             end
        #         end
        # end
        # else
        #     json.likes nil
        # end
        if video.user.profile_photo.attached?
            json.userProfilePhotoUrl url_for(video.user.profile_photo)
        else
            json.userProfilePhotoUrl nil
        end
    end
end