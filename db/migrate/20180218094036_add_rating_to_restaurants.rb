class AddRatingToRestaurants < ActiveRecord::Migration[5.1]
  def change
    add_column :restaurants, :rating, :real
  end
end
