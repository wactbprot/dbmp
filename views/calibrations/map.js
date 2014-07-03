function(doc) {
/**
 * same as show docinfo
 *
 * emits standard and year
 */

  if(doc && doc.Calibration){
    var dc      = doc.Calibration,
        dcm     = dc.Measurement,
        dcp     = dc.Presettings,
        dcpt    = dcp.ToDo,
        dcpc    = dcp.Customer,
        dcmcuco = dcm.CalibrationObject[0];

    if(dcpt && dcpc && dcmcuco){
      emit(dc.Standard + "-" + dc.Year,{
        Id       : doc._id,
        Sign     : dc.Sign,
        Year     : dc.Year,
        Standard : dc.Standard,
        Customer : dcpc.Name,
        Device   : dcmcuco.Name,
        ToDoType : dcpt.Type}
          )
    }
  }
}