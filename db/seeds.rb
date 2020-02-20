# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Like.destroy_all
Comment.destroy_all
Video.destroy_all
User.destroy_all

user_1 = User.create!(username: 'bowwow', password: '12345678', email: 'bowwow@dig-dog.com', name: 'Bow Wow', bio: 'I do it for the dogs')
    pro_pic_1 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/bowwow_photo.jpg')
    user_1.profile_photo.attach(io: pro_pic_1, filename: 'bowwow_photo.jpg')
user_2 = User.create!(username: 'steved', password: '12345678', email: 'steved@dig-dog.com', name: 'Steve D', bio: 'So many dogssss!')
    pro_pic_2 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/steve_photo.jpg')
    user_2.profile_photo.attach(io: pro_pic_2, filename: 'steve_photo.jpg')
user_3 = User.create!(username: 'doglover', password: '12345678', email: 'doglover@dig-dog.com', name: 'Dog Lover', bio: 'I love doggies')
    pro_pic_3 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/doglover_photo.jpg')
    user_3.profile_photo.attach(io: pro_pic_3, filename: 'doglover_photo.jpg')
user_4 = User.create!(username: 'gregorious', password: '12345678', email: 'gregoriousw@dig-dog.com', name: 'TA Greg', bio: 'I like hot dogs')
    pro_pic_4 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/gregorious_photo.jpg')
    user_4.profile_photo.attach(io: pro_pic_4, filename: 'gregorious_photo.jpg')
user_5 = User.create!(username: 'curnchunk', password: '12345678', email: 'curnchunk@dig-dog.com', name: 'Clavin Curn', bio: 'Human')
    pro_pic_5 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/curnchunk_photo.png')
    user_5.profile_photo.attach(io: pro_pic_5, filename: 'curnchunk_photo.png')
user_6 = User.create!(username: 'tommydukes', password: '12345678', email: 'tommydukes@dig-dog.com', name: 'Tommy the Duke', bio: 'I ammmm the duke')
    pro_pic_6 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/tommy_photo.jpg')
    user_6.profile_photo.attach(io: pro_pic_6, filename: 'tommy_photo.jpg')
user_7 = User.create!(username: 'fatAlbert', password: '12345678', email: 'fatalbert@dig-dog.com', name: 'Big Al', bio: 'Your highness')
    pro_pic_7 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/albert_photo.jpg')
    user_7.profile_photo.attach(io: pro_pic_7, filename: 'albert_photo.jpg')
user_8 = User.create!(username: 'bigdog23', password: '12345678', email: 'bigdog23@dig-dog.com', name: 'Big Diggity Dog', bio: 'I the biggest of the dogs')
    pro_pic_8 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/bigdog_photo.jpg')
    user_8.profile_photo.attach(io: pro_pic_8, filename: 'bigdog_photo.jpg')
user_9 = User.create!(username: 'snoooooop', password: '12345678', email: 'snoooooop@dig-dog.com', name: 'Snoop', bio: 'Snoop D O double G')
    pro_pic_9 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/snoop_photot.png')
    user_9.profile_photo.attach(io: pro_pic_9, filename: 'snoop_photot.png')
demo_user = User.create!(username: 'demouser', password: 'demopassword', email: 'demo@dig-dog.com', name: 'Demo User', bio: 'Welcome to DigDog!')
    demo_user_pic = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/demo_photo.jpg')
    demo_user.profile_photo.attach(io: demo_user_pic, filename: 'demo_photo.jpg')

seed_vid_2 = Video.create!({description: "Dog with cat", creator_id: user_2.id, view_count: 33 })
    attached_file_2 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/dog_with_cat.mp4')
    seed_vid_2.video.attach(io: attached_file_2, filename: 'dog_with_cat.mp4')

seed_vid_3 = Video.create!({description: "Doggo in stairs", creator_id: user_3.id, view_count: 68 })
    attached_file_3 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/doggo_in_stairs.mp4')
    seed_vid_3.video.attach(io: attached_file_3, filename: 'doggo_in_stairs.mp4')

seed_vid_4 = Video.create!({description: "Snoot challenge", creator_id: user_4.id, view_count: 77 })
    attached_file_4 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/snoot_challenege.mp4')
    seed_vid_4.video.attach(io: attached_file_4, filename: 'snoot_challenege.mp4')

seed_vid_5 = Video.create!({description: "Pup eating foot", creator_id: user_5.id, view_count: 206 })
    attached_file_5 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/pup_eating_foot.mp4')
    seed_vid_5.video.attach(io: attached_file_5, filename: 'pup_eating_foot.mp4')

seed_vid_1 = Video.create!({description: "Doggo in pool", creator_id: user_1.id, view_count: 124 })
    attached_file_1 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/dog_in_pool.mp4')
    seed_vid_1.video.attach(io: attached_file_1, filename: 'dog_in_pool.mp4')

seed_vid_6 = Video.create!({description: "Doggy with horse", creator_id: user_6.id, view_count: 38 })
    attached_file_6 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/doggy_with_horse.mp4')
    seed_vid_6.video.attach(io: attached_file_6, filename: 'doggy_with_horse.mp4')

seed_vid_7 = Video.create!({description: "This pup loves to sled", creator_id: user_7.id, view_count: 99 })
    attached_file_7 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/sledding_dog.mp4')
    seed_vid_7.video.attach(io: attached_file_7, filename: 'sledding_dog.mp4')

seed_vid_8 = Video.create!({description: "Say Hello", creator_id: user_8.id, view_count: 78 })
    attached_file_8 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/talking_dog.mp4')
    seed_vid_8.video.attach(io: attached_file_8, filename: 'talking_dog.mp4')

seed_vid_9 = Video.create!({description: "Just chillin", creator_id: demo_user.id, view_count: 257 })
    attached_file_9 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/chill_dog.mp4')
    seed_vid_9.video.attach(io: attached_file_9, filename: 'chill_dog.mp4')

like_1 = Like.create!({author_id: user_1.id, likeable_type: 'Video', likeable_id: seed_vid_1.id})
like_2 = Like.create!({author_id: user_2.id, likeable_type: 'Video', likeable_id: seed_vid_2.id})
like_3 = Like.create!({author_id: demo_user.id, likeable_type: 'Video', likeable_id: seed_vid_3.id})

comment_1 = Comment.create!({body: "First swim!!!", author_id: user_1.id, video_id: seed_vid_1.id})
comment_1 = Comment.create!({body: "Awwww", author_id: user_2.id, video_id: seed_vid_2.id})
comment_1 = Comment.create!({body: "Stuck again??", author_id: demo_user.id, video_id: seed_vid_3.id})