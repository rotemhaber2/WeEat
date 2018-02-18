class CuisineController < ApplicationController

  def index
    render json: Cuisine.all
  end
end
