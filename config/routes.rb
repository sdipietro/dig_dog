Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create, :update, :index]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:create, :index, :show, :destroy]
    resources :likes, only: [:show, :index, :create, :destroy]
    resources :comments, only: [:show, :index, :create, :destroy]
    resources :follows, only: [:show, :index, :create, :destroy]
  end

  root "static_pages#root"
end
