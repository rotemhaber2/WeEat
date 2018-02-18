class RestaurantsController < ApplicationController
  before_action :set_restaurant, only: [:show, :edit, :update, :destroy]

  # GET /restaurants.json
  def index
    render json: Restaurant.all
  end

  # GET /restaurants/1.json
  def show
    @restaurant.rating = @restaurant.reviews.average(:stars)

  end

  # GET /restaurants/new
  def new
    @restaurant = Restaurant.new
  end

  # GET /restaurants/1/edit
  def edit
  end

  # POST /restaurants.json
  def create
    @restaurant = Restaurant.new(restaurant_params)

      if @restaurant.save
        render :show, status: :created, location: @restaurant
      else
        render json: @restaurant.errors, status: :unprocessable_entity
      end

  end

  # PATCH/PUT /restaurants/1.json
  def update
      if @restaurant.update(restaurant_params)
        render :show, status: :ok, location: @restaurant
      else
        render json: @restaurant.errors, status: :unprocessable_entity
      end
  end

  # DELETE /restaurants/1.json
  def destroy
    @restaurant.destroy
      head :no_content

  end

  private

    def set_restaurant
      @restaurant = Restaurant.find(params[:id])
    end

    def restaurant_params
      params.require(:restaurant).permit(:name, :address, :delivery_time, :accepts_10_bis, :cuisine_id, :kosher)
    end


end
