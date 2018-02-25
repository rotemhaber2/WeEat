
FactoryGirl.define do
  factory :review do
  user_name { Faker::Number.name }
  user_id { Faker::Number.digit }
  stars { Faker::Number.between(1, 5) }
  comment { Faker::Number.name }
  restaurant_id { Faker::Number.digit }
  end
end