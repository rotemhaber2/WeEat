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
end