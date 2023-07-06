let newDate = new Date()
document.getElementById("copyright-year").innerText = newDate.getFullYear();

let lastModified = document.lastModified
document.getElementById("lastModified").innerText = lastModified;

if (typeof Storage !== "undefined") {
    var lastVisitDate = localStorage.getItem("lastVisitDate");
    var currentDate = new Date();
  
    if (lastVisitDate === null) {
      localStorage.setItem("lastVisitDate", currentDate);
      console.log("Welcome! Let us know if you have any questions.");
    } else {
      var timeDiff = Math.abs(currentDate - new Date(lastVisitDate));
      var daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  
      if (daysDiff < 1) {
        console.log("Back so soon! Awesome!");
      } else {
        var message = "You last visited " + daysDiff + " day";
        if (daysDiff > 1) {
          message += "s";
        }
        message += " ago.";
        console.log(message);
      }
  
      var visitCountSpan = document.getElementById("visitCount");
      var visitCount = parseInt(localStorage.getItem("visitCount")) || 0;
      visitCount++;
      visitCountSpan.textContent = "You have visited this page " + visitCount + " time(s).";
      localStorage.setItem("visitCount", visitCount);
      localStorage.setItem("lastVisitDate", currentDate);
    }
  } else {
    console.log("Sorry, localStorage is not supported in this browser.");
  }