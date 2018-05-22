var createRow = function(data) {
    // Get reference to existing tbody element, create a new table row element
    var tBody = $("tbody");
    var tRow = $("<tr>");

    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    var titleTd = $("<td>").text(data.Title);
    var yearTd = $("<td>").text(data.Year);
    var actorsTd = $("<td>").text(data.Actors);
    // Append the newly created table data to the table row
    tRow.append(titleTd, yearTd, actorsTd);
    // Append the table row to the table body
    tBody.append(tRow);
  };


  //Storing data into fire base from click submission
  $("#submit-button").on("click", function(event) {
    event.preventDefault();
    var employeeName = $("#name-input").val().trim();
    var role = $("#role-input").val().trim();
    var startDate = $("#startDate-input").val().trim();
    var monthlyRate = $("#rate-input").val().trim();

    database.ref().push({
        employeeName: employeeName,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });


  });