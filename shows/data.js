// http://localhost:5984/vl_db/_design/dbmp/_show/plotdata/cal-2016-ce3-kk-75013_0001?x=Analysis:Pressure:ind&y=Analysis:Error:relative
function (doc, req) {
  var x, y, ret;
  if(doc && doc.Calibration){
    var dc = doc.Calibration;
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
    if(x.length == 3 && y.length == 3){
      if(dc[x[0]] &&
         dc[x[0]]["Values"][x[1]] &&
         dc[x[0]]["Values"][x[1]]&&
         dc[y[0]] &&
         dc[y[0]]["Values"][y[1]] &&
         dc[y[0]]["Values"][y[1]]){
        ret = dc[y[0]]["Values"][y[1]]
      }
        }else{
      ret = { "error": "wrong request params"
            , "reason":"too short"}
    }
    return toJSON(ret);

  }
};
