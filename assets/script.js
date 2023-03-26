// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.




  
   
 
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  $(function () {
    var saveBtns = $(".saveBtn");

    saveBtns.on("click", function() {
      var timeBlock = $(this).parent();
      var timeBlockHour = timeBlock.attr("id");
      var textArea = timeBlock.find(".description");
      var text = textArea.val();
      localStorage.setItem(timeBlockHour, text);
    });













  


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  var currentHour = dayjs().hour();
  console.log(currentHour);

  var timeBlocks = $(".time-block");
  console.log(timeBlocks);

  timeBlocks.each(function() {
    var timeBlockHour = parseInt($(this).attr("id"));
    console.log(timeBlockHour);

    if (currentHour > timeBlockHour) {
      $(this).addClass("past").removeClass("present future");
    } else if (currentHour < timeBlockHour) {
      $(this).addClass("future").removeClass("present past");
    } else {
      $(this).addClass("present").removeClass("past future");
    }
  });


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  function loadSavedData() {
    var timeBlocks = $(".time-block");
    timeBlocks.each(function() {
      var timeBlockHour = $(this).attr("id");
      var savedText = localStorage.getItem(timeBlockHour);
      if (savedText) {
        $(this).find(".description").val(savedText);
      }
    });
  }
  
  loadSavedData();


  // var savedDescription = localStorage.getItem("description");
  // console.log(savedDescription);
  // description.val(savedDescription);

  // TODO: Add code to display the current date in the header of the page.
  function updateTime() {
    var today = dayjs();
    $("#currentDay").text(today.format("dddd, MMMM D, YYYY, HH:mm:ss"));
  }
  
  setInterval(updateTime, 1000);  
});