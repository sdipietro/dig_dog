Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resource :video, only: [:create, :index, :show]
  end

  # resources :videos, only: :show

  root "static_pages#root"
end
