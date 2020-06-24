Rails.application.routes.draw do
 
 root  'pages#index'

   namespace :api do 
     namespace :v1 do 
     	resources :gyms, param: :slug 
     	resources :reviews, only: [:index, :create, :destroy]
    end  
   end  	



get '*path', to: 'pages#index', via: :all



end
