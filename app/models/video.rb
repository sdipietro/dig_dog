# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  description :string
#  creator_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Video < ApplicationRecord
    validates :creator_id, presence: true

    has_one_attached :video

    belongs_to :user,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: :User

    # has_many :comments
    # has_many :likes
end
