console.log("This page works!");

// define any DOM element references (use jquery?)
// to-do: add additional elements
var todaysDateEl = $('#currentDay'); //date and time are showing here
var todaysTimeEl = $('currentTime'); //created this in case i wanted to do time separate
var currMoment = moment(); //moment variable 
var userInfoEl = $('#container'); //entire area where time displays 
var timeOptionsEl = $('<tr>'); //create new elements
var timeList = $('timeList'); // print to html


// i get my variables mixed up



// moment function to display date and time
today = { text: moment().format("h:00 A"), hour: moment().hour() };
console.log(today)
$(todaysDateEl).text(currMoment.format("LLLL"));
console.log("time displays!!!");


// Time Table Container Section

// create list of times that would be available on schedule (these should only go in column 1)
// column 3 will have a button to save userInput which is in column 2
 var timeOptions = [
     '6:00 AM',
     '7:00 AM',
     '8:00 AM',
     '9:00 AM',
     '10:00 AM',
     '11:00 AM',
     '12:00 PM',
     '1:00 PM',
     '2:00 PM',
     '3:00 PM',
     '4:00 PM',
    //  testing this out if i get it to work i'll finish times
 ];


//  create a new <tr> for each time option (length) from timeOptions list above 
// todo: i think i need to make an array so column 1, 2, 3 render to page
for (var i = 0; i < timeOptions.length; i++) {
console.log([i], "column 1, column 2, column3");

// at top var timeOptionsEl to create new element (<tr>) for each timeOption
timeOptionsEl = $('<tr>' + timeOptions[i] + '</tr>'); 
console.log(timeOptionsEl);

// now create text  
// todo: this not working
timeOptionsEl.text(timeOptions[i]);

// add this new element <tr> created to the table container
timeList.append(timeOptionsEl);

// select all <tr> elements on page (same as getElementbyId)
$.each (timeOptions, function(i, timeOptions) {
    timeOptionsEl.append("<tr>" + timeOptions + "/<tr>");
})

}

// add save button for each element











