



$(function () {
  
  var currentHour = dayjs().format('H');
  console.log(currentHour)
  var sections = document.querySelectorAll('form')
 
  var form = $('form')
console.log(sections)
  // ------------------------------------------------------

  for (var i = 0; i < sections.length; i++) {
    if (sections[i].id == currentHour) {
      $(sections[i]).removeClass("past future").addClass('present')}
    };
    
    for (var i = 0; i < sections.length; i++) {
    if (sections[i].id < currentHour) {
      $(sections[i]).removeClass("present future").addClass('past')}
    };

    for (var i = 0; i < sections.length; i++) {
      if (sections[i].id > currentHour) {
      $(sections[i]).removeClass("present past").addClass('future')}
    };

    // resets all timeslots to 'future' at 12am each day
    for (var i = 0; i < sections.length; i++) {
      if (currentHour == 0) {
      $(sections[i]).removeClass("present past").addClass('future')}
    };



function renderLastComment() {
  
  var savedEvent = localStorage.getItem(parentFormID);
 console.log(savedEvent)
  
  if (savedEvent !== null) {
    if (parentFormID == form.attr('id')) {
   form.find('textarea').text(parentFormID.value);}
   
  } else {
    return;
  }
}

var btns = $('.time-block button');
function storeEvent(event) {
  event.preventDefault();
  var btn = $(this);
  var textArea = btn.prev().val();
  var parentForm = btn.parent();
  var parentFormID = parentForm.attr('id');
  console.log(textArea);

  localStorage.setItem(parentFormID, textArea)
  var savedEvent = localStorage.getItem(parentFormID);
  console.log(savedEvent)
  var keyRef = Object.keys( localStorage)
  console.log(keyRef)

  renderLastComment()
 
  }



// for (let key of Object.keys( localStorage)) {
//   console.log(key)}
  // console.log(savedEvent)
  // var schedule = {
  //   Hour: parentFormID,
  //   Message: textArea
  //   };
  //   console.log(schedule)
  // localStorage.setItem("schedule", JSON.stringify(schedule));
  // var savedEvent = localStorage.getItem(schedule);
  // if (savedEvent !== null) {
  //       if (schedule.Hour == form.attr('id')) {
  //      form.find('textarea').text(schedule.Message);}
//  console.log(savedEvent)
  
  //  renderLastComment()
// }}

btns.click(storeEvent);



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  var date = dayjs().format('dddd MMM D YYYY')

  $('#currentDay').text(date);

  function init() {
    renderLastComment();
}
init();
});
