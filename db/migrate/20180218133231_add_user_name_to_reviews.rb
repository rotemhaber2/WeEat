class AddUserNameToReviews < ActiveRecord::Migration[5.1]
  def change
    add_column :reviews, :user_name, :string
  end
end
