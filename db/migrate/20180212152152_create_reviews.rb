class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :restaurant_id
      t.integer :user_id
      t.string :comment
      t.integer :stars
      t.boolean :recommend

      t.timestamps
    end
  end
end
