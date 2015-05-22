function (doc, req) {
  var res = {DocInfo:true};

  if(doc && doc.Calibration){

    var dc   = doc.Calibration
      , dct  = dc.ToDo
      , dcc  = dc.Customer
      , dcco = dc.CalibrationObject

    res.id    = doc._id;
    res.Sign  = dc.Sign;
    res.Year  = dc.Year;
    
    if(dct){
      res.ToDoType = dct.Type  || "~"
    }else{
      res.warn  = "missing ToDo";
    }

    if(dcc){
      res.Customer = dcc.Name  || "~";
    }else{
      res.warn  = "missing Customer";
    }

    if(dcco && dcco[0]){
      res.Device = dcco[0].Name|| "~";
    }else{
      res.warn  = "CalibrationObject missing ";
    }

  }else{
    res.error  = "not a Calibration";
  }
  return toJSON(res);
};
