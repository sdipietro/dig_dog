# json.extract! video, :id, :description, :creator_id
# json.videoUrl url_for(video.video)debugger
# debugger
json.extract! video, :id, :description, :creator_id, :comment_ids, :like_ids
json.videoUrl url_for(video.video)
json.user video.user.username
json.viewCount video.view_count
# debugger


# empty = {}
# if video.comments.length > 0
#     json.comments do
#         video.comments.each do |comment|
#             json.set! comment.id do
#                 json.partial! '/api/comments/comment', comment: comment
#             end
#         end
#     end
# else
#     json.comments empty
# end

# if video.likes.length > 0
#     json.likes do 
#         @video.likes.each do |like|
#             json.set! like.id do 
#                 json.partial!('/api/likes/like', like: like)
#             end
#         end 
#     end
# else
#     json.likes empty
# end