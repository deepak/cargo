if (this.CARGO === undefined) {
  CARGO = {};
}

(function(exports) {
  "use strict";

  exports.searchOnGoogle = function() {
    var query = document.getElementById("docs-search-query").value;

    var form = document.createElement("form");
    form.method = "GET";
    form.action = "https://www.google.co.in/#q=" + query + "+site:http://doc.crates.io";
    form.target = "_blank";
    document.body.appendChild(form);
    form.submit();

    // var googleUrl = "https://www.google.com?q=" + query + "+site:http:%2F%2Fdoc.crates.io";
    // console.log(googleUrl);
    // var win = window.open(googleUrl, '_blank');
    // if (win) {
    //   // Browser has allowed it to be opened
    //   win.focus();
    // } else {
    //   // Broswer has blocked it
    //   alert('Please allow popups for this site');
    // }

    return false;
  };
})(this.CARGO = {});
