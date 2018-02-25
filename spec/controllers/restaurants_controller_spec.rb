require 'rails_helper'

RSpec.describe RestaurantsController, type: :controller do

  describe 'Create new restaurant' do
    it 'create a restaurant with valid parameters' do
      post :create, params: FactoryGirl.attributes_for(:restaurant)
      expect(response).to have_http_status(:created)
    end

    it 'fail when create a restaurant with missing address' do
      post :create, params: FactoryGirl.attributes_for(:invalid_restaurant)
      expect(response).to have_http_status(:unprocessable_entity)
      end

    end

  describe "GET #index" do
    it "get array of restaurants" do
      get :index
      expect(response).to have_http_status(:ok)
    end

    it "renders the :index view" do
      get :index, params:  FactoryGirl.attributes_for(:restaurant)
      expect(response).to have_http_status(:ok)
    end
  end

  describe "GET #show" do
    it "get valid rating of a restaurant" do
      restaurant = FactoryGirl.attributes_for(:restaurant)
      get :show,   params: { id: restaurant[:id] }
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)["rating"]).to be_between(1, 5)
    end
  end


end
