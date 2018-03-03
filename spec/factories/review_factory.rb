
FactoryGirl.define do
  factory :review do
  user_name { Faker::Name.name }
  user_id { Faker::Number.digit }
  stars { Faker::Number.between(1, 5) }
  comment { Faker::Name.name }
  end
end