function(doc) {
  for(var i in doc){
    if(typeof doc[i] == "object"){
      if(doc[i].Definitions){
        var dd = doc[i].Definitions
          , N  = dd.length;
        for(var j=0; j < N; j++){
          emit(doc[i].Standard + "_" + doc[i].Definitions[j].DefinitionClass, doc[i].Definitions[j]);
        }
      }
    }
  }
}
