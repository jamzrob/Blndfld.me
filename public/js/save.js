 function saveResults() {
    var pr = document.getElementById("pricerange");
    localStorage.price = pr.value;
    var endtime = document.getElementById("endtimeclock");
    localStorage.time = endtime.value;
    var searchBox = document.getElementById("search");
    localStorage.search = search.value; 
  }
