json.extract! user, :id, :username, :name, :bio, :email

if user.profile_photo.attached?
    json.profilePhotoUrl url_for(user.profile_photo)
end