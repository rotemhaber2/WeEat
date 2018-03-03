require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  describe 'Reviews' do
    it 'should calculate the average rating' do
      restaurant = create(:restaurant)
      reviews = FactoryGirl.create_list(:review, 3, restaurant_id: restaurant.id)
      updated_rest = Restaurant.find(restaurant.id)
      rating = Review.where(restaurant_id: restaurant.id).average(:stars).to_f.round
      expect(updated_rest.rating).to eq(rating)
    end
  end
end