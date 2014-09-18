function(doc) {
  if(doc.Mp &&
     doc.Mp.Container){
    var container = doc.Mp.Container;
    for(var i = 0; i < container.length; i++){
      emit(doc._id, {value:i, display:container[i].Title});
    }
  }// Calibration

}