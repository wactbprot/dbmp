function (doc, req) {
  var res = {DocInfo:true};

  if(doc && doc.Calibration){
    var dc      = doc.Calibration,
        dcm     = dc.Measurement,
        dcp     = dc.Presettings,
        dcpt    = dcp.ToDo,
        dcpc    = dcp.Customer,
        dccuco  = dc.CalibrationObject[0];

    if(dcpt && dcpc && dccuco){
      res.id         = doc._id;
      res.Sign       = dc.Sign;
      res.Year       = dc.Year;
      res.Customer   = dcpc.Name;
      res.Device     = dccuco.Name;
      res.ToDoType   = dcpt.Type
    }else{
      res.warn  = "ToDo or Customer or Customer Gauge missing";
    }
  }else{
    res.error  = "not a Calibration";
  }

  return toJSON(res);
};
