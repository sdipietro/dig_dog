class Api::VideosController < ApplicationController
  def index
    @videos = Video.all
    render :index
  end

  # def show
  #   @video = Video.find(params[:id])
  #   render :show
  # end

  # def create
  #   @video = Video.new(video_params)
  #   @video.creator_id = current_user.id
  #   @video.save ? render :show : render json: @video.errors.full_messages, status: 422
  # end

  private

  def video_params
    params.require(:video).permit(:video, :description, :creator_id)
  end
end