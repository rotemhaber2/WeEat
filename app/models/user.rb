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

class User < ApplicationRecord

  has_many :reviews

end
