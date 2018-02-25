require 'rails_helper'

RSpec.describe ReviewsController, type: :controller do

  before do
    @restaurant = Restaurant.create(FactoryGirl.attributes_for(:restaurant))
  end

  describe 'Create new review' do
    it 'should create new review with valid params' do
      post :create, params: FactoryGirl.attributes_for(:review)
      expect(response).to have_http_status(:created)
    end
  end

end
