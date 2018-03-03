# == Schema Information
#
# Table name: restaurants
#
#  id             :integer          not null, primary key
#  name           :string
#  address        :string
#  accepts_10_bis :boolean
#  cuisine_id     :integer
#  kosher         :boolean
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  delivery_time  :integer
#  rating         :float
#

class Restaurant < ApplicationRecord

  validates :name, presence: true, length: { maximum: 70 }
  validates :address, presence: true, length: { maximum: 140 }
  validates :cuisine_id, presence: true,  length: { maximum: 70 }
  validates :delivery_time, :inclusion => 1..180

  has_many :reviews
  has_and_belongs_to_many :cuisines

  def update_rating
    update_attribute(:rating, reviews.average(:stars).to_f.round)
  end

end
