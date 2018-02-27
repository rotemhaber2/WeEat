
FactoryGirl.define do
  factory :restaurant do
    id { '1' }
  name { Faker::Name.name }
  address { Faker::Address.full_address }
  accepts_10_bis { Faker::Boolean.boolean }
  delivery_time { Faker::Number.between(30, 120) }
  cuisine_id { Faker::Number.digit }
  end
end