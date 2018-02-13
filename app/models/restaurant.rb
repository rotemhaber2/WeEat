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
#

class Restaurant < ApplicationRecord

  validates_presence_of :name
  validates_presence_of :address
  validates_presence_of :cuisine_id

  validates_length_of :name, :maximum => 70
  validates_length_of :address, :maximum => 140
  validates_length_of :cuisine_id, :maximum => 70

  has_many :reviews
  has_and_belongs_to_many :cuisines

end
