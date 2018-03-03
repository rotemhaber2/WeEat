class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :address
      t.boolean :accepts_10_bis
      t.integer :cuisine_id
      t.boolean :kosher

      t.timestamps
    end
  end
end
