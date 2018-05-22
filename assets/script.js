var config = {
    apiKey: "AIzaSyDLSCwjab1oJGzIbUjZ5IsumSonzQ3MIdA",
    authDomain: "newtimesheet-5cb20.firebaseapp.com",
    databaseURL: "https://newtimesheet-5cb20.firebaseio.com",
    projectId: "newtimesheet-5cb20",
    storageBucket: "",
    messagingSenderId: "231514382243"
  };

firebase.initializeApp(config);

var createRow = function(data) {
    // Get reference to existing tbody element, create a new table row element
    var tBody = $("tbody");
    var tRow = $("<tr>");

    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    var empoloyeeName = $("<td>").text(data.empoloyeeName);
    var role = $("<td>").text(data.role);
    var startDate = $("<td>").text(data.startDate);
    var monthsWorked = $("<td>").text(data.monthsWorked);
    // var monthlyRate = $("<td>").text(data.monthlyRate);

   // total build

    // Append the newly created table data to the table row
    tRow.append(titleTd, yearTd, actorsTd);
    // Append the table row to the table body
    tBody.append(tRow);
  };
