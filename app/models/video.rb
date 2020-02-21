# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  description :string
#  creator_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  view_count  :integer          not null
#

class Video < ApplicationRecord
    validates :creator_id, :view_count, presence: true

    validate :ensure_video

    has_one_attached :video

    belongs_to :user,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: :User

    has_many :likes, as: :likeable
    has_many :comments

    def ensure_video
        unless self.video.attached?
            errors[:session] << "Must be attached"
        end
    end
end
