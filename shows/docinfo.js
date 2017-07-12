function (doc, req) {
  var res = {DocInfo:true}
  var valid = false;

  if(doc && doc.Calibration){
    var  dc   = doc.Calibration
      , dct   = dc.ToDo
      , dcc   = dc.Customer
      , dccu  = dc.CustomerObject

    valid = true;

    res.Id           = doc._id;
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
  }

  if(doc && doc.Measurement){
    res.ToDoType = "measurement";
    res.Customer = "internal";
    res.Device   = "internal"

    res.Certificate  = "-";
    res.Issue        = "-";
    res.Year         = "-";

    valid   = true;
    res.Id  = doc._id;
  }

  if(doc && doc.Comissioning){
    valid   = true;
    res.Id  = doc._id;
  }

  if(!valid){
    res.error  = "not a calibration-, measurement or commissioning document";
  }
  return toJSON(res);
};
