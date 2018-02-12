# == Schema Information
#
# Table name: users
#
#  id           :integer          not null, primary key
#  user         :string
#  password     :string
#  first_name   :string
#  last_name    :string
#  email        :string
#  phone_number :string
#  is_admin     :boolean
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
