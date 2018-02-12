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

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
