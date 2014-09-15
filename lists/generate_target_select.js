/**
 * List function generates a select box withe the enties
 * given in Todo building blocks. A discussion about the
 * todo structure can be found here:
 * http://a73434.berlin.ptb.de/mediawiki/index.php/Convention_over_configuration#Struktur_der_ToDo-Bausteine
 * @author wactbprot
 */
function(head, req) {

  var share  = require("lib/vl/share"),
      r,rv,rvt,
      quant   = "",
      chk     = "",
      unit    = "",
      struct  = "",
      all     = [],
      values  = [],
      noOfVal = 0,
      cnt     = 0,
      ro     = {
        "DisplayAs":"singleSelectBox"
      };

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
		    if((quant == "" || chk  == quant) &&
		       (unit  == "" || unit == rvtv[quant].Unit)){

		      quant  = chk,
		      struct = rvtv[quant],
		      unit   =  rvtv[quant].Unit,
		      noOfVal     =  struct.Value.length;

			for(var i = 0 ; i < noOfVal; i++){

			    all.push(parseFloat(struct.Value[i]));

			} // for i
		    }// quant
		}// for chk
            }//Values
	}// todo
        cnt++;
    }//while

    all.sort(function(a,b){return a-b;});

    var ov = 0;

    for(var j = 0; j < all.length; j++){
	var cv = all[j];

	if(cv != ov){
	    ov = cv;
	    values.push({"value":cv, "display":"" + cv.toExponential()})
	}
    }

    //
  ro.unit    = unit;
  ro.options = values;
  return JSON.stringify(ro);
}