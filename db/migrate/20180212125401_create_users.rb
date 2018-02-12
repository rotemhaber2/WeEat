class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :user
      t.string :password
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone_number
      t.boolean :is_admin

      t.timestamps
    end
  end
end
