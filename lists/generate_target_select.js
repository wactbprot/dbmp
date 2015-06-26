/**
 * List function generates a select box withe the enties
 * given in Todo building blocks. A discussion about the
 * todo structure can be found here:
 * http://a73434.berlin.ptb.de/mediawiki/index.php/Convention_over_configuration#Struktur_der_ToDo-Bausteine
 * @author wactbprot
 */
function(head, req) {

  var share  = require("lib/vl/share"),
      ro,
      r,rv,rvt,
      quant   = "",
      chk     = "",
      unit    = "",
      struct  = "",
      all     = [],
      values  = {value:[],
                display:[]},
      noOfVal = 0,
      cnt     = 0;

  start(share.startJSON);

    while(r = getRow()) {
        rv = r.value;

        if(rv.ToDo){
	    rvt = r.value.ToDo;

            if(rvt.Values){
		var rvtv = rvt.Values;
                //
                // neu
                //
		for(chk in rvtv){
		  if(chk == "Pressure"){
		    struct  = rvtv[chk],
		    unit    = rvtv[chk].Unit,
		    noOfVal = struct.Value.length;

		    for(var i = 0 ; i < noOfVal; i++){
                      all.push(parseFloat(struct.Value[i]));
                    } // for i
		  }
		}// for chk
            }//Values
	}// todo
        cnt++;
    }//while

  if(all.length > 0){
    all.sort(function(a,b){return a-b;});
    var ov = 0;
    for(var j = 0; j < all.length; j++){
      var cv = all[j];
      if(cv != ov){
        ov = cv;
        values.push({value:cv.toExponential(1),
                     display:cv.toExponential() + " " + unit});
      }
    }
    ro = {Selected: null,
          Select: values}
  }else{
    ro = {Selected:"",
          Select: [{value: null
                   , display: "no value"}]
  }
  return JSON.stringify(ro);
}
