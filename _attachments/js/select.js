(function () {
  var diagramm = document.getElementById('diagramm');

  var mkStdMenue = function(cals){
    var stdstr = "<select id='standard'>" + "<option></option>"
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
    $("#standard");
    $("#standard").replaceWith(stdstr)
    $("#standard").change(function(){
      $.ajax({url:"_view/calibrations",
              data:{key:'"' + $(this).val() + '"'} }).done(function(res) {
        var cals =  res.rows
        mkCalsMenue(cals);
      });
    });
  }

  var mkCalsMenue = function(cals){
    var calstr = "<select id='calibration'>"
      , N = cals.length
      , a = {};
    calstr += "<option></option>"
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

    $("#calibration").replaceWith(calstr);
    $("#calibration").change(function(){
      $.ajax({url:"../../" +  $(this).val()}).done(function(res) {
        var cal = res
          , calc = cal.Calibration
        if(calc.Measurement && !calc.Analysis ){
          $("#xregion").replaceWith(
            "<select id='xregion'>" +
              "<option value='Measurement'>Measurement</option>" +
              "</select>"
          );
          $("#yregion").replaceWith(
            "<select id='yregion'>" +
              "<option value='Measurement'>Measurement</option>" +
              "</select>"
          );
          mkQuantMenue(cal, "Measurement", "x");
          mkQuantMenue(cal, "Measurement", "y");
        }else{
          $("#xregion").replaceWith(
            "<select id='xregion'>" +
              "<option value='Analysis'>Analysis</option>" +
              "<option value='Measurement'>Measurement</option>" +
              "</select>"
          );
          $("#yregion").replaceWith(
            "<select id='yregion'>" +
              "<option value='Analysis'>Analysis</option>" +
              "<option value='Measurement'>Measurement</option>" +
              "</select>"
          );
          mkQuantMenue(cal, "Analysis", "x");
          mkQuantMenue(cal, "Analysis", "y");
        }

        $("#xregion").change(function(){
          mkQuantMenue(cal, $("#xregion").val(), "x");
        });
        $("#yregion").change(function(){
          mkQuantMenue(cal, $("#yregion").val(), "y");
        });
      });
    });
  }


  var mkQuantMenue = function(cal, region, dim){
    if(cal.Calibration[region]){
      var  quantid = dim + "quant";
      var R = cal.Calibration[region].Values;
      var rstr =  "<select id='" + quantid + "'>"
      rstr += "<option></option>"
      for(var q in R){
        rstr += "<option value='" + q +"'>"  + q  + "</option>"
      }
      rstr  += "</select>";
      ;
      $("#" + quantid).replaceWith(rstr);
      $("#" + quantid).change(function(){
        var quant = $("#" + quantid).val();
        mkTypeMenue(cal, region, quant, dim);
      });
    }
  }

  var mkTypeMenue = function(cal, region, quant, dim){

    if(cal.Calibration[region]
     && cal.Calibration[region].Values[quant]){

      var Q = cal.Calibration[region].Values[quant]
        , typeid =  dim + "type";
      var rstr =  "<select id='" + typeid + "'>";
      rstr += "<option></option>";
      if(Q.Type){
        rstr += "<option value='" + Q.Type +"'>"  + Q.Type + "</option>"
      }else{
        for(var t =0; t < Q.length; t++){
          rstr += "<option value='" + Q[t].Type +"'>"  + Q[t].Type + "</option>"
        }
      }
      rstr  += "</select>";
      $("#" + typeid).replaceWith(rstr);
    }
  }

  // initial request
  $.ajax({url:"_view/calibrations"}).done(function(res) {
    var cals = res.rows
    mkStdMenue(cals);
    mkCalsMenue(cals);
  });

})();
