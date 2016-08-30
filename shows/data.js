// http://localhost:5984/vl_db/_design/dbmp/_show/plotdata/cal-2016-ce3-kk-75013_0001?x=Analysis:Pressure:ind&y=Analysis:Error:relative
function (doc, req) {
  var x, y, RX, RY, ret;
  if(doc && doc.Calibration){
    var dc = doc.Calibration
      , id = doc._id;
    if(req.query.x){
      x = req.query.x;
    }else{
      x = "Analysis:Pressure:ind"
    }

    if(req.query.y){
      y = req.query.y;
    }else{
      y = "Analysis:Error:relative"
    }

    x = x.split(":")
    y = y.split(":")

    var xsource = x[0]
      , ysource = y[0]
      , xquant  = x[1]
      , yquant  = y[1]
      , xtype   = x[2]
      , ytype   = y[2]


    if(x.length == 3 && y.length == 3){
      if(dc[xsource] &&
         dc[xsource]["Values"][xquant] &&
         dc[xsource]["Values"][xquant]&&
         dc[ysource] &&
         dc[ysource]["Values"][yquant] &&
         dc[ysource]["Values"][yquant]){
        var X = dc[xsource]["Values"][xquant]
          , Y = dc[ysource]["Values"][yquant]

        // X
        if( Object.prototype.toString.call( X ) === '[object Array]' ) {
          var NX = X.length;
          for(var i = 0; i < NX; i++){
            if(X[i].Type == xtype){
              RX = X[i];
              break;
            }
          }
        }else{
          if(X.Type == xtype){
            RX = X;
          }
        }
        // Y
        if( Object.prototype.toString.call( Y ) === '[object Array]' ) {
          var NY = Y.length;
          for(var i = 0; i < NY; i++){
            if(Y[i].Type == ytype){
              RY = Y[i];
              break;
            }
          }
        }else{
          if(Y.Type == ytype){
            RY = Y;
          }
        }
        if(typeof RX == 'object' &&  typeof RY == 'object'){
          var N = RY.Value.length
          if(RY.Value.length == N){
            var  d = []
            for(var j = 0; j < N; j++){
              d.push([RX.Value[j], RY.Value[j]]);
            }
            ret = {data : d
                  , label : id + " x: " + xsource +"/" + xquant + "[" + xtype +"]"
                          + " y: " + "" + ysource +"/" + yquant + "[" + ytype +"]"
                  , points : { show : true }}

          }else{
            ret = { "error": "data error"
                  , "reason":"x an y values do not have the same length"}
          }

        }else{
          ret = { "error": "wrong request params"
                , "reason":"nothing in the path"}
        }
      }
    }else{
      ret = { "error": "wrong request params"
            , "reason":"wrong path"}
    }
  }else{
    ret = { "error": "wrong request params"
          , "reason":"too short"}
  }

  return toJSON(ret);
};
