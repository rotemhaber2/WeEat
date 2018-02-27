Rails.application.routes.draw do
  # resources :restaurants do
  #   resources :reviews, only: [:index, :create]
  # end
  #
  #
  #
   resources :reviews
   resources :restaurants
  #
   resources :cuisines

  get '*path', to: 'application#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
