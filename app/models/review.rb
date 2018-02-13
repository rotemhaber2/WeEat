# == Schema Information
#
# Table name: reviews
#
#  id            :integer          not null, primary key
#  restaurant_id :integer
#  user_id       :integer
#  review        :string
#  stars         :integer
#  recommend     :boolean
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Review < ApplicationRecord

  validates_presence_of :restaurant
  validates_presence_of :user_id
  validates_presence_of :stars

  validates_length_of :name, :maximum => 70
  validates_length_of :review, :maximum => 500

  belongs_to :restaurant
  belongs_to :user



end
