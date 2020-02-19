json.array! @videos do |video|
    # debugger
    json.extract! video, :id, :description, :creator_id
    json.videoUrl url_for(video.video)
end

# @videos.each do |video|
#   json.set! video.id do
#     json.partial! 'video', video: video
#   end
# end