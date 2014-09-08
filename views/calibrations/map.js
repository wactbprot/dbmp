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
        dcpt    = dcp.ToDo     ||{},
        dcpc    = dcp.Customer ||{},
        dcmcuco = dcm.CalibrationObject[0] ||{};


      emit(dc.Standard + "-" + dc.Year,{
        Id       : doc._id ,
        Sign     : dc.Sign       || "__sign__",
        Year     : dc.Year       || "__year__",
        Standard : dc.Standard   || "__standard__",
        Customer : dcpc.Name     || "__customer_name__",
        Device   : dcmcuco.Name  || "__device_name__",
        ToDoType : dcpt.Type     || "__todo_type__" });
  }
}
