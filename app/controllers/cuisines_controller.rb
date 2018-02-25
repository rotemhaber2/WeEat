class CuisinesController < ApplicationController

  # GET /cuisines.json
  def index
    render json: Cuisine.all
  end
end
