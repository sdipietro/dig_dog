class Api::VideosController < ApplicationController
  def index
    @videos = Video.all
    render :index
  end

  def show
    @video = Video.find(params[:id])
    render :show
  end

  def create
    @video = Video.new(video_params)
    @video.creator_id = current_user.id

    if @video.update(post_params)
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def destroy
    @video = current_user.videos.find(params[:id])
    
    if @video.destroy
      render :show
    else
      render json: @video.errors.full_messages, status: 404
    end
  end

  private

  def video_params
    params.require(:video).permit(:video, :description, :creator_id)
  end
end