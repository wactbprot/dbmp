function(doc) {
/**
 * same as show docinfo
 *
 * emits standard and year
 */

  if(doc && doc.Calibration){
    var dc      = doc.Calibration
      , dcm     = dc.Measurement
      , dcp     = dc.Presettings
      , dcpt    = dcp.ToDo     ||{}
      , dcpc    = dcp.Customer ||{}
      , dccuco  = dc.CalibrationObject[0] ||{}
      , dcsm    = dc.Standard ? dc.Standard.Name : "_X_";

    emit(dcsm + "-" + dc.Year
        , { Id       : doc._id
          , Sign     : dc.Sign       || "__sign__"
          , Year     : dc.Year       || "__year__"
          , Customer : dcpc.Name     || "__customer_name__"
          , Device   : dccuco.Name  || "__device_name__"
          , ToDoType : dcpt.Type     || "__todo_type__" });
  }
}
