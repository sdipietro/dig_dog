class Api::VideosController < ApplicationController
  def index
    @videos = Video.all
    @comments = Comment.all
    @likes = Like.all
    render :index
  end

  def show
    @video = Video.find(params[:id])
    @video.view_count += 1
    render :show
  end

  def create
    @video = Video.new(video_params)
    @video.view_count = 0
    # @video.creator_id = current_user.id

    if @video.save
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
    params.require(:video).permit(:video, :description, :creator_id, :view_count)
  end
end