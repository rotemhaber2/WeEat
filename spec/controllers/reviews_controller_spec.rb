require 'rails_helper'

RSpec.describe ReviewsController, type: :controller do

  describe 'Create new review' do
    it 'should create new review with valid params' do
      restaurant = create(:restaurant)
      review = create(:review, restaurant_id: restaurant.id)
      expect(Restaurant.find(restaurant.id).rating).to eq(review.stars)
    end
  end

end
