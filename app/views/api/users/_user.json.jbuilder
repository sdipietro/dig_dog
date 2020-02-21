json.extract! user, :id, :username, :name, :bio, :email, :video_ids, :comment_ids

if user.profile_photo.attached?
    json.profilePhotoUrl url_for(user.profile_photo)
else
    json.profilePhotoUrl nil
end