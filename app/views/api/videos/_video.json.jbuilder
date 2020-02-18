json.extract! video, :id, :description, :creator_id
json.videoUrl url_for(video.video) if video.video.attached?