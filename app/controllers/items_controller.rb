class ItemsController < ActionController::API
  def search
    test = params[:value].to_i
    if test == 9
      send = '美味しい'
    else
      send = 'ビミョい'
    end
    message = "OK"
    render json: { message: message, test: send }
  end
end
