var links_refresh = function() {
  var server = $("#server").val();
  var $tl = $(".test-link");
  $tl.each(function(i){

    var that = $tl.eq(i)
      , url = server + ":" + that.data("port") + that.data("path");
    that.attr("href", url);

    (function(u, t){
      $.ajax({url: u,
              dataType: 'jsonp',
              timeout:2000})
      .done(function(data) {

        if(data == "object is undefined" || data ==  "mp not available"){
          t.css('color', '#04496E');
        }else{
          t.css('color', '#AE9E00');
        }
      })
      .fail(function() {
        t.css('color', '#A00025');
      })
      .always(function() {
      });
    })(url, that)
  })
}
var button_refresh  = function() {
  var server = $("#server").val();
  var $btn   = $(".test-btn");
  $btn.each(function(i){
    var that = $btn.eq(i)
      , url = server + ":" + that.data("port") + that.data("path");
    that.attr("href", url);
    (function(u, t){
      $.ajax({url: u,
              dataType: 'jsonp',
              timeout:2000})
      .done(function(data) {

        if(data == "object is undefined"){
          that.html("load");
          that.removeClass("remove");
          that.addClass("load");
        }else{
          that.html("unload");
          that.removeClass("load");
          that.addClass("remove");
        }
      })
      .fail(function() {
      })
      .always(function() {
      });
    })(url, that)
  })
}

var button_click = function(that){
  var id     = that.attr("id")
    , server = $("#server").val()
    , conf   = {type: "PUT"
              , "processData": false
              , "contentType": "application/json"
              , url: server + ":8001/" + id }

  if(that.hasClass("load")){
    conf.data = JSON.stringify({cmd:"load"})
  }

  if(that.hasClass("remove")){
    conf.data =  JSON.stringify({cmd:"remove"})
  }
  $.ajax(conf)
  .done(function(data) {

  })
  .fail(function() {

  })
  .always(function() {
    button_refresh();
  });
};
