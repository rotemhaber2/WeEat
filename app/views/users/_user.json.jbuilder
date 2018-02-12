json.extract! user, :id, :user, :password, :first_name, :last_name, :email, :phone_number, :is_admin, :created_at, :updated_at
json.url user_url(user, format: :json)
