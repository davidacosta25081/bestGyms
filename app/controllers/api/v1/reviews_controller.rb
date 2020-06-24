module Api::V1
  class ReviewsController < ApplicationController
    
   
    def index 
      reviews = Review.all	
      render json: reviews
    end    



    def create 
      review = Review.new(review_params)
    
      if review.save   
        render json: review    
      else 
        render json: { error: review.errors.messages }, status: 422  
      end
    end
   
    def destroy 
      review = Review.find(params[:id])	
       
      if review.destroy
        head :no_content
      else 
        render json: { error: review.errors.messages }, status: 422   
      end 
    end


    private 


    
    def review_params 
      params.require(:review).permit(:title, :description, :score, :gym_id)	
    end  
     



  end 
end   