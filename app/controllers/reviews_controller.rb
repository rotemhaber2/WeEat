class ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :edit, :update, :destroy]


  # GET /reviews/new
  def new
  end

  # GET /reviews/1/edit
  def edit
  end

  # POST /reviews
  # POST /reviews.json
  def create
    @review = Review.new(review_params)
    if @review.save
      render :show, status: :created, location: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/1
  # PATCH/PUT /reviews/1.json
  def update
      if @review.update(review_params)
        render :show, status: :ok, location: @review
      else
        render json: @review.errors, status: :unprocessable_entity
      end
  end

  # DELETE /reviews/1.json
  def destroy
    @review.destroy
      head :no_content
  end

  private
    def set_review
      @review = Review.find(params[:id])
    end

    def review_params
      params.permit(:restaurant_id, :user_id, :user_name, :comment, :stars, :recommend)
    end

end
