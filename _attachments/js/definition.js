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

  // Pfad
  get_replace("document"
             , "_list/html_select/mpdocs"
             , function(){
                 D.set("document")

                 get_replace("container"
                            , "_list/html_select/container?key=\""
                            + D.get("document")
                            + "\""
                            , function(){
                                D.set("container")
                              });
               });
  // Inhalt
  get_replace("task"
             , "_list/html_select/task_select"
             , function(){
                 D.set("task");

                 get_append("replace"
              ,"_list/html_inputs/task_replace?key=\"" + D.get("task") + "\"")

                 get_replace("use_key"
                            , "_list/html_select/task_use_key?key=\"" + D.get("task") + "\""
                            , function(){
                                D.set("use_key")
                                get_replace("use_value"
                                           , "_list/html_select/task_use_value?key=\""
                                           + D.get("task")
                                           + "_"
                                           + D.get("use_key")
                                           + "\""
                                           , function(){
                                               D.set("use_value");
                                             });
                              });
               });

});