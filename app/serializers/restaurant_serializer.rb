class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :delivery_time, :accepts_10_bis, :cuisine_id, :kosher, :rating
end
