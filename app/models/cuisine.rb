# == Schema Information
#
# Table name: cuisines
#
#  id         :integer          not null, primary key
#  name       :string
#  icon       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Cuisine < ApplicationRecord

  validates_presence_of :name

  validates_length_of :name, :maximum => 70

  has_and_belongs_to_many :restaurants

end
