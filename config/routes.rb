Rails.application.routes.draw do
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data

<<<<<<< HEAD
    get '/data', to: 'users#index'   
    get '/recipes', to: 'recipes#index'
=======
    get '/users', to: 'users#index'   
    get '/recipes', to: 'recipes#index'   
>>>>>>> master
    
    resources :dogs

  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
