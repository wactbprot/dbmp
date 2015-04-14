function (doc, req) {
  var res = {DocInfo:true};

  if(doc && doc.Calibration){
    var dc   = doc.Calibration
      , dcp  = dc.Presettings
      , dcco = dc.CalibrationObject

    res.id    = doc._id;
    res.Sign  = dc.Sign;
    res.Year  = dc.Year;

    if(dcp){
      var dcpt     = dcp.ToDo || {}
        , dcpc     = dcp.Customer || {};

      res.Customer = dcpc.Name  || "~";
      res.ToDoType = dcpt.Type  || "~"
    }else{
      res.warn  = "ToDo or Customer missing";
    }

    if(dcco && dcco[0]){
      res.Device = dccu[0].Name|| "~";
    }else{
      res.warn  = "CalibrationObject missing ";
    }
  }else{
    res.error  = "not a Calibration";
  }

  return toJSON(res);
};
