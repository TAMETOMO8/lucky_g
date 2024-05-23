class ItemsController < ActionController::API
  def search
    keyword_value = params[:value].to_i
    set_word(keyword_value)
    results = RakutenWebService::Ichiba::Item.search(keyword: @keyword)
    render json: { results: results ,fortune_text: @fortune_text}
  end

  private

  def set_word(keyword_value)
    if keyword_value == 3
      @keyword = 'ゴリラ フィギュア'
      @fortune_text = '今日の運勢は・・・ゴリ吉!'
    elsif keyword_value == 4
      @keyword = 'ゴルゴ13'
      @fortune_text = '今日の運勢は・・・ゴル吉!'
    elsif keyword_value == 5
      @keyword = '悟空'
      @fortune_text = '今日の運勢は・・・ごく吉!'
    elsif keyword_value == 6
      @keyword = '五条悟'
      @fortune_text = '今日の運勢は・・・ごじょ吉!'
    elsif keyword_value == 7
      @keyword = 'ギドラ'
      @fortune_text = '今日の運勢は・・・ギド吉!'
    elsif keyword_value == 8
      @keyword = 'ゴーイングメリー'
      @fortune_text = '今日の運勢は・・・ゴー吉!'
    elsif keyword_value == 9
      @keyword = 'ゴジラ'
      @fortune_text = '今日の運勢は・・・ゴジ吉!'
    end
  end
end
