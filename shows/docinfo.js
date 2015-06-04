function (doc, req) {
  var res = {DocInfo:true};

  if(doc && doc.Calibration){

    var dc   = doc.Calibration
      , dct  = dc.ToDo
      , dcc  = dc.Customer
      , dccu = dc.CustomerObject

    res.id           = doc._id;
    res.Certificate  = dc.Certificate;
    res.Issue        = dc.Issue;
    res.Year         = dc.Year;

    if(dct && dct.Type){
      res.ToDoType = dct.Type;
    }else{
      res.warn  = "missing ToDo";
    }

    if(dcc && dcc.Name){
      res.Customer = dcc.Name;
    }else{
      res.warn  = "missing Customer";
    }

    if(dccu && dccu.Name){
      res.Device = dccu.Name;
    }else{
      res.warn  = "CalibrationObject missing ";
    }

  }else{
    res.error  = "not a Calibration";
  }
  return toJSON(res);
};
