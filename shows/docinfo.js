function (doc, req) {
  var res = {DocInfo:true};

  if(doc && doc.Calibration){
<<<<<<< HEAD
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
=======
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
>>>>>>> ea57d9441fdbdcebff4670a605a30ea38bf93b34
    }else{
      res.warn  = "CalibrationObject missing ";
    }
  }else{
    res.error  = "not a Calibration";
  }

  return toJSON(res);
};
