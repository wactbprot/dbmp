var links_refresh = function() {
  var server = $("#server").val();
  var $tl = $(".test-link");
  $tl.each(function(i){

    var that = $tl.eq(i)
      , url = server + ":" + that.data("port") + that.data("path");
    that.attr("href", url);

    (function(u, t){
      $.ajax({url: u,
              timeout:2000})
      .done(function(data) {

        if(data == "object is undefined" || data ==  "mp not available"){
          t.css('color', '#FCFCFC');
          t.parent().css('background-color', '#04496E'); // maybe
        }else{
          t.css('color', '#FCFCFC');
          t.parent().css('background-color', '#AE9E00'); // ok
        }
      })
      .fail(function() {
        t.css('color', '#FCFCFC');
        t.parent().css('background-color', '#A00025'); // error

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
              timeout:2000})
      .done(function(data) {

        if(data == "object is undefined"){
          that.html("load");
          that.removeClass("remove");
          that.addClass("load");
        }else{
          that.html("remove");
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
    , conf   = {type: "PUT", url: server + ":8001/" + id }

  if(that.hasClass("load")){
    conf.data = "load"
  }

  if(that.hasClass("remove")){
    conf.data = "remove"
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
