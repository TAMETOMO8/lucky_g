class ItemsController < ActionController::API
  def search
    results = RakutenWebService::Ichiba::Item.search(keyword: 'ゴリラ フィギュア')
    render json: { results: results }
  end
end
