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
end
