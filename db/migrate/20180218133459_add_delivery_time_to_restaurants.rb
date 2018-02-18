class AddDeliveryTimeToRestaurants < ActiveRecord::Migration[5.1]
  def change
    add_column :restaurants, :delivery_time, :integer
  end
end
