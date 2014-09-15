function(head, req) {
  var row, ro = [];

  while(row = getRow()) {
    ro.push(row.value)
  };

  send(JSON.stringify(ro))
}