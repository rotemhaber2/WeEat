# == Schema Information
#
# Table name: reviews
#
#  id            :integer          not null, primary key
#  restaurant_id :integer
#  user_id       :integer
#  comment        :string
#  stars         :integer
#  recommend     :boolean
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  user_name     :string
#

class Review < ApplicationRecord

  after_create :update_restaurant_rating

  validates_presence_of :restaurant_id
  validates_presence_of :user_id
  validates :stars, presence: true, :inclusion => 1..5

  validates_length_of :user_name, :maximum => 70
  validates_length_of :comment, :maximum => 500

  belongs_to :restaurant

  def update_restaurant_rating
    restaurant.update_rating
  end

end
