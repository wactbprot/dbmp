(function () {
  var diagramm = document.getElementById('diagramm')
    , options  = {
      xaxis:{scaling: 'logarithmic'} // => Scaling, can be 'linear' or 'logarithmic'
    }
    , data     = [];

  $("#newbtn").click(function(){
    draw(false);
  });
  $("#addbtn").click(function(){
    draw(true);
  });

  var draw = function(add){
    var id       = $("#calibration").val()
      , xregion  = $("#yregion").val()
      , xquant   = $("#xquant").val()
      , xtype    = $("#xtype").val()
      , yregion  = $("#yregion").val()
      , yquant   = $("#yquant").val()
      , ytype    = $("#ytype").val()

    var req = {url:"_show/data/" + id,
               data:{x: [xregion, xquant, xtype].join(":"),
                     y:[yregion, yquant, ytype].join(":")}
              }
    $.ajax(req).done(function(res) {
      var o = JSON.parse(res)
      if(o.error){
        alert(o.reason);
      }else{
        if(add){
          data.push(o);
        }else{
          data = [o];
        }
        console.log(data)
        Flotr.draw(diagramm, data, options);
      }
    });
  }
})();