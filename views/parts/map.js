function(doc) {
  if(doc.Calibration){
    emit(doc._id, doc);
  }// Calibration

  if(doc.Constants){
    emit(doc._id, doc);
  } // Constants

  if(doc.Standard){
    emit(doc._id, doc);
  } // Standard

  if(doc.CalibrationObject){
    emit(doc._id, doc);
  }// CalibrationObject

  if(doc.AuxObject){
    emit(doc._id, doc);
  }
}