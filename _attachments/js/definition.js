var go = function(mpid){
  var $container = $("#container");



  $.ajax({url:"../../_list/html/container?key=\"" + mpid +"\""})
  .done(function(html){
    var $html =$(html);

    $container.replaceWith($html);

  })
}