class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :update, :destroy]

  # GET /projects
  def index
    @projects = Project.all

    render json: @projects, include: :technologies
  end

  # GET /projects/1
  def show
    render json: @project
  end

  # POST /projects
  def create
    @project = Project.new(project_params)

    if @project.save
      render json: @project, status: :created, location: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /projects/1
  def update
    if @project.update(project_params)
      if params.has_key?(:technologies)
        puts 'wtf', params[:technologies]
        @project.technologies.clear
        params[:technologies].each do |i|
          puts 'llll', i
          @project.technologies << Technology.find(i)
        end
      end
      render json: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end


  # DELETE /projects/1
  def destroy
    @project.destroy
    render json: @project
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def project_params
      params.require(:project).permit(:name, :subtitle, :img_url, :site_url, :github_url, :technologies=>[])
    end
end
