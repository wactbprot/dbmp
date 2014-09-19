var get_replace = function(elemid, url, selfn){
  $.ajax({url:url,
          cache: false}).done(function(html){

    var $elem = $("#" + elemid);
    var $html = $(html);
    $html.attr("id", elemid);
    $elem.off("change");
    $html.on("change", selfn);
    $elem.replaceWith($html)
  })
}
var get_append = function(elemid, url, selfn){
  $.ajax({url:url,
          cache: false}).done(function(html){

    var $elem = $("#" + elemid);
    var $html = $(html);

    $html.attr("id", elemid);
    $elem.empty().append($html)
  })
}


var data = function(){
  var d = {};
  return {
    get:function(e){
      if(e)
      return d[e]
      else{
        return d;
      }
    },
    set:function(e){
      d[e] = $("#" + e + " option:selected" ).val();
    }
  }
}

$(document).ready(function() {
  var D = data();

  $("#show").on("click", function(){

    console.log(D.get())
  })

  var s = "document"
    , u ="_list/html_select/mpdocs";

  get_replace(s, u, function(){
    D.set("document")
    var s = "container"
      , u =  "_list/html_select/container?key=\"" + D.get("document") + "\"";
    get_replace(s, u , function(){
      D.set("container")
    });
  });

  s = "task";
  u = "_list/html_select/task_select";
  get_replace(s, u, function(){
    D.set("task");
    var s = "use_key"
      , u =  "_list/html_select/task_use_key?key=\"" + D.get("task") + "\"";
    get_replace(s, u , function(){
      D.set("use_key")
      var s = "use_value"
        , u =  "_list/html_select/task_use_value?key=\""
            + D.get("task")
            + "_"
            + D.get("use_key")
            + "\"";
      get_replace(s, u , function(){
        D.set("use_value");
        var s = "replace"
          , u = "_list/html_inputs/task_replace?key=\"" + D.get("task") + "\"";
        get_append(s,u)
      });
    });
  });

});