json.partial! "api/users/user", user: @user

json.user do 
  json.set! @user.id do 
    json.partial! "/api/users/user", user: @user
  end
end

if @user.videos
    json.videos do
        @user.videos.each do |video|
            json.set! video.id do
                json.partial! "/api/videos/video", video: video
            end
        end
    end
end

if @user.follower_relationships
    json.follows do
        @user.follower_relationships.each do |follow|
            json.set! follow.id do
                json.extract! follow, :id, :follower_id, :followee_id
            end
        end

        @user.followee_relationships.each do |follow|
            json.set! follow.id do
                json.extract! follow, :id, :follower_id, :followee_id
            end
        end
    end
end

# json.user do 
#     json.partial! "api/users/user", user: @user
    
# end 

# json.videos do 
    
#     @user.videos.each do |video|
#         json.set! video.id do
#             json.partial!('/api/videos/video', video: video)
#         end 
#     end 
# end 