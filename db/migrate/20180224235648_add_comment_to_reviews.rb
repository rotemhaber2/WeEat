class AddCommentToReviews < ActiveRecord::Migration[5.1]
  def change
    add_column :reviews, :comment, :string
  end
end
