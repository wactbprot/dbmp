function(doc) {
/**
 * same as show docinfo
 *
 * emits standard and year
 */

  if(doc && doc.Calibration){
    var dc      = doc.Calibration
      , dcm     = dc.Measurement
      , dcsm    = dct.Standard
      , dct     = dc.ToDo                 || {}
      , dcc     = dc.Customer             || {}
      , dcco    = dc.CustomerObject       || {};
    emit(dcsm + "-" + dc.Year
        , { Id           : doc._id
          , Certificate  : dc.Certificate || "__cert__"
          , Issue        : dc.Issue       || "__issue__"
          , Year         : dc.Year        || "__year__"
          , Customer     : dcc.Name       || "__customer_name__"
          , Device       : dcco.Name      || "__device_name__"
          , ToDoType     : dct.Type       || "__todo_type__" });
  }
}
