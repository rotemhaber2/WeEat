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

  validates_presence_of :email
  validates_presence_of :user
  validates_presence_of :password
  validates_format_of :email, with: /\A[-a-z0-9_+\.]+\@([-a-z0-9]+\.)+[a-z0-9]{2,4}\z/i

  validates_length_of :email, :maximum => 70
  validates_length_of :user, :maximum => 70
  validates_length_of :first_name, :maximum => 70
  validates_length_of :last_name, :maximum => 70
  validates_length_of :phone_number, :maximum => 15
  validates_length_of :user, :maximum => 70
  validates_length_of :password, :maximum => 12, :minimum => 6

  has_many :reviews

end
