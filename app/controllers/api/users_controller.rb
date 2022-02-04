class Api::UsersController < ApplicationController
  def index
    @user = Comment.all

    render :json => @user    
  end
end