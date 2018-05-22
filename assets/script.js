var config = {
    apiKey: "AIzaSyDLSCwjab1oJGzIbUjZ5IsumSonzQ3MIdA",
    authDomain: "newtimesheet-5cb20.firebaseapp.com",
    databaseURL: "https://newtimesheet-5cb20.firebaseio.com",
    projectId: "newtimesheet-5cb20",
    storageBucket: "",
    messagingSenderId: "231514382243"
};

firebase.initializeApp(config);
var database = firebase.database();

var createRow = function (employeeName,role,startDate,monthlyRate) {
    // Get reference to existing tbody element, create a new table row element
    var tBody = $("tbody");
    var tRow = $("<tr>");

    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    var empoloyeeName = $("<td>").text(employeeName);
    var role = $("<td>").text(role);
    var startDate = $("<td>").text(startDate);
    var monthlyRate= $("<td>").text(monthlyRate);
    // var monthlyRate = $("<td>").text(data.monthlyRate);


    

    // total build

    // Append the newly created table data to the table row
    tRow.append(empoloyeeName, role, startDate, monthlyRate);
    // Append the table row to the table body
    tBody.append(tRow);
};


//Storing data into fire base from click submission
$("#submit-button").on("click", function (event) {
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

var starCountRef = firebase.database().ref();
starCountRef.on('child_added', function (snapshot) {
   // updateStarCount(postElement, snapshot.val());
   console.log(snapshot.val());
   var results = snapshot.val();
   console.log(results);
   console.log(results.employeeName);
   createRow(results.employeeName,results.role,results.startDate,results.monthlyRate);     
});
