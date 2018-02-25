FactoryGirl.define do
    factory  :invalid_restaurant, parent: :restaurant do
      address nil
    end
  end
