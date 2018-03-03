require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  describe 'Reviews' do
    it 'should calculate the average rating' do
      restaurant = create(:restaurant)
      expect(Restaurant.find(restaurant[:id]).rating).to  be_between(0, 5)
    end
  end
end