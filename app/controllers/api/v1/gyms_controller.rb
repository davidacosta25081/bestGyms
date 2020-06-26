
module Api::V1
  class GymsController < ApplicationController
    
    
    def index 
      gyms = Gym.all 
      render json: gyms 
    end 	

    def show 
    
    gym = Gym.find_by(slug: params[:slug])
    render json: gym 
    end   

    def create 
      gym = Gym.new(gym_params)

      if gym.save 
        render json:gym 
      else 
        render json: {error: gym.errors.messages}, status:422
      end 
    end 
    

    def update 
      gym = Gym.find_by(slug: params[:slug])

      if gym.update(gym_params) 
        render json:gym 
      else 
        render json: {error: gym.errors.messages}, status:422
      end 
    end 
    
  
    def destroy 
      gym = Gym.find_by(slug: params[:slug])
      if 
        gym.destroy
        head :no_content
      else 
        render json: {error: gym.errors.messages}, status: 422
      end 
    end   

  
    private  


     def gym_params 
       params.require(:gym).permit(:name, :image_url, :description)  
     end  




  end 
end 