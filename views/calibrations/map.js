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
      emit(dc.Standard + "-" + dc.Year,[dc.Sign,
                                        dc.Year,
                                        dc.Standard,
                                        dcpc.Name,
                                        dcmcuco.Name,
                                        dcpt.Type].join(", ")
          )
    }
  }
}