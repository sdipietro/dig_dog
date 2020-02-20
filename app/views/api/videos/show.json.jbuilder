# json.partial! "api/videos/video", video: @video

json.video do
    json.partial!('video', video: @video)
end

json.user do
    json.partial!('/api/users/user', user: @video.user)
end

json.likes do
    @video.likes.each do |like|
        json.set! like.id do
            json.partial!('/api/likes/like', like: like)
        end
    end
end