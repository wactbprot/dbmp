function (doc, req) {
  var res = {};

  if(doc && doc.Calibration){
    var dc      = doc.Calibration,
        dcm     = dc.Measurement,
        dcp     = dc.Presettings,
        dcpt    = dcp.ToDo,
        dcpc    = dcp.Customer,
        dcmcuco = dcm.CalibrationObject[0];

    if(dcpt && dcpc && dcmcuco){
      res.Sign       = dc.Sign;
      res.Year       = dc.Year;
      res.Standard   = dc.Standard;
      res.Customer   = dcpc.Name;
      res.Device     = dcmcuco.Name;
      res.ToDoType   = dcpt.Type
    }else{
      res.error  = "ToDo or Customer or Customer Gauge missing";
    }
  }else{
    res.error  = "not a Calibration";
  }

  return toJSON(res);
};
