json.extract! restaurant, :id, :name, :address, :accepts_10_bis, :cuisine_id, :kosher, :created_at, :updated_at
json.url restaurant_url(restaurant, format: :json)
