function(doc) {
    if(doc.Calibration &&
       doc.Calibration.ToDo){
	emit(doc._id, {"ToDo":doc.Calibration.ToDo});
    }
}
