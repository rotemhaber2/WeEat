class ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :edit, :update, :destroy]

  # GET /reviews/1/edit
  def edit
  end

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
      params.require(:review).permit(:restaurant_id, :user_id, :user_name, :review, :stars, :recommend)
    end

end
