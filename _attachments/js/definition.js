var get_replace = function(elemid, url, selfn, cb){
  $.ajax({url:url,
          cache: false}).done(function(html){

    var $elem = $("#" + elemid);
    var $html = $(html);
    $html.attr("id", elemid);
    $elem.off("change");
    $html.on("change", selfn);
    $elem.replaceWith($html)
    if(cb){
      cb()
    }
  })
}
var get_append = function(elemid, url, selfn, cb){
  $.ajax({url:url,
          cache: false}).done(function(html){

    var $elem = $("#" + elemid);
    var $html = $(html);

    //$html.attr("id", elemid);
    $elem.empty().append($html)

  }).done(function(){

    if(cb){
      cb()
    }
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
    set:function(e,v){
      d[e] = v;
    }
  }
}
var read_replace = function(id){
  var $elem = $("#replace")
    , $keys = $elem.children(".key")
    , $vals = $elem.children(".value")
    , r ={};

  for(var i = 0; i < $keys.length; i++){
      
    var k = $keys.eq(i).val()
      , v = $vals.eq(i).val()
      if(k && k !== "" && v && v !== ""){
	  r[k] = v;
      }
  }
  return r;
}

var preview = function(D, R){
  $("#path").val(
    D.get("document")
                 + "."
                 + D.get("container")
                 + "."
                 + D.get("step")
  )

  var def = {"TaskName":D.get("TaskName")}
    , uk = D.get("use_key")
    , uv = D.get("use_value")


  if(uk && uk !== ""){
    def.Use = {};
    def.Use[uk] = uv;
  }

  def.Replace =  read_replace();

  $("#definition").val(JSON.stringify(def,null,2))

  return def;
};


$(document).ready(function() {
  var D = data();

  $("#show").on("click", function(){
    var def = preview(D)
      , url = "../../"+D.get("document");

    $.ajax({url:url,
            cache: false}).done(function(mpdoc){
      var doc = JSON.parse(mpdoc)
        , c = parseInt(D.get("container"),10)
        , s = parseInt(D.get("step"),10)
      if(doc.Mp &&
         doc.Mp.Container &&
         doc.Mp.Container[c] &&
         doc.Mp.Container[c].Definition[s]){

        var dmcd = doc.Mp.Container[c].Definition[s]
          , cr = confirm("push: "
                        + JSON.stringify(def,null,2)
                        + "in here: "
                        + JSON.stringify(dmcd,null,2))
        if(cr === true){
          doc.Mp.Container[c].Definition[s].push(def);

          $.ajax({
            type: "PUT",
            url: url,
            contentType: "application/json",
            data: JSON.stringify(doc)
          });
        }
      }
  })
})

  $("#replace_ready").on("click", function(){
    preview(D);
  })

  // Pfad
  get_replace("document"
             , "_list/html_select/mpdocs"
             , function(){
                 D.set("document",  $("#document option:selected" ).val())

                 get_replace("container"
                            , "_list/html_select/container?key=\""
                            + D.get("document")
                            + "\""
                            , function(){
                                D.set("container",  $("#container option:selected" ).val());

                                get_replace("step"
                                           , "_list/html_select/step?key=\""
                                           + D.get("document")
                                           + "_"
                                           +  D.get("container")
                                           +"\""
                                           , function(){
                                               D.set("step",  $("#step option:selected" ).val());
                                               preview(D)
                                             },   function(){preview(D)})
                              },   function(){preview(D)});
               },   function(){preview(D)});
  // Inhalt
  get_replace("task"
             , "_list/html_select/task_select"
             , function(){
                 D.set("TaskName",$("#task option:selected" ).val());

                 //http://localhost:5984/mp_db/_design/dbmp/_view/task_replace?
                 //group_level=3&startkey=[%22CE3_SIG-read_out%22,%20%22@aaa%22,%22aaa%22]
                 //&endkey=[%22CE3_SIG-read_out%22,%20%22@zzz%22,%22zzz%22]get_replace("use_key"
                 get_replace("use_key"
                            , "_list/html_select/task_use_key?key=\""
                            + D.get("TaskName")
                            + "\""
                            , function(){
                                D.set("use_key",  $("#use_key option:selected" ).val())
                                get_replace("use_value"
                                           , "_list/html_select/task_use_value?key=\""
                                           + D.get("TaskName")
                                           + "_"
                                           + D.get("use_key")
                                           + "\""
                                           , function(){
                                               D.set("use_value", $("#use_value option:selected" ).val());
                                               preview(D)
                                             });
                              },   function(){preview(D)})

                 get_append("replace"
                           , "_list/html_inputs/task_replace?group_level=3&startkey=\[\""
                           + D.get("TaskName")
                           + "\"\,\"@aaaa\"\,\"aaaa\"\]&endkey=\[\""
                           + D.get("TaskName")
                           + "\"\,\"@zzzz\"\,\"zzzz\"\]"
                           , function(){
                               preview(D)
                             },   function(){});
               },   function(){preview(D)});

});
