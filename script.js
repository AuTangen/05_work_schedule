



$(function () {
  
  var currentHour = dayjs().format('H');


var timeBlocks = $('.time-block')

timeBlocks.each(function() {
  var timeBlock = $(this)

  var hour = timeBlock.attr('id').split('-')[1];
  
  if (hour == currentHour) {
    timeBlock.removeClass("past future").addClass('present')
  }
  if (hour < currentHour) {
    timeBlock.removeClass("present future").addClass('past')
  }
  if (hour > currentHour) {
    timeBlock.removeClass("present past").addClass('future')
  }
  })

// -----------------------------------------------------------

function renderLastComment() {
  timeBlocks.each(function() {
    var timeBlock = $(this)
    var hour = timeBlock.attr('id').split('-')[1];
    var savedEvent = localStorage.getItem(hour);
    
    timeBlock.find('textarea').text(savedEvent);
})

  };





// --------------------------------------------
var btns = $('.time-block button');
function storeEvent(event) {
  event.preventDefault();
  var btn = $(this);
  var textArea = btn.prev().val();
  var parentForm = btn.parent();
  var parentFormID = parentForm.attr('id').split('-')[1];
  

  localStorage.setItem(parentFormID, textArea)


  renderLastComment()
 
  }

btns.click(storeEvent);

  var date = dayjs().format('dddd MMM D YYYY')

  $('#currentDay').text(date);

  function init() {
    renderLastComment();
}
init();
});
