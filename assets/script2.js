console.log("This page works!");

// define any DOM element references (use jquery?)
// to-do: add additional elements
var todaysDateEl = $('#currentDay'); //date and time are showing here
var todaysTimeEl = $('currentTime'); //created this in case i wanted to do time separate
var currMoment = moment(); //moment variable 
var userInfoEl = $('#container'); //entire area where time displays 
var timeOptionsEl = $('<tr>'); //create new elements
var timeList = $('.timeList'); // print to html
var userInfo = {}; //stored user entry variable
var retrieveUserInfo = localStorage.getItem ("userInfo"); // retrieve user entry variable

// i get my variables mixed up

// moment function using moment api to display date and time
today = { text: moment().format("h:00 A"), hour: moment().hour() };
console.log(today)
$(todaysDateEl).text(currMoment.format("LLLL"));
console.log("time displays!!!");


// Time Table Container Section
// maybe i am using my variables timeOptions or timeOptionsEl incorrectly
// create list of times that would be available on schedule (these should only go in column 1)
// create an object array [times (will complete), userInfo]

//  testing this out if i get it to work i'll finish times
var timeOptions = ['6:00 AM','7:00 AM', '8:00 AM', '9:00 AM','10:00 AM','11:00 AM','12:00 PM',];
console.log("time options array", timeOptions);

  
//  for i create a new <tr> for each [index] time option (length) from timeOptions list above 
function renderData () {
  for (var i = 0; i < timeOptions.length; i ++) 
    console.log("timeOption length", timeOptions.length);
    console.log("loop running", timeOptions[i]);
  {
    // create new element for rows in table 
    var timeOption = timeOptions[i]; // get time at current index
    console.log(i, timeOption);    

    var newRowEl = $("<tr>"); //create new <tr> entire element
    var timeColumnEl = $("<td>"); // create new <td>
    var detailsInputEl = $("<td>"); // create new input 
    newRowEl.append(timeColumnEl);
    newRowEl.append(detailsInputEl);
    
    timeColumnEl.text(timeOption);
    detailsInputEl.html('<div>Details</div>');

    console.log(newRowEl);
    timeList.append(newRowEl);
    }
}

renderData();



// // assign class (in the future)
//     // var addRowClass ()
// // assign row to attribute
//     createRow.attr('timeList', timeOptions[i]);
// // display row 
//     createRow.text(timeOptions[i]);
//     console.log(createRow.timeOptions);
// };

// }
// with some formatting conditions for past, present, future events
//         if (i > currMoment) {
//         Element.setAttribute("present");
//         } 
//         else if (i < currMoment) { 
//         Element.setAttribute("future"); 
//         }
//         else (i === currMoment) 
//         Element.setAttribute("present");
//        };

// var timeOptionsEl to create new element for (<tr>) for everything between <tr> and <td> within that for each timeOption [i]
// timeOptionsEl = $('<tr' + timeOptions[i] + '</td>'); 
// console.log([i]);
// $('#timeList > tbody:last-child').append('<tr>...</tr>');

// now create text to html  
// todo: this not working
// timeOptionsEl.text(timeOptions[i]);

// add this new element <tr> created to the table container
// timeList.append(timeOptionsEl);

// this is in our class work but not sure if i need to do this:
// select all <tr> elements on page (same as getElementbyId)
// $.each (timeOptions, function(i, timeOptions) {
//     timeOptionsEl.append('<tr>' + timeOptions + '/<tr>');
// })

// }   

// column data should be 1 timeList, 2 userInfo, 

// save button on click to local (for variables created above as userInfo)
// localStorage.on('click', 'userInfo', JSON.stringify('userInfo'));

// after user enters data  save button (onclick )

// when refreshed data displays (for variables created above as userInfo)

// make sure data saves and form doesn't reset - prevent default

// if time > then color present, if else, color past, else color future





