function(doc) {
    if(doc.Calibration &&
       doc.Calibration.Presettings &&
       doc.Calibration.Presettings.ToDo){

	emit(doc._id, {"ToDo":doc.Calibration.Presettings.ToDo});
	
    }
}
