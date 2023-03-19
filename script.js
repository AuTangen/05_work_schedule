// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements in the html
// -----------------------------------------------------------------------
// function renderLastGrade() {
//   // Use JSON.parse() to convert text to JavaScript object
//   var lastGrade = JSON.parse(localStorage.getItem("yourScore"));
//   // Check if data is returned, if not exit out of the function
//   if (lastGrade !== null) {
//   document.getElementById("saved-name").innerHTML = lastGrade.Name;
//   document.getElementById("saved-grade").innerHTML = (lastGrade.Grade + " %");

//   } else {
//     return;
//   }
// };




$(function () {

  var currentHour = dayjs().format('H');
  console.log(currentHour)
  var sections = document.querySelectorAll('form')
  // var section9 = document.getElementById('09');
  // var section10 = document.getElementById('10');
  // var section11 = document.getElementById('11');
  // var section12 = document.getElementById('12');
  // var section13 = document.getElementById('13');
  // var section14 = document.getElementById('14');
  // var section15 = document.getElementById('15');
  // var section16 = document.getElementById('16');
  // var section17 = document.getElementById('17');
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



  //   console.log(sections[i]);}
  //   if (currentHour = sections[i].id) { (presentFunc(event) {
  //      $(event.target).removeClass("past future").addClass("present")})};
  //   };
// there's definitely a for loop or forEach that'll do this for me but I couldn't figure it out
  // present-----------------------------------------
//   if (section9.id == currentHour) {
//     $(section9).removeClass("past future").addClass('present')
//   };
//   if (section10.id == currentHour) {
//     $(section10).removeClass("past future").addClass('present')
//   }
//   if (section11.id == currentHour) {
//     $(section11).removeClass("past future").addClass('present')
//   }
//   if (section12.id == currentHour) {
//     $(section12).removeClass("past future").addClass('present')
//   }
//   if (section13.id == currentHour) {
//     $(section13).removeClass("past future").addClass('present')
//   }
//   if (section14.id == currentHour) {
//     $(section14).removeClass("past future").addClass('present')
//   }
//   if (section15.id == currentHour) {
//     $(section15).removeClass("past future").addClass('present')
//   }
//   if (section16.id == currentHour) {
//     $(section16).removeClass("past future").addClass('present')
//   }
//   if (section17.id == currentHour) {
//     $(section17).removeClass("past future").addClass('present')
//   }
//   //  past--------------------------------------------------
//   if (section9.id < currentHour) {
//     $(section9).removeClass("present future").addClass('past')
//   }
//   if (section10.id < currentHour) {
//     $(section10).removeClass("present future").addClass('past')
//   }
//   if (section11.id < currentHour) {
//     $(section11).removeClass("present future").addClass('past')
//   }
//   if (section12.id < currentHour) {
//     $(section12).removeClass("present future").addClass('past')
//   }
//   if (section13.id < currentHour) {
//     $(section13).removeClass("present future").addClass('past')
//   }
//   if (section14.id < currentHour) {
//     $(section14).removeClass("present future").addClass('past')
//   }
//   if (section15.id < currentHour) {
//     $(section15).removeClass("present future").addClass('past')
//   }
//   if (section16.id < currentHour) {
//     $(section16).removeClass("present future").addClass('past')
//   }
//   if (section17.id < currentHour) {
//     $(section17).removeClass("present future").addClass('past')
//   }
// // future---------------------------------------------------------

// if (section9.id > currentHour) {
//   $(section9).removeClass("present past").addClass('future')
// };
// if (section10.id > currentHour) {
//   $(section10).removeClass("present past").addClass('future')
// }
// if (section11.id > currentHour) {
//   $(section11).removeClass("present past").addClass('future')
// }
// if (section12.id > currentHour) {
//   $(section12).removeClass("present past").addClass('future')
// }
// if (section13.id > currentHour) {
//   $(section13).removeClass("present past").addClass('future')
// }
// if (section14.id > currentHour) {
//   $(section14).removeClass("present past").addClass('future')
// }
// if (section15.id > currentHour) {
//   $(section15).removeClass("present past").addClass('future')
// }
// if (section16.id > currentHour) {
//   $(section16).removeClass("present past").addClass('future')
// }
// if (section17.id > currentHour) {
//   $(section17).removeClass("present past").addClass('future')
// }

console.log('is this thing on?')


function renderLastComment() {
  // Use JSON.parse() to convert text to JavaScript object
  var lastComment = JSON.parse(localStorage.getItem("comment"));
  // Check if data is returned, if not exit out of the function
  if (lastComment !== null) {
  document.getElementById("input1").innerHTML = lastComment;
   
  } else {
    return;
  }
}


// -this needs work but its getting there---------------------------

// // for (var i = 0; i < sections.length; i++) {
// //   sections[i].addEventListener("submit" , function(event)  {
// //     event.preventDefault();
// //     console.log(event.target)
// //     console.log(sections[i].innerText)
// //     // var comment = this.value
// //     // $("textarea", this).text(event.input.value)
   
    
// //     // localStorage.setItem("comment", JSON.stringify(comment));
// //     // renderLastComment();
// //     // console.log(comment)
    
//     });
//   }
// -----------------------------------------------------------------

// this works-----------------------
var input = document.getElementById('input1')
var save = document.getElementById('09')
  save.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(event)
  // console.log(this.id)
  var comment = input.value
  
  localStorage.setItem("comment", JSON.stringify(comment));
  renderLastComment();
  console.log(comment)
  
  });
//  ================================================
    // var comment = {
    //   comment9: input.value.trim(),
    //   comment10: input.value.trim(),
    //   comment11: input.value.trim(),
    //   comment12: input.value.trim(),
    //   comment13: input.value.trim(),
    //   comment14: input.value.trim(),
    //   comment15: input.value.trim(),
    //   comment16: input.value.trim(),
    //   comment17: input.value.trim()
      
    //   };
    // console.log(comment9)
    // localStorage.setItem("comment", JSON.stringify(comment));
    // renderLastComment();
    
    // });



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
