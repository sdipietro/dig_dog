# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Video.destroy_all
User.destroy_all

demo_user = User.create!(username: 'Demo User', password: 'demopassword', email: 'demo@dig-dog.com')

test_user = User.create!({username: "test", password: "12345678", email: "test@gmail.com"})

seed_vid_1 = Video.create!({description: "Doggo in pool", creator_id: test_user.id, view_count: 0 })
attached_file_1 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/dog_in_pool.mp4')
seed_vid_1.video.attach(io: attached_file_1, filename: 'dog_in_pool.mp4')

seed_vid_2 = Video.create!({description: "Dog with cat", creator_id: test_user.id, view_count: 0 })
attached_file_2 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/dog_with_cat.mp4')
seed_vid_2.video.attach(io: attached_file_2, filename: 'dog_with_cat.mp4')

seed_vid_3 = Video.create!({description: "Doggo in stairs", creator_id: test_user.id, view_count: 0 })
attached_file_3 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/doggo_in_stairs.mp4')
seed_vid_3.video.attach(io: attached_file_3, filename: 'doggo_in_stairs.mp4')

seed_vid_4 = Video.create!({description: "Snoot challenge", creator_id: test_user.id, view_count: 0 })
attached_file_4 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/snoot_challenege.mp4')
seed_vid_4.video.attach(io: attached_file_4, filename: 'snoot_challenege.mp4')

seed_vid_5 = Video.create!({description: "Pup eating foot", creator_id: test_user.id, view_count: 0 })
attached_file_5 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/pup_eating_foot.mp4')
seed_vid_5.video.attach(io: attached_file_5, filename: 'pup_eating_foot.mp4')

seed_vid_6 = Video.create!({description: "Doggy with horse", creator_id: test_user.id, view_count: 0 })
attached_file_6 = open('https://dig-dog-seeds.s3.us-east-2.amazonaws.com/doggy_with_horse.mp4')
seed_vid_6.video.attach(io: attached_file_6, filename: 'doggy_with_horse.mp4')