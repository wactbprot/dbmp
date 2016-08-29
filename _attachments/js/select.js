(function () {
  var diagramm = document.getElementById('diagramm');

  var mkStdMenue = function(cals){
    var stdstr = "<select id='standard'>"
      , a = {}
      , N = cals.length
    for(var i = 0; i <  N; i++){
      var cal = cals[i]
      if(!a[cal.key]){
        a[cal.key] = true;
        stdstr += "<option value='" + cal.key +"'>"+cal.key.replace("-", " ")    + "</option>"
      }
    }
    stdstr  += "</select>"
    $("#standard").replaceWith(stdstr)
    $("#standard").change(function(){
      $.ajax({url:"_view/calibrations",
              data:{key:'"' + $(this).val() + '"'} }).done(function(res) {
        var cals =  JSON.parse(res).rows
        mkCalsMenue(cals);
      });
    });
  }

  var mkCalsMenue = function(cals){
    var calstr = "<select id='calibration'>"
      , N = cals.length
      , a = {}
    for(var i = 0; i <  N; i++){
      var cal = cals[i]
        , val = cal.value;
      calstr += "<option value='" + cal.id +"'>"  +  val.Certificate
              + " " + val.Issue
              + " " + val.Customer
              + " " + val.Device
              + " " + val.ToDoType
              + "</option>"
    }
    calstr  += "</select>"
    $("#calibration").replaceWith(calstr)
  }


  $.ajax({url:"_view/calibrations"         }).done(function(res) {
    var cals =  JSON.parse(res).rows
    mkStdMenue(cals);
    mkCalsMenue(cals);

  });

  $("#standard").change(function(){
    console.log("öööööÖÖÖÖÖÖÖÖÖÖÖÖ" );
  });

})();
