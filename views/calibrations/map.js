function(doc) {
/**
 * same as show docinfo
 *
 * emits standard and year
 */

  if(doc && doc.Calibration){
    var dc      = doc.Calibration
      , dcm     = dc.Measurement
      , dct     = dc.ToDo     || {}
      , dcc     = dc.Customer || {}
      , dcsm    = dct.Standard
      , dccuco  = dc.CalibrationObject[0] || {}


    emit(dcsm + "-" + dc.Year
        , { Id       : doc._id
          , Sign     : dc.Sign      || "__sign__"
          , Year     : dc.Year      || "__year__"
          , Customer : dcc.Name     || "__customer_name__"
          , Device   : dccuco.Name  || "__device_name__"
          , ToDoType : dct.Type     || "__todo_type__" });
  }
}
