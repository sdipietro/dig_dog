json.partial! "api/users/user", user: @user

# json.videos do
#     @user.videos.each do |video|
#         json.set! video.id do
#             json.partial! "/api/videos/video", video: video
#         end
#     end
# end

json.user do 
  json.set! @user.id do 
    json.partial! "/api/users/user", user: @user
  end
end