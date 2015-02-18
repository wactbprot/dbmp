function(head, req) {
  var row, ro = {};

  while(row = getRow()) {
    var k = row.key
      , v = row.value;
    ro[k] = v;
  };

  send(JSON.stringify(ro))
}